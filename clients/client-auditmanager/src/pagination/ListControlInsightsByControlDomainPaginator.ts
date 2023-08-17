// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlInsightsByControlDomainCommand,
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
} from "../commands/ListControlInsightsByControlDomainCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListControlInsightsByControlDomainCommandInput,
  ...args: any
): Promise<ListControlInsightsByControlDomainCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListControlInsightsByControlDomainCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListControlInsightsByControlDomain(
  config: AuditManagerPaginationConfiguration,
  input: ListControlInsightsByControlDomainCommandInput,
  ...additionalArguments: any
): Paginator<ListControlInsightsByControlDomainCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListControlInsightsByControlDomainCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManagerClient) {
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
