// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListConfigurationSetsCommandInput,
  ...args: any
): Promise<ListConfigurationSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigurationSets(
  config: PinpointEmailPaginationConfiguration,
  input: ListConfigurationSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
