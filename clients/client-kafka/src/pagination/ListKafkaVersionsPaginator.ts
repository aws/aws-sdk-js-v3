import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListKafkaVersionsCommand,
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput,
} from "../commands/ListKafkaVersionsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListKafkaVersionsCommandInput,
  ...args: any
): Promise<ListKafkaVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKafkaVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kafka,
  input: ListKafkaVersionsCommandInput,
  ...args: any
): Promise<ListKafkaVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listKafkaVersions(input, ...args);
};
export async function* paginateListKafkaVersions(
  config: KafkaPaginationConfiguration,
  input: ListKafkaVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListKafkaVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKafkaVersionsCommandOutput;
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
