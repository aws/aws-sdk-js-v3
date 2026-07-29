// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTasks: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListTasksCommandInput,
  ...rest: any[]
) => Paginator<ListTasksCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListTasksCommandInput,
  ListTasksCommandOutput
>(IoTSiteWiseClient, ListTasksCommand, "nextToken", "nextToken", "maxResults");
