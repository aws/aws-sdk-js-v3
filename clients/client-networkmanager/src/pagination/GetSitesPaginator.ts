// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetSitesCommand, GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSites: (
  config: NetworkManagerPaginationConfiguration,
  input: GetSitesCommandInput,
  ...rest: any[]
) => Paginator<GetSitesCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetSitesCommandInput,
  GetSitesCommandOutput
>(NetworkManagerClient, GetSitesCommand, "NextToken", "NextToken", "MaxResults");
