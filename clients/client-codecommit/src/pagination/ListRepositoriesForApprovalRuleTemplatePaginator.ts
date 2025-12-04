// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListRepositoriesForApprovalRuleTemplateCommand,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput,
} from "../commands/ListRepositoriesForApprovalRuleTemplateCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRepositoriesForApprovalRuleTemplate: (
  config: CodeCommitPaginationConfiguration,
  input: ListRepositoriesForApprovalRuleTemplateCommandInput,
  ...rest: any[]
) => Paginator<ListRepositoriesForApprovalRuleTemplateCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListRepositoriesForApprovalRuleTemplateCommandInput,
  ListRepositoriesForApprovalRuleTemplateCommandOutput
>(CodeCommitClient, ListRepositoriesForApprovalRuleTemplateCommand, "nextToken", "nextToken", "maxResults");
