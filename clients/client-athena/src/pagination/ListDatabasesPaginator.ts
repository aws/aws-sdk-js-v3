import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListDatabasesCommandInput,
  ...args: any
): Promise<ListDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatabasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListDatabasesCommandInput,
  ...args: any
): Promise<ListDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.listDatabases(input, ...args);
};
export async function* paginateListDatabases(
  config: AthenaPaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatabasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatabasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
