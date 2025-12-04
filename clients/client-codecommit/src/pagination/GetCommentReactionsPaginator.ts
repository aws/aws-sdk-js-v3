// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentReactionsCommand,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput,
} from "../commands/GetCommentReactionsCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCommentReactions: (
  config: CodeCommitPaginationConfiguration,
  input: GetCommentReactionsCommandInput,
  ...rest: any[]
) => Paginator<GetCommentReactionsCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetCommentReactionsCommandInput,
  GetCommentReactionsCommandOutput
>(CodeCommitClient, GetCommentReactionsCommand, "nextToken", "nextToken", "maxResults");
