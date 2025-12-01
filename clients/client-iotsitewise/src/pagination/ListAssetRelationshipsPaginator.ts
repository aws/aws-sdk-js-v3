// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssetRelationshipsCommand,
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "../commands/ListAssetRelationshipsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssetRelationships: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetRelationshipsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput
>(IoTSiteWiseClient, ListAssetRelationshipsCommand, "nextToken", "nextToken", "maxResults");
