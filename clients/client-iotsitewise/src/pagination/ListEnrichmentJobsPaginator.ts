// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnrichmentJobsCommand,
  ListEnrichmentJobsCommandInput,
  ListEnrichmentJobsCommandOutput,
} from "../commands/ListEnrichmentJobsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnrichmentJobs: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListEnrichmentJobsCommandInput,
  ...rest: any[]
) => Paginator<ListEnrichmentJobsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListEnrichmentJobsCommandInput,
  ListEnrichmentJobsCommandOutput
>(IoTSiteWiseClient, ListEnrichmentJobsCommand, "nextToken", "nextToken", "maxResults");
