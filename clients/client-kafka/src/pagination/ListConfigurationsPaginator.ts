// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListConfigurationsCommand,
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "../commands/ListConfigurationsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListConfigurationsCommandInput,
  ...args: any
): Promise<ListConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigurations(
  config: KafkaPaginationConfiguration,
  input: ListConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationsCommandOutput;
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
