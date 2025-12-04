// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  ListApprovalRuleTemplatesCommand,
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
} from "../commands/ListApprovalRuleTemplatesCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApprovalRuleTemplates: (
  config: CodeCommitPaginationConfiguration,
  input: ListApprovalRuleTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListApprovalRuleTemplatesCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput
>(CodeCommitClient, ListApprovalRuleTemplatesCommand, "nextToken", "nextToken", "maxResults");
