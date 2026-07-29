// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDatasetDataSegmentRelationshipsCommand,
  ListDatasetDataSegmentRelationshipsCommandInput,
  ListDatasetDataSegmentRelationshipsCommandOutput,
} from "../commands/ListDatasetDataSegmentRelationshipsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import type { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetDataSegmentRelationships: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListDatasetDataSegmentRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetDataSegmentRelationshipsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListDatasetDataSegmentRelationshipsCommandInput,
  ListDatasetDataSegmentRelationshipsCommandOutput
>(IoTSiteWiseClient, ListDatasetDataSegmentRelationshipsCommand, "nextToken", "nextToken", "maxResults");
