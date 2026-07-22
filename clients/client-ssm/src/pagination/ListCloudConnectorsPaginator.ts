// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCloudConnectorsCommand,
  ListCloudConnectorsCommandInput,
  ListCloudConnectorsCommandOutput,
} from "../commands/ListCloudConnectorsCommand";
import { SSMClient } from "../SSMClient";
import type { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudConnectors: (
  config: SSMPaginationConfiguration,
  input: ListCloudConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListCloudConnectorsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  ListCloudConnectorsCommandInput,
  ListCloudConnectorsCommandOutput
>(SSMClient, ListCloudConnectorsCommand, "NextToken", "NextToken", "MaxResults");
