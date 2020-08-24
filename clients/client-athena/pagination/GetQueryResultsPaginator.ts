import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "../commands/GetQueryResultsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AthenaClient,
  input: GetQueryResultsCommandInput,
  ...args: any
): Promise<GetQueryResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetQueryResultsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Athena,
  input: GetQueryResultsCommandInput,
  ...args: any
): Promise<GetQueryResultsCommandOutput> => {
  // @ts-ignore
  return await client.getQueryResults(input, ...args);
};
export async function* getQueryResultsPaginate(
  config: AthenaPaginationConfiguration,
  input: GetQueryResultsCommandInput,
  ...additionalArguments: any
): Paginator<GetQueryResultsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetQueryResultsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
