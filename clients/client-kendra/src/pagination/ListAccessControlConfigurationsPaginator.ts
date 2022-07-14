// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccessControlConfigurationsCommand,
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "../commands/ListAccessControlConfigurationsCommand";
import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListAccessControlConfigurationsCommandInput,
  ...args: any
): Promise<ListAccessControlConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessControlConfigurationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kendra,
  input: ListAccessControlConfigurationsCommandInput,
  ...args: any
): Promise<ListAccessControlConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.listAccessControlConfigurations(input, ...args);
};
export async function* paginateListAccessControlConfigurations(
  config: KendraPaginationConfiguration,
  input: ListAccessControlConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessControlConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessControlConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
