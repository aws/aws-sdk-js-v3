// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListHarnessesCommand,
  ListHarnessesCommandInput,
  ListHarnessesCommandOutput,
} from "../commands/ListHarnessesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHarnesses: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListHarnessesCommandInput,
  ...rest: any[]
) => Paginator<ListHarnessesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListHarnessesCommandInput,
  ListHarnessesCommandOutput
>(BedrockAgentCoreControlClient, ListHarnessesCommand, "nextToken", "nextToken", "maxResults");
