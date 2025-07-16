// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListMemoryRecordsCommand,
  ListMemoryRecordsCommandInput,
  ListMemoryRecordsCommandOutput,
} from "../commands/ListMemoryRecordsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemoryRecords: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListMemoryRecordsCommandInput,
  ...rest: any[]
) => Paginator<ListMemoryRecordsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListMemoryRecordsCommandInput,
  ListMemoryRecordsCommandOutput
>(BedrockAgentCoreClient, ListMemoryRecordsCommand, "nextToken", "nextToken", "maxResults");
