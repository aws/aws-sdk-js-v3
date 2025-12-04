// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListResourceScanResourcesCommand,
  ListResourceScanResourcesCommandInput,
  ListResourceScanResourcesCommandOutput,
} from "../commands/ListResourceScanResourcesCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceScanResources: (
  config: CloudFormationPaginationConfiguration,
  input: ListResourceScanResourcesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceScanResourcesCommandOutput> = createPaginator<
  CloudFormationPaginationConfiguration,
  ListResourceScanResourcesCommandInput,
  ListResourceScanResourcesCommandOutput
>(CloudFormationClient, ListResourceScanResourcesCommand, "NextToken", "NextToken", "MaxResults");
