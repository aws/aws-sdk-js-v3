import { AccessAnalyzer } from "../AccessAnalyzer";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListAnalyzersCommand,
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput,
} from "../commands/ListAnalyzersCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListAnalyzersCommandInput,
  ...args: any
): Promise<ListAnalyzersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalyzersCommand(input), ...args);
};
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListAnalyzersCommandInput,
  ...args: any
): Promise<ListAnalyzersCommandOutput> => {
  // @ts-ignore
  return await client.listAnalyzers(input, ...args);
};
export async function* paginateListAnalyzers(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListAnalyzersCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalyzersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalyzersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
