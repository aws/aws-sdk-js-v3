import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "../commands/GetStatementResultCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: GetStatementResultCommandInput,
  ...args: any
): Promise<GetStatementResultCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetStatementResultCommand(input), ...args);
};
const makePagedRequest = async (
  client: RedshiftData,
  input: GetStatementResultCommandInput,
  ...args: any
): Promise<GetStatementResultCommandOutput> => {
  // @ts-ignore
  return await client.getStatementResult(input, ...args);
};
export async function* getStatementResultPaginate(
  config: RedshiftDataPaginationConfiguration,
  input: GetStatementResultCommandInput,
  ...additionalArguments: any
): Paginator<GetStatementResultCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetStatementResultCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
