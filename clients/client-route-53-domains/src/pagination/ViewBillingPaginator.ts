// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ViewBillingCommand, ViewBillingCommandInput, ViewBillingCommandOutput } from "../commands/ViewBillingCommand";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateViewBilling: (
  config: Route53DomainsPaginationConfiguration,
  input: ViewBillingCommandInput,
  ...rest: any[]
) => Paginator<ViewBillingCommandOutput> = createPaginator<
  Route53DomainsPaginationConfiguration,
  ViewBillingCommandInput,
  ViewBillingCommandOutput
>(Route53DomainsClient, ViewBillingCommand, "Marker", "NextPageMarker", "MaxItems");
