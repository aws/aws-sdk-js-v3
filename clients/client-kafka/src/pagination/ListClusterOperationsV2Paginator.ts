// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClusterOperationsV2Command,
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "../commands/ListClusterOperationsV2Command";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListClusterOperationsV2CommandInput,
  ...args: any
): Promise<ListClusterOperationsV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClusterOperationsV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClusterOperationsV2(
  config: KafkaPaginationConfiguration,
  input: ListClusterOperationsV2CommandInput,
  ...additionalArguments: any
): Paginator<ListClusterOperationsV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClusterOperationsV2CommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KafkaClient) {
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
