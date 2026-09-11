// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProcurementPortalsCommand,
  ListProcurementPortalsCommandInput,
  ListProcurementPortalsCommandOutput,
} from "../commands/ListProcurementPortalsCommand";
import { InvoicingClient } from "../InvoicingClient";
import type { InvoicingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProcurementPortals: (
  config: InvoicingPaginationConfiguration,
  input: ListProcurementPortalsCommandInput,
  ...rest: any[]
) => Paginator<ListProcurementPortalsCommandOutput> = createPaginator<
  InvoicingPaginationConfiguration,
  ListProcurementPortalsCommandInput,
  ListProcurementPortalsCommandOutput
>(InvoicingClient, ListProcurementPortalsCommand, "NextToken", "NextToken", "MaxResults");
