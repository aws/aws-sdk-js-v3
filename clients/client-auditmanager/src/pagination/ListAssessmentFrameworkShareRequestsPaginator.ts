// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
} from "../commands/ListAssessmentFrameworkShareRequestsCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  ...args: any
): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentFrameworkShareRequestsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  ...args: any
): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> => {
  // @ts-ignore
  return await client.listAssessmentFrameworkShareRequests(input, ...args);
};
export async function* paginateListAssessmentFrameworkShareRequests(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentFrameworkShareRequestsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentFrameworkShareRequestsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentFrameworkShareRequestsCommandOutput;
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
