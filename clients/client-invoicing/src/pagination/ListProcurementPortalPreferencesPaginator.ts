// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProcurementPortalPreferencesCommand,
  ListProcurementPortalPreferencesCommandInput,
  ListProcurementPortalPreferencesCommandOutput,
} from "../commands/ListProcurementPortalPreferencesCommand";
import { InvoicingClient } from "../InvoicingClient";
import { InvoicingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProcurementPortalPreferences: (
  config: InvoicingPaginationConfiguration,
  input: ListProcurementPortalPreferencesCommandInput,
  ...rest: any[]
) => Paginator<ListProcurementPortalPreferencesCommandOutput> = createPaginator<
  InvoicingPaginationConfiguration,
  ListProcurementPortalPreferencesCommandInput,
  ListProcurementPortalPreferencesCommandOutput
>(InvoicingClient, ListProcurementPortalPreferencesCommand, "NextToken", "NextToken", "MaxResults");
