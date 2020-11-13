import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: ListDatabasesCommandInput,
  ...args: any
): Promise<ListDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatabasesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RedshiftData,
  input: ListDatabasesCommandInput,
  ...args: any
): Promise<ListDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.listDatabases(input, ...args);
};
export async function* listDatabasesPaginate(
  config: RedshiftDataPaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatabasesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatabasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RedshiftData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftData | RedshiftDataClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
