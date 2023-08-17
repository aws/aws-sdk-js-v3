// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AuditManagerClient } from "../AuditManagerClient";
import {
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "../commands/ListAssessmentFrameworksCommand";
import { AuditManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListAssessmentFrameworksCommandInput,
  ...args: any
): Promise<ListAssessmentFrameworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssessmentFrameworksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssessmentFrameworks(
  config: AuditManagerPaginationConfiguration,
  input: ListAssessmentFrameworksCommandInput,
  ...additionalArguments: any
): Paginator<ListAssessmentFrameworksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssessmentFrameworksCommandOutput;
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
