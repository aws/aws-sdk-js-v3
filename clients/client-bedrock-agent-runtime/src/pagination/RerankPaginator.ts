// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import { RerankCommand, RerankCommandInput, RerankCommandOutput } from "../commands/RerankCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateRerank: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: RerankCommandInput,
  ...rest: any[]
) => Paginator<RerankCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  RerankCommandInput,
  RerankCommandOutput
>(BedrockAgentRuntimeClient, RerankCommand, "nextToken", "nextToken", "");
