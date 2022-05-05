// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRoutingControlsCommand,
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
} from "../commands/ListRoutingControlsCommand";
import { Route53RecoveryControlConfig } from "../Route53RecoveryControlConfig";
import { Route53RecoveryControlConfigClient } from "../Route53RecoveryControlConfigClient";
import { Route53RecoveryControlConfigPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53RecoveryControlConfigClient,
  input: ListRoutingControlsCommandInput,
  ...args: any
): Promise<ListRoutingControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutingControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53RecoveryControlConfig,
  input: ListRoutingControlsCommandInput,
  ...args: any
): Promise<ListRoutingControlsCommandOutput> => {
  // @ts-ignore
  return await client.listRoutingControls(input, ...args);
};
export async function* paginateListRoutingControls(
  config: Route53RecoveryControlConfigPaginationConfiguration,
  input: ListRoutingControlsCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutingControlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoutingControlsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53RecoveryControlConfig) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53RecoveryControlConfigClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53RecoveryControlConfig | Route53RecoveryControlConfigClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
