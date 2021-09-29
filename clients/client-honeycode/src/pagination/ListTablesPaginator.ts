import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { HoneycodePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HoneycodeClient,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Honeycode,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.listTables(input, ...args);
};
export async function* paginateListTables(
  config: HoneycodePaginationConfiguration,
  input: ListTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTablesCommandOutput;
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
