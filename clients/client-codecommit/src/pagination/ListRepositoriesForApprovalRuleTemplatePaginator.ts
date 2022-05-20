// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...args: any
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  // @ts-ignore
  return await client.listRepositoriesForApprovalRuleTemplate(input, ...args);
};
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
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
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
