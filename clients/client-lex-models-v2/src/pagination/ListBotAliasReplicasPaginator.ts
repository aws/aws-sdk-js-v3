// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotAliasReplicasCommand,
  ListBotAliasReplicasCommandInput,
  ListBotAliasReplicasCommandOutput,
} from "../commands/ListBotAliasReplicasCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotAliasReplicas: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotAliasReplicasCommandInput,
  ...rest: any[]
) => Paginator<ListBotAliasReplicasCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotAliasReplicasCommandInput,
  ListBotAliasReplicasCommandOutput
>(LexModelsV2Client, ListBotAliasReplicasCommand, "nextToken", "nextToken", "maxResults");
