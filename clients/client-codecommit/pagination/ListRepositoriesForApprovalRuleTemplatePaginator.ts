import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...args: any
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesForApprovalRuleTemplateCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...args: any
): Promise<ListRepositoriesForApprovalRuleTemplateCommandOutput> => {
  // @ts-ignore
  return await client.listRepositoriesForApprovalRuleTemplate(input, ...args);
};
export async function* listRepositoriesForApprovalRuleTemplatePaginate(
  config: CodeCommitPaginationConfiguration,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesForApprovalRuleTemplateCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
