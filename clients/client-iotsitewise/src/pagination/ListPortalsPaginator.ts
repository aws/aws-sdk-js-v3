// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPortals: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListPortalsCommandInput,
  ...rest: any[]
) => Paginator<ListPortalsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListPortalsCommandInput,
  ListPortalsCommandOutput
>(IoTSiteWiseClient, ListPortalsCommand, "nextToken", "nextToken", "maxResults");
