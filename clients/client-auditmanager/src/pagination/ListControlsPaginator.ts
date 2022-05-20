// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "../commands/ListControlsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListControlsCommandInput,
  ...args: any
): Promise<ListControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListControlsCommandInput,
  ...args: any
): Promise<ListControlsCommandOutput> => {
  // @ts-ignore
  return await client.listControls(input, ...args);
};
export async function* paginateListControls(
  config: AuditManagerPaginationConfiguration,
  input: ListControlsCommandInput,
  ...additionalArguments: any
): Paginator<ListControlsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListControlsCommandOutput;
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
