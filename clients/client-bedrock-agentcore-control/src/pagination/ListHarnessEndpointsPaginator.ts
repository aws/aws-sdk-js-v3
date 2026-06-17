// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListHarnessEndpointsCommand,
  ListHarnessEndpointsCommandInput,
  ListHarnessEndpointsCommandOutput,
} from "../commands/ListHarnessEndpointsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHarnessEndpoints: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListHarnessEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListHarnessEndpointsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListHarnessEndpointsCommandInput,
  ListHarnessEndpointsCommandOutput
>(BedrockAgentCoreControlClient, ListHarnessEndpointsCommand, "nextToken", "nextToken", "maxResults");
