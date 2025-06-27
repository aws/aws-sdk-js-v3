// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListInvoiceSummariesCommand,
  ListInvoiceSummariesCommandInput,
  ListInvoiceSummariesCommandOutput,
} from "../commands/ListInvoiceSummariesCommand";
import { InvoicingClient } from "../InvoicingClient";
import { InvoicingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvoiceSummaries: (
  config: InvoicingPaginationConfiguration,
  input: ListInvoiceSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListInvoiceSummariesCommandOutput> = createPaginator<
  InvoicingPaginationConfiguration,
  ListInvoiceSummariesCommandInput,
  ListInvoiceSummariesCommandOutput
>(InvoicingClient, ListInvoiceSummariesCommand, "NextToken", "NextToken", "MaxResults");
