// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { KafkaConnect } from "../KafkaConnect";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaConnectClient,
  input: ListConnectorsCommandInput,
  ...args: any
): Promise<ListConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KafkaConnect,
  input: ListConnectorsCommandInput,
  ...args: any
): Promise<ListConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.listConnectors(input, ...args);
};
export async function* paginateListConnectors(
  config: KafkaConnectPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof KafkaConnect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KafkaConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KafkaConnect | KafkaConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
