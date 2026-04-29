// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import { ListABTestsCommand, ListABTestsCommandInput, ListABTestsCommandOutput } from "../commands/ListABTestsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListABTests: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListABTestsCommandInput,
  ...rest: any[]
) => Paginator<ListABTestsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListABTestsCommandInput,
  ListABTestsCommandOutput
>(BedrockAgentCoreClient, ListABTestsCommand, "nextToken", "nextToken", "maxResults");
