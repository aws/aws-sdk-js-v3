// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { LookoutVisionClient } from "../LookoutVisionClient";
import { LookoutVisionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListModels: (
  config: LookoutVisionPaginationConfiguration,
  input: ListModelsCommandInput,
  ...rest: any[]
) => Paginator<ListModelsCommandOutput> = createPaginator<
  LookoutVisionPaginationConfiguration,
  ListModelsCommandInput,
  ListModelsCommandOutput
>(LookoutVisionClient, ListModelsCommand, "NextToken", "NextToken", "MaxResults");
