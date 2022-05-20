// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedApprovalRuleTemplatesForRepository(input, ...args);
};
export async function* paginateListAssociatedApprovalRuleTemplatesForRepository(
  config: CodeCommitPaginationConfiguration,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput;
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
