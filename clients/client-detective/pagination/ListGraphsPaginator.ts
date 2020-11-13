import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { DetectivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListGraphsCommandInput,
  ...args: any
): Promise<ListGraphsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGraphsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Detective,
  input: ListGraphsCommandInput,
  ...args: any
): Promise<ListGraphsCommandOutput> => {
  // @ts-ignore
  return await client.listGraphs(input, ...args);
};
export async function* listGraphsPaginate(
  config: DetectivePaginationConfiguration,
  input: ListGraphsCommandInput,
  ...additionalArguments: any
): Paginator<ListGraphsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGraphsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Detective) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DetectiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Detective | DetectiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
