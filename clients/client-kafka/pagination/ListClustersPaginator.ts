import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListClustersCommandInput,
  ...args: any
): Promise<ListClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClustersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kafka,
  input: ListClustersCommandInput,
  ...args: any
): Promise<ListClustersCommandOutput> => {
  // @ts-ignore
  return await client.listClusters(input, ...args);
};
export async function* paginateListClusters(
  config: KafkaPaginationConfiguration,
  input: ListClustersCommandInput,
  ...additionalArguments: any
): Paginator<ListClustersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClustersCommandOutput;
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
