// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRelationshipsCommand,
  ListRelationshipsCommandInput,
  ListRelationshipsCommandOutput,
} from "../commands/ListRelationshipsCommand";
import { PartnerCentralChannelClient } from "../PartnerCentralChannelClient";
import { PartnerCentralChannelPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRelationships: (
  config: PartnerCentralChannelPaginationConfiguration,
  input: ListRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<ListRelationshipsCommandOutput> = createPaginator<
  PartnerCentralChannelPaginationConfiguration,
  ListRelationshipsCommandInput,
  ListRelationshipsCommandOutput
>(PartnerCentralChannelClient, ListRelationshipsCommand, "nextToken", "nextToken", "maxResults");
