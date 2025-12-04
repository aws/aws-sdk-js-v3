// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListFacetAttributesCommand,
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "../commands/ListFacetAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFacetAttributes: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListFacetAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListFacetAttributesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput
>(CloudDirectoryClient, ListFacetAttributesCommand, "NextToken", "NextToken", "MaxResults");
