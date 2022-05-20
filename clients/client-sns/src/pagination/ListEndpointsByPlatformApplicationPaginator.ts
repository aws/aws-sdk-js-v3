// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "../commands/ListEndpointsByPlatformApplicationCommand";
import { SNS } from "../SNS";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...args: any
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointsByPlatformApplicationCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...args: any
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  // @ts-ignore
  return await client.listEndpointsByPlatformApplication(input, ...args);
};
export async function* paginateListEndpointsByPlatformApplication(
  config: SNSPaginationConfiguration,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointsByPlatformApplicationCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointsByPlatformApplicationCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
