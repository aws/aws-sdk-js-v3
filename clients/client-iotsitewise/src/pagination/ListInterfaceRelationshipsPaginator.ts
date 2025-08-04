// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListInterfaceRelationshipsCommand,
  ListInterfaceRelationshipsCommandInput,
  ListInterfaceRelationshipsCommandOutput,
} from "../commands/ListInterfaceRelationshipsCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInterfaceRelationships: (
  config: IoTSiteWisePaginationConfiguration,
  input: ListInterfaceRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<ListInterfaceRelationshipsCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  ListInterfaceRelationshipsCommandInput,
  ListInterfaceRelationshipsCommandOutput
>(IoTSiteWiseClient, ListInterfaceRelationshipsCommand, "nextToken", "nextToken", "maxResults");
