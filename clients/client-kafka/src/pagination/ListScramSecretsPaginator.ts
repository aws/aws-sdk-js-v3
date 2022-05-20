// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListScramSecretsCommand,
  ListScramSecretsCommandInput,
  ListScramSecretsCommandOutput,
} from "../commands/ListScramSecretsCommand";
import { Kafka } from "../Kafka";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListScramSecretsCommandInput,
  ...args: any
): Promise<ListScramSecretsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScramSecretsCommand(input), ...args);
};
/**
 * @private
 */
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
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
