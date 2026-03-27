// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListConnectionsCommand,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput,
} from "../commands/ListConnectionsCommand";
import { PartnerCentralAccountClient } from "../PartnerCentralAccountClient";
import type { PartnerCentralAccountPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConnections: (
  config: PartnerCentralAccountPaginationConfiguration,
  input: ListConnectionsCommandInput,
  ...rest: any[]
) => Paginator<ListConnectionsCommandOutput> = createPaginator<
  PartnerCentralAccountPaginationConfiguration,
  ListConnectionsCommandInput,
  ListConnectionsCommandOutput
>(PartnerCentralAccountClient, ListConnectionsCommand, "NextToken", "NextToken", "MaxResults");
