import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...args: any
): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> => {
  // @ts-ignore
  return await client.listAssociatedApprovalRuleTemplatesForRepository(input, ...args);
};
export async function* listAssociatedApprovalRuleTemplatesForRepositoryPaginate(
  config: CodeCommitPaginationConfiguration,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
