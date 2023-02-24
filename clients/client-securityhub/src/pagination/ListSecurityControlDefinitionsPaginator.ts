// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSecurityControlDefinitionsCommand,
  ListSecurityControlDefinitionsCommandInput,
  ListSecurityControlDefinitionsCommandOutput,
} from "../commands/ListSecurityControlDefinitionsCommand";
import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListSecurityControlDefinitionsCommandInput,
  ...args: any
): Promise<ListSecurityControlDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityControlDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: ListSecurityControlDefinitionsCommandInput,
  ...args: any
): Promise<ListSecurityControlDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityControlDefinitions(input, ...args);
};
export async function* paginateListSecurityControlDefinitions(
  config: SecurityHubPaginationConfiguration,
  input: ListSecurityControlDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityControlDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityControlDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
