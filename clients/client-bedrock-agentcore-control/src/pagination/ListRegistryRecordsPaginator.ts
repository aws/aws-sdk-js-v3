// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListRegistryRecordsCommand,
  ListRegistryRecordsCommandInput,
  ListRegistryRecordsCommandOutput,
} from "../commands/ListRegistryRecordsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRegistryRecords: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListRegistryRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListRegistryRecordsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListRegistryRecordsCommandInput,
  ListRegistryRecordsCommandOutput
>(BedrockAgentCoreControlClient, ListRegistryRecordsCommand, "nextToken", "nextToken", "maxResults");
