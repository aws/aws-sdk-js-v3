// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AuditManager } from "../AuditManager";
import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListControlDomainInsightsByAssessmentCommand,
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput,
} from "../commands/ListControlDomainInsightsByAssessmentCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListControlDomainInsightsByAssessmentCommandInput,
  ...args: any
): Promise<ListControlDomainInsightsByAssessmentCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListControlDomainInsightsByAssessmentCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListControlDomainInsightsByAssessmentCommandInput,
  ...args: any
): Promise<ListControlDomainInsightsByAssessmentCommandOutput> => {
  // @ts-ignore
  return await client.listControlDomainInsightsByAssessment(input, ...args);
};
export async function* paginateListControlDomainInsightsByAssessment(
  config: AuditManagerPaginationConfiguration,
  input: ListControlDomainInsightsByAssessmentCommandInput,
  ...additionalArguments: any
): Paginator<ListControlDomainInsightsByAssessmentCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListControlDomainInsightsByAssessmentCommandOutput;
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
