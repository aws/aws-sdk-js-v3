import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "../commands/ListIngestionsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListIngestionsCommandInput,
  ...args: any
): Promise<ListIngestionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIngestionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListIngestionsCommandInput,
  ...args: any
): Promise<ListIngestionsCommandOutput> => {
  // @ts-ignore
  return await client.listIngestions(input, ...args);
};
export async function* paginateListIngestions(
  config: QuickSightPaginationConfiguration,
  input: ListIngestionsCommandInput,
  ...additionalArguments: any
): Paginator<ListIngestionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIngestionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
