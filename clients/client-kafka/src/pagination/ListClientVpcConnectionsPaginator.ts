// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListClientVpcConnectionsCommand,
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "../commands/ListClientVpcConnectionsCommand";
import { KafkaClient } from "../KafkaClient";
import { KafkaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KafkaClient,
  input: ListClientVpcConnectionsCommandInput,
  ...args: any
): Promise<ListClientVpcConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClientVpcConnectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListClientVpcConnections(
  config: KafkaPaginationConfiguration,
  input: ListClientVpcConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListClientVpcConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClientVpcConnectionsCommandOutput;
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
