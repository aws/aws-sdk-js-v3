// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceCatalogsCommand,
  ListResourceCatalogsCommandInput,
  ListResourceCatalogsCommandOutput,
} from "../commands/ListResourceCatalogsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceCatalogs: (
  config: SageMakerPaginationConfiguration,
  input: ListResourceCatalogsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceCatalogsCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListResourceCatalogsCommandInput,
  ListResourceCatalogsCommandOutput
>(SageMakerClient, ListResourceCatalogsCommand, "NextToken", "NextToken", "MaxResults");
