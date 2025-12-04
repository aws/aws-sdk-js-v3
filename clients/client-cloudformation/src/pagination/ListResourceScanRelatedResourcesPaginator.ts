// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListResourceScanRelatedResourcesCommand,
  ListResourceScanRelatedResourcesCommandInput,
  ListResourceScanRelatedResourcesCommandOutput,
} from "../commands/ListResourceScanRelatedResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceScanRelatedResources: (
  config: CloudFormationPaginationConfiguration,
  input: ListResourceScanRelatedResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceScanRelatedResourcesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListResourceScanRelatedResourcesCommandInput,
  ListResourceScanRelatedResourcesCommandOutput
>(CloudFormationClient, ListResourceScanRelatedResourcesCommand, "NextToken", "NextToken", "MaxResults");
