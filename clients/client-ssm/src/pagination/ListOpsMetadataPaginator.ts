// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOpsMetadataCommand,
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput,
} from "../commands/ListOpsMetadataCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOpsMetadata: (
  config: SSMPaginationConfiguration,
  input: ListOpsMetadataCommandInput,
  ...rest: any[]
) => Paginator<ListOpsMetadataCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListOpsMetadataCommandInput,
  ListOpsMetadataCommandOutput
>(SSMClient, ListOpsMetadataCommand, "NextToken", "NextToken", "MaxResults");
