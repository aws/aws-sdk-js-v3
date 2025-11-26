// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListExecutorsCommand,
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput,
} from "../commands/ListExecutorsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExecutors: (
  config: AthenaPaginationConfiguration,
  input: ListExecutorsCommandInput,
  ...rest: any[]
) => Paginator<ListExecutorsCommandOutput> = createPaginator<
  AthenaPaginationConfiguration,
  ListExecutorsCommandInput,
  ListExecutorsCommandOutput
>(AthenaClient, ListExecutorsCommand, "NextToken", "NextToken", "MaxResults");
