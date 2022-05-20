// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkerConfigurationsCommand,
  ListWorkerConfigurationsCommandInput,
  ListWorkerConfigurationsCommandOutput,
} from "../commands/ListWorkerConfigurationsCommand";
import { KafkaConnect } from "../KafkaConnect";
import { KafkaConnectClient } from "../KafkaConnectClient";
import { KafkaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KafkaConnectClient,
  input: ListWorkerConfigurationsCommandInput,
  ...args: any
): Promise<ListWorkerConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkerConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KafkaConnect,
  input: ListWorkerConfigurationsCommandInput,
  ...args: any
): Promise<ListWorkerConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkerConfigurations(input, ...args);
};
export async function* paginateListWorkerConfigurations(
  config: KafkaConnectPaginationConfiguration,
  input: ListWorkerConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkerConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkerConfigurationsCommandOutput;
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
