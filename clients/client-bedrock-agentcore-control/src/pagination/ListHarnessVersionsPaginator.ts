// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListHarnessVersionsCommand,
  ListHarnessVersionsCommandInput,
  ListHarnessVersionsCommandOutput,
} from "../commands/ListHarnessVersionsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHarnessVersions: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListHarnessVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListHarnessVersionsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListHarnessVersionsCommandInput,
  ListHarnessVersionsCommandOutput
>(BedrockAgentCoreControlClient, ListHarnessVersionsCommand, "nextToken", "nextToken", "maxResults");
