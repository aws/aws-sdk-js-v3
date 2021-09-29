import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListClusterOperationsCommand,
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "../commands/ListClusterOperationsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListClusterOperationsCommandInput,
  ...args: any
): Promise<ListClusterOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClusterOperationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kafka,
  input: ListClusterOperationsCommandInput,
  ...args: any
): Promise<ListClusterOperationsCommandOutput> => {
  // @ts-ignore
  return await client.listClusterOperations(input, ...args);
};
export async function* paginateListClusterOperations(
  config: KafkaPaginationConfiguration,
  input: ListClusterOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListClusterOperationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClusterOperationsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
