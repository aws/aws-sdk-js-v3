// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  GetAgentMemoryCommand,
  GetAgentMemoryCommandInput,
  GetAgentMemoryCommandOutput,
} from "../commands/GetAgentMemoryCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetAgentMemory: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: GetAgentMemoryCommandInput,
  ...rest: any[]
) => Paginator<GetAgentMemoryCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  GetAgentMemoryCommandInput,
  GetAgentMemoryCommandOutput
>(BedrockAgentRuntimeClient, GetAgentMemoryCommand, "nextToken", "nextToken", "maxItems");
