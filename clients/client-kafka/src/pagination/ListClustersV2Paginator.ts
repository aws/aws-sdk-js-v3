// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListClustersV2Command,
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput,
} from "../commands/ListClustersV2Command";
import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListClustersV2CommandInput,
  ...args: any
): Promise<ListClustersV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClustersV2Command(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kafka,
  input: ListClustersV2CommandInput,
  ...args: any
): Promise<ListClustersV2CommandOutput> => {
  // @ts-ignore
  return await client.listClustersV2(input, ...args);
};
export async function* paginateListClustersV2(
  config: KafkaPaginationConfiguration,
  input: ListClustersV2CommandInput,
  ...additionalArguments: any
): Paginator<ListClustersV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClustersV2CommandOutput;
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
