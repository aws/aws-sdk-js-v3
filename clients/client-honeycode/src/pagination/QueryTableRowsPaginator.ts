import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";
import {
  QueryTableRowsCommand,
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
} from "../commands/QueryTableRowsCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HoneycodeClient,
  input: QueryTableRowsCommandInput,
  ...args: any
): Promise<QueryTableRowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryTableRowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Honeycode,
  input: QueryTableRowsCommandInput,
  ...args: any
): Promise<QueryTableRowsCommandOutput> => {
  // @ts-ignore
  return await client.queryTableRows(input, ...args);
};
export async function* paginateQueryTableRows(
  config: HoneycodePaginationConfiguration,
  input: QueryTableRowsCommandInput,
  ...additionalArguments: any
): Paginator<QueryTableRowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryTableRowsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Honeycode) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HoneycodeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Honeycode | HoneycodeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
