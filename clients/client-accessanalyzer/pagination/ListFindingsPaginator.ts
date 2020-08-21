import { AccessAnalyzer } from "../AccessAnalyzer";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listFindings(input, ...args);
};
export async function* listFindingsPaginate(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListFindingsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
