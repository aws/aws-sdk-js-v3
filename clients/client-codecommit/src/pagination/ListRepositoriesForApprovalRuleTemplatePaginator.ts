// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...args: any
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesForApprovalRuleTemplateCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRepositoriesForApprovalRuleTemplate(
  config: CodeCommitPaginationConfiguration,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesForApprovalRuleTemplateCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRepositoriesForApprovalRuleTemplateCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
