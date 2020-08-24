import { CodeStarConnections } from "../CodeStarConnections";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import { ListHostsCommand, ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import { CodeStarConnectionsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeStarConnectionsClient,
  input: ListHostsCommandInput,
  ...args: any
): Promise<ListHostsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHostsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeStarConnections,
  input: ListHostsCommandInput,
  ...args: any
): Promise<ListHostsCommandOutput> => {
  // @ts-ignore
  return await client.listHosts(input, ...args);
};
export async function* listHostsPaginate(
  config: CodeStarConnectionsPaginationConfiguration,
  input: ListHostsCommandInput,
  ...additionalArguments: any
): Paginator<ListHostsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListHostsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeStarConnections) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeStarConnectionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeStarConnections | CodeStarConnectionsClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
