import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "../commands/ListStatementsCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: ListStatementsCommandInput,
  ...args: any
): Promise<ListStatementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStatementsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RedshiftData,
  input: ListStatementsCommandInput,
  ...args: any
): Promise<ListStatementsCommandOutput> => {
  // @ts-ignore
  return await client.listStatements(input, ...args);
};
export async function* listStatementsPaginate(
  config: RedshiftDataPaginationConfiguration,
  input: ListStatementsCommandInput,
  ...additionalArguments: any
): Paginator<ListStatementsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStatementsCommandOutput;
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
