// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetTypesCommand,
  ListAssetTypesCommandInput,
  ListAssetTypesCommandOutput,
} from "../commands/ListAssetTypesCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetTypes: (
  config: GluePaginationConfiguration,
  input: ListAssetTypesCommandInput,
  ...rest: any[]
) => Paginator<ListAssetTypesCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListAssetTypesCommandInput,
  ListAssetTypesCommandOutput
>(GlueClient, ListAssetTypesCommand, "NextToken", "NextToken", "MaxResults");
