// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListLFTagExpressionsCommand,
  ListLFTagExpressionsCommandInput,
  ListLFTagExpressionsCommandOutput,
} from "../commands/ListLFTagExpressionsCommand";
import { LakeFormationClient } from "../LakeFormationClient";
import { LakeFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLFTagExpressions: (
  config: LakeFormationPaginationConfiguration,
  input: ListLFTagExpressionsCommandInput,
  ...rest: any[]
) => Paginator<ListLFTagExpressionsCommandOutput> = createPaginator<
  LakeFormationPaginationConfiguration,
  ListLFTagExpressionsCommandInput,
  ListLFTagExpressionsCommandOutput
>(LakeFormationClient, ListLFTagExpressionsCommand, "NextToken", "NextToken", "MaxResults");
