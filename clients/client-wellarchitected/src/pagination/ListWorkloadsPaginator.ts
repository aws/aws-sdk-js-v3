import { WellArchitected } from "../WellArchitected";
import { WellArchitectedClient } from "../WellArchitectedClient";
import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "../commands/ListWorkloadsCommand";
import { WellArchitectedPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WellArchitectedClient,
  input: ListWorkloadsCommandInput,
  ...args: any
): Promise<ListWorkloadsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkloadsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WellArchitected,
  input: ListWorkloadsCommandInput,
  ...args: any
): Promise<ListWorkloadsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkloads(input, ...args);
};
export async function* paginateListWorkloads(
  config: WellArchitectedPaginationConfiguration,
  input: ListWorkloadsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkloadsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkloadsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WellArchitected) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WellArchitectedClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WellArchitected | WellArchitectedClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
