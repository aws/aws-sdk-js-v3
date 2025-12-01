// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeCommitClient } from "../CodeCommitClient";
import {
  GetCommentsForComparedCommitCommand,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
} from "../commands/GetCommentsForComparedCommitCommand";
import { CodeCommitPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCommentsForComparedCommit: (
  config: CodeCommitPaginationConfiguration,
  input: GetCommentsForComparedCommitCommandInput,
  ...rest: any[]
) => Paginator<GetCommentsForComparedCommitCommandOutput> = createPaginator<
  CodeCommitPaginationConfiguration,
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput
>(CodeCommitClient, GetCommentsForComparedCommitCommand, "nextToken", "nextToken", "maxResults");
