// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  GetChangeLogsCommand,
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput,
} from "../commands/GetChangeLogsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetChangeLogsCommandInput,
  ...args: any
): Promise<GetChangeLogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetChangeLogsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetChangeLogsCommandInput,
  ...args: any
): Promise<GetChangeLogsCommandOutput> => {
  // @ts-ignore
  return await client.getChangeLogs(input, ...args);
};
export async function* paginateGetChangeLogs(
  config: AuditManagerPaginationConfiguration,
  input: GetChangeLogsCommandInput,
  ...additionalArguments: any
): Paginator<GetChangeLogsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetChangeLogsCommandOutput;
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
