import { CodeStarConnections } from "../CodeStarConnections";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeStarConnectionsClient,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeStarConnections,
  input: ListConnectionsCommandInput,
  ...args: any
): Promise<ListConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.listConnections(input, ...args);
};
export async function* listConnectionsPaginate(
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeStarConnections) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeStarConnectionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeStarConnections | CodeStarConnectionsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
