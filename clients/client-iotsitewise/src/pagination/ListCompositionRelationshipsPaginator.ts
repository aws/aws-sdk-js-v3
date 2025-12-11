// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCompositionRelationshipsCommand,
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput,
} from "../commands/ListCompositionRelationshipsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCompositionRelationships: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListCompositionRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<ListCompositionRelationshipsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput
>(IoTSiteWiseClient, ListCompositionRelationshipsCommand, "nextToken", "nextToken", "maxResults");
