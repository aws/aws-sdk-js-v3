// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSecurityConfigsCommand,
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "../commands/ListSecurityConfigsCommand";
import { OpenSearchServerless } from "../OpenSearchServerless";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListSecurityConfigsCommandInput,
  ...args: any
): Promise<ListSecurityConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearchServerless,
  input: ListSecurityConfigsCommandInput,
  ...args: any
): Promise<ListSecurityConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityConfigs(input, ...args);
};
export async function* paginateListSecurityConfigs(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListSecurityConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearchServerless | OpenSearchServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
