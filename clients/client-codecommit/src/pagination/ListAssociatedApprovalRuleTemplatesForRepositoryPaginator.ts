// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
} from "../commands/ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedApprovalRuleTemplatesForRepository: (
  config: CodeCommitPaginationConfiguration,
  input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput
>(CodeCommitClient, ListAssociatedApprovalRuleTemplatesForRepositoryCommand, "nextToken", "nextToken", "maxResults");
