import { QLDB } from "../QLDB";
import { QLDBClient } from "../QLDBClient";
import { ListLedgersCommand, ListLedgersCommandInput, ListLedgersCommandOutput } from "../commands/ListLedgersCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListLedgersCommandInput,
  ...args: any
): Promise<ListLedgersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLedgersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QLDB,
  input: ListLedgersCommandInput,
  ...args: any
): Promise<ListLedgersCommandOutput> => {
  // @ts-ignore
  return await client.listLedgers(input, ...args);
};
export async function* paginateListLedgers(
  config: QLDBPaginationConfiguration,
  input: ListLedgersCommandInput,
  ...additionalArguments: any
): Paginator<ListLedgersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLedgersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QLDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QLDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QLDB | QLDBClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
