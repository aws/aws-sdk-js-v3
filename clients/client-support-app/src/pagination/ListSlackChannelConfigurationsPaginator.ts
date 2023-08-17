// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSlackChannelConfigurationsCommand,
  ListSlackChannelConfigurationsCommandInput,
  ListSlackChannelConfigurationsCommandOutput,
} from "../commands/ListSlackChannelConfigurationsCommand";
import { SupportAppClient } from "../SupportAppClient";
import { SupportAppPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SupportAppClient,
  input: ListSlackChannelConfigurationsCommandInput,
  ...args: any
): Promise<ListSlackChannelConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSlackChannelConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSlackChannelConfigurations(
  config: SupportAppPaginationConfiguration,
  input: ListSlackChannelConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSlackChannelConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSlackChannelConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof SupportAppClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SupportApp | SupportAppClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
