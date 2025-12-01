// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListTypedLinkFacetAttributesCommand,
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "../commands/ListTypedLinkFacetAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypedLinkFacetAttributes: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListTypedLinkFacetAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListTypedLinkFacetAttributesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput
>(CloudDirectoryClient, ListTypedLinkFacetAttributesCommand, "NextToken", "NextToken", "MaxResults");
