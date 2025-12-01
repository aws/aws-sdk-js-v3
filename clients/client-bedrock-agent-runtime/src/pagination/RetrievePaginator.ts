// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import { RetrieveCommand, RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateRetrieve: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: RetrieveCommandInput,
  ...rest: any[]
) => Paginator<RetrieveCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  RetrieveCommandInput,
  RetrieveCommandOutput
>(BedrockAgentRuntimeClient, RetrieveCommand, "nextToken", "nextToken", "");
