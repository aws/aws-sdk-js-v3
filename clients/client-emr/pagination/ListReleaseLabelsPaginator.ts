import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import {
  ListReleaseLabelsCommand,
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
} from "../commands/ListReleaseLabelsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListReleaseLabelsCommandInput,
  ...args: any
): Promise<ListReleaseLabelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReleaseLabelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListReleaseLabelsCommandInput,
  ...args: any
): Promise<ListReleaseLabelsCommandOutput> => {
  // @ts-ignore
  return await client.listReleaseLabels(input, ...args);
};
export async function* paginateListReleaseLabels(
  config: EMRPaginationConfiguration,
  input: ListReleaseLabelsCommandInput,
  ...additionalArguments: any
): Paginator<ListReleaseLabelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReleaseLabelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
