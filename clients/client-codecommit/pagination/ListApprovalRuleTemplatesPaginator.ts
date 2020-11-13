import { CodeCommit } from "../CodeCommit";
import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListApprovalRuleTemplatesCommand,
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "../commands/ListApprovalRuleTemplatesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: ListApprovalRuleTemplatesCommandInput,
  ...args: any
): Promise<ListApprovalRuleTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApprovalRuleTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodeCommit,
  input: ListApprovalRuleTemplatesCommandInput,
  ...args: any
): Promise<ListApprovalRuleTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listApprovalRuleTemplates(input, ...args);
};
export async function* listApprovalRuleTemplatesPaginate(
  config: CodeCommitPaginationConfiguration,
  input: ListApprovalRuleTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListApprovalRuleTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApprovalRuleTemplatesCommandOutput;
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
