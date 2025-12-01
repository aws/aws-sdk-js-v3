// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BackupGatewayClient } from "../BackupGatewayClient";
import {
  ListHypervisorsCommand,
  ListHypervisorsCommandInput,
  ListHypervisorsCommandOutput,
} from "../commands/ListHypervisorsCommand";
import { BackupGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHypervisors: (
  config: BackupGatewayPaginationConfiguration,
  input: ListHypervisorsCommandInput,
  ...rest: any[]
) => Paginator<ListHypervisorsCommandOutput> = createPaginator<
  BackupGatewayPaginationConfiguration,
  ListHypervisorsCommandInput,
  ListHypervisorsCommandOutput
>(BackupGatewayClient, ListHypervisorsCommand, "NextToken", "NextToken", "MaxResults");
