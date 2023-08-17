// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSecurityConfigurationsCommand,
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "../commands/ListSecurityConfigurationsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListSecurityConfigurationsCommandInput,
  ...args: any
): Promise<ListSecurityConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSecurityConfigurations(
  config: EMRPaginationConfiguration,
  input: ListSecurityConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityConfigurationsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
