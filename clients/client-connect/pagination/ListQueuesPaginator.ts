import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListQueuesCommandInput,
  ...args: any
): Promise<ListQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueuesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Connect,
  input: ListQueuesCommandInput,
  ...args: any
): Promise<ListQueuesCommandOutput> => {
  // @ts-ignore
  return await client.listQueues(input, ...args);
};
export async function* listQueuesPaginate(
  config: ConnectPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...additionalArguments: any
): Paginator<ListQueuesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueuesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
