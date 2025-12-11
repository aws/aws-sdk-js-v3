// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetLinksCommand, GetLinksCommandInput, GetLinksCommandOutput } from "../commands/GetLinksCommand";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetLinks: (
  config: NetworkManagerPaginationConfiguration,
  input: GetLinksCommandInput,
  ...rest: any[]
) => Paginator<GetLinksCommandOutput> = createPaginator<
  NetworkManagerPaginationConfiguration,
  GetLinksCommandInput,
  GetLinksCommandOutput
>(NetworkManagerClient, GetLinksCommand, "NextToken", "NextToken", "MaxResults");
