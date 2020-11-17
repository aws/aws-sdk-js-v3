import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListConfigurationsCommandInput,
  ...args: any
): Promise<ListConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kafka,
  input: ListConfigurationsCommandInput,
  ...args: any
): Promise<ListConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listConfigurations(input, ...args);
};
export async function* paginateListConfigurations(
  config: KafkaPaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationsCommandOutput;
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
