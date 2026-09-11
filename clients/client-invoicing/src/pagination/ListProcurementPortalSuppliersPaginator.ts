// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProcurementPortalSuppliersCommand,
  ListProcurementPortalSuppliersCommandInput,
  ListProcurementPortalSuppliersCommandOutput,
} from "../commands/ListProcurementPortalSuppliersCommand";
import { InvoicingClient } from "../InvoicingClient";
import type { InvoicingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProcurementPortalSuppliers: (
  config: InvoicingPaginationConfiguration,
  input: ListProcurementPortalSuppliersCommandInput,
  ...rest: any[]
) => Paginator<ListProcurementPortalSuppliersCommandOutput> = createPaginator<
  InvoicingPaginationConfiguration,
  ListProcurementPortalSuppliersCommandInput,
  ListProcurementPortalSuppliersCommandOutput
>(InvoicingClient, ListProcurementPortalSuppliersCommand, "NextToken", "NextToken", "MaxResults");
