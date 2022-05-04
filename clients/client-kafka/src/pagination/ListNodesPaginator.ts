// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListNodesCommand, ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListNodesCommandInput,
  ...args: any
): Promise<ListNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNodesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kafka,
  input: ListNodesCommandInput,
  ...args: any
): Promise<ListNodesCommandOutput> => {
  // @ts-ignore
  return await client.listNodes(input, ...args);
};
export async function* paginateListNodes(
  config: KafkaPaginationConfiguration,
  input: ListNodesCommandInput,
  ...additionalArguments: any
): Paginator<ListNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNodesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kafka) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KafkaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kafka | KafkaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
