// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAliases: (
  config: SageMakerPaginationConfiguration,
  input: ListAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAliasesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListAliasesCommandInput,
  ListAliasesCommandOutput
>(SageMakerClient, ListAliasesCommand, "NextToken", "NextToken", "MaxResults");
