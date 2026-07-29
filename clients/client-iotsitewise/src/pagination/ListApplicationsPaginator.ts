// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(IoTSiteWiseClient, ListApplicationsCommand, "nextToken", "nextToken", "maxResults");
