// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListInvoiceUnitsCommand,
  ListInvoiceUnitsCommandInput,
  ListInvoiceUnitsCommandOutput,
} from "../commands/ListInvoiceUnitsCommand";
import { InvoicingClient } from "../InvoicingClient";
import { InvoicingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvoiceUnits: (
  config: InvoicingPaginationConfiguration,
  input: ListInvoiceUnitsCommandInput,
  ...rest: any[]
) => Paginator<ListInvoiceUnitsCommandOutput> = createPaginator<
  InvoicingPaginationConfiguration,
  ListInvoiceUnitsCommandInput,
  ListInvoiceUnitsCommandOutput
>(InvoicingClient, ListInvoiceUnitsCommand, "NextToken", "NextToken", "MaxResults");
