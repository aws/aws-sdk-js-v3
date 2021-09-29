import { SQS } from "../SQS";
import { SQSClient } from "../SQSClient";
import {
  ListDeadLetterSourceQueuesCommand,
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
} from "../commands/ListDeadLetterSourceQueuesCommand";
import { SQSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SQSClient,
  input: ListDeadLetterSourceQueuesCommandInput,
  ...args: any
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeadLetterSourceQueuesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SQS,
  input: ListDeadLetterSourceQueuesCommandInput,
  ...args: any
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  // @ts-ignore
  return await client.listDeadLetterSourceQueues(input, ...args);
};
export async function* paginateListDeadLetterSourceQueues(
  config: SQSPaginationConfiguration,
  input: ListDeadLetterSourceQueuesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeadLetterSourceQueuesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeadLetterSourceQueuesCommandOutput;
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
