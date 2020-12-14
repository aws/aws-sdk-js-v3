import { SQS } from "../SQS";
import { SQSClient } from "../SQSClient";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { SQSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SQSClient,
  input: ListQueuesCommandInput,
  ...args: any
): Promise<ListQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SQS,
  input: ListQueuesCommandInput,
  ...args: any
): Promise<ListQueuesCommandOutput> => {
  // @ts-ignore
  return await client.listQueues(input, ...args);
};
export async function* paginateListQueues(
  config: SQSPaginationConfiguration,
  input: ListQueuesCommandInput,
  ...additionalArguments: any
): Paginator<ListQueuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueuesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SQS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SQSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SQS | SQSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
