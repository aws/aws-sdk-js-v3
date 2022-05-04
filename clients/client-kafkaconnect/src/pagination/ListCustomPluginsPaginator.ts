// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomPluginsCommand,
  ListCustomPluginsCommandInput,
  ListCustomPluginsCommandOutput,
} from "../commands/ListCustomPluginsCommand";
import { KafkaConnect } from "../KafkaConnect";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaConnectClient,
  input: ListCustomPluginsCommandInput,
  ...args: any
): Promise<ListCustomPluginsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomPluginsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KafkaConnect,
  input: ListCustomPluginsCommandInput,
  ...args: any
): Promise<ListCustomPluginsCommandOutput> => {
  // @ts-ignore
  return await client.listCustomPlugins(input, ...args);
};
export async function* paginateListCustomPlugins(
  config: KafkaConnectPaginationConfiguration,
  input: ListCustomPluginsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomPluginsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomPluginsCommandOutput;
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
