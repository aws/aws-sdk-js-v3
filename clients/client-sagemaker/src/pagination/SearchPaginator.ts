// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SageMakerClient } from "../SageMakerClient";
import type { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearch: (
  config: SageMakerPaginationConfiguration,
  input: SearchCommandInput,
  ...rest: any[]
) => Paginator<SearchCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  SearchCommandInput,
  SearchCommandOutput
>(SageMakerClient, SearchCommand, "NextToken", "NextToken", "MaxResults");
