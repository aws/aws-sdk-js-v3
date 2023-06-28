// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SelectAggregateResourceConfigCommand,
  SelectAggregateResourceConfigCommandInput,
  SelectAggregateResourceConfigCommandOutput,
} from "../commands/SelectAggregateResourceConfigCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: SelectAggregateResourceConfigCommandInput,
  ...args: any
): Promise<SelectAggregateResourceConfigCommandOutput> => {
  // @ts-ignore
  return await client.send(new SelectAggregateResourceConfigCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSelectAggregateResourceConfig(
  config: ConfigServicePaginationConfiguration,
  input: SelectAggregateResourceConfigCommandInput,
  ...additionalArguments: any
): Paginator<SelectAggregateResourceConfigCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SelectAggregateResourceConfigCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
