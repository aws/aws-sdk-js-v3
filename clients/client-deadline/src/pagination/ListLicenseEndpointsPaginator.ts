// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLicenseEndpointsCommand,
  ListLicenseEndpointsCommandInput,
  ListLicenseEndpointsCommandOutput,
} from "../commands/ListLicenseEndpointsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLicenseEndpoints: (
  config: DeadlinePaginationConfiguration,
  input: ListLicenseEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListLicenseEndpointsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListLicenseEndpointsCommandInput,
  ListLicenseEndpointsCommandOutput
>(DeadlineClient, ListLicenseEndpointsCommand, "nextToken", "nextToken", "maxResults");
