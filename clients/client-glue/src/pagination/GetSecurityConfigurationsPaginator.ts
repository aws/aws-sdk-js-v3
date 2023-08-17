// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetSecurityConfigurationsCommand,
  GetSecurityConfigurationsCommandInput,
  GetSecurityConfigurationsCommandOutput,
} from "../commands/GetSecurityConfigurationsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetSecurityConfigurationsCommandInput,
  ...args: any
): Promise<GetSecurityConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSecurityConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSecurityConfigurations(
  config: GluePaginationConfiguration,
  input: GetSecurityConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<GetSecurityConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSecurityConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
