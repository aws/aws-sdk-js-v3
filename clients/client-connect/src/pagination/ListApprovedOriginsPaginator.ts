// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApprovedOriginsCommand,
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
} from "../commands/ListApprovedOriginsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApprovedOrigins: (
  config: ConnectPaginationConfiguration,
  input: ListApprovedOriginsCommandInput,
  ...rest: any[]
) => Paginator<ListApprovedOriginsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput
>(ConnectClient, ListApprovedOriginsCommand, "NextToken", "NextToken", "MaxResults");
