import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListConfigurationRevisionsCommand,
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListConfigurationRevisionsCommandInput,
  ...args: any
): Promise<ListConfigurationRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationRevisionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kafka,
  input: ListConfigurationRevisionsCommandInput,
  ...args: any
): Promise<ListConfigurationRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.listConfigurationRevisions(input, ...args);
};
export async function* listConfigurationRevisionsPaginate(
  config: KafkaPaginationConfiguration,
  input: ListConfigurationRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationRevisionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationRevisionsCommandOutput;
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
