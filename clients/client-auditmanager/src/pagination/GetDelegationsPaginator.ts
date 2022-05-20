// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetDelegationsCommand,
  GetDelegationsCommandInput,
  GetDelegationsCommandOutput,
} from "../commands/GetDelegationsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetDelegationsCommandInput,
  ...args: any
): Promise<GetDelegationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDelegationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetDelegationsCommandInput,
  ...args: any
): Promise<GetDelegationsCommandOutput> => {
  // @ts-ignore
  return await client.getDelegations(input, ...args);
};
export async function* paginateGetDelegations(
  config: AuditManagerPaginationConfiguration,
  input: GetDelegationsCommandInput,
  ...additionalArguments: any
): Paginator<GetDelegationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDelegationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
