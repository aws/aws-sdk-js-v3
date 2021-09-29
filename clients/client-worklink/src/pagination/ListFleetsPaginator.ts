import { WorkLink } from "../WorkLink";
import { WorkLinkClient } from "../WorkLinkClient";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkLinkClient,
  input: ListFleetsCommandInput,
  ...args: any
): Promise<ListFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFleetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkLink,
  input: ListFleetsCommandInput,
  ...args: any
): Promise<ListFleetsCommandOutput> => {
  // @ts-ignore
  return await client.listFleets(input, ...args);
};
export async function* paginateListFleets(
  config: WorkLinkPaginationConfiguration,
  input: ListFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListFleetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFleetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkLink) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkLinkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
