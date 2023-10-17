// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListReplicatorsCommand,
  ListReplicatorsCommandInput,
  ListReplicatorsCommandOutput,
} from "../commands/ListReplicatorsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListReplicatorsCommandInput,
  ...args: any
): Promise<ListReplicatorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReplicatorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListReplicators(
  config: KafkaPaginationConfiguration,
  input: ListReplicatorsCommandInput,
  ...additionalArguments: any
): Paginator<ListReplicatorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReplicatorsCommandOutput;
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
