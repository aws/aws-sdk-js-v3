// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListActionConnectorsCommand,
  ListActionConnectorsCommandInput,
  ListActionConnectorsCommandOutput,
} from "../commands/ListActionConnectorsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActionConnectors: (
  config: QuickSightPaginationConfiguration,
  input: ListActionConnectorsCommandInput,
  ...rest: any[]
) => Paginator<ListActionConnectorsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListActionConnectorsCommandInput,
  ListActionConnectorsCommandOutput
>(QuickSightClient, ListActionConnectorsCommand, "NextToken", "NextToken", "MaxResults");
