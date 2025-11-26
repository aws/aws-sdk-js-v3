// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBotVersionReplicasCommand,
  ListBotVersionReplicasCommandInput,
  ListBotVersionReplicasCommandOutput,
} from "../commands/ListBotVersionReplicasCommand";
import { LexModelsV2Client } from "../LexModelsV2Client";
import { LexModelsV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBotVersionReplicas: (
  config: LexModelsV2PaginationConfiguration,
  input: ListBotVersionReplicasCommandInput,
  ...rest: any[]
) => Paginator<ListBotVersionReplicasCommandOutput> = createPaginator<
  LexModelsV2PaginationConfiguration,
  ListBotVersionReplicasCommandInput,
  ListBotVersionReplicasCommandOutput
>(LexModelsV2Client, ListBotVersionReplicasCommand, "nextToken", "nextToken", "maxResults");
