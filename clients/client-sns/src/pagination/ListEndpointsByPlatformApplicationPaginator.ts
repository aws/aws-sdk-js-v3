// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "../commands/ListEndpointsByPlatformApplicationCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof SNSClient) {
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
