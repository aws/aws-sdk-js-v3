// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListActions: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListActionsCommandInput,
  ...rest: any[]
) => Paginator<ListActionsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListActionsCommandInput,
  ListActionsCommandOutput
>(IoTSiteWiseClient, ListActionsCommand, "nextToken", "nextToken", "maxResults");
