// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { Route53DomainsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOperations: (
  config: Route53DomainsPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...rest: any[]
) => Paginator<ListOperationsCommandOutput> = createPaginator<
  Route53DomainsPaginationConfiguration,
  ListOperationsCommandInput,
  ListOperationsCommandOutput
>(Route53DomainsClient, ListOperationsCommand, "Marker", "NextPageMarker", "MaxItems");
