// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetDataSegmentsCommand,
  ListDatasetDataSegmentsCommandInput,
  ListDatasetDataSegmentsCommandOutput,
} from "../commands/ListDatasetDataSegmentsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetDataSegments: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListDatasetDataSegmentsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetDataSegmentsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListDatasetDataSegmentsCommandInput,
  ListDatasetDataSegmentsCommandOutput
>(IoTSiteWiseClient, ListDatasetDataSegmentsCommand, "nextToken", "nextToken", "maxResults");
