import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import {
  ListScramSecretsCommand,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
} from "../commands/ListScramSecretsCommand";
import { KafkaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListScramSecretsCommandInput,
  ...args: any
): Promise<ListScramSecretsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScramSecretsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kafka,
  input: ListScramSecretsCommandInput,
  ...args: any
): Promise<ListScramSecretsCommandOutput> => {
  // @ts-ignore
  return await client.listScramSecrets(input, ...args);
};
export async function* paginateListScramSecrets(
  config: KafkaPaginationConfiguration,
  input: ListScramSecretsCommandInput,
  ...additionalArguments: any
): Paginator<ListScramSecretsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScramSecretsCommandOutput;
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
