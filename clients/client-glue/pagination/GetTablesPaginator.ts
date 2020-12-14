import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import { GetTablesCommand, GetTablesCommandInput, GetTablesCommandOutput } from "../commands/GetTablesCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetTablesCommandInput,
  ...args: any
): Promise<GetTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetTablesCommandInput,
  ...args: any
): Promise<GetTablesCommandOutput> => {
  // @ts-ignore
  return await client.getTables(input, ...args);
};
export async function* paginateGetTables(
  config: GluePaginationConfiguration,
  input: GetTablesCommandInput,
  ...additionalArguments: any
): Paginator<GetTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTablesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
