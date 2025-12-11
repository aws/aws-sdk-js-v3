// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  RetrieveMemoryRecordsCommand,
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "../commands/RetrieveMemoryRecordsCommand";
import { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateRetrieveMemoryRecords: (
  config: BedrockAgentCorePaginationConfiguration,
  input: RetrieveMemoryRecordsCommandInput,
  ...rest: any[]
) => Paginator<RetrieveMemoryRecordsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput
>(BedrockAgentCoreClient, RetrieveMemoryRecordsCommand, "nextToken", "nextToken", "maxResults");
