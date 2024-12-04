// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockDataAutomationClient } from "../BedrockDataAutomationClient";
import {
  ListBlueprintsCommand,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput,
} from "../commands/ListBlueprintsCommand";
import { BedrockDataAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBlueprints: (
  config: BedrockDataAutomationPaginationConfiguration,
  input: ListBlueprintsCommandInput,
  ...rest: any[]
) => Paginator<ListBlueprintsCommandOutput> = createPaginator<
  BedrockDataAutomationPaginationConfiguration,
  ListBlueprintsCommandInput,
  ListBlueprintsCommandOutput
>(BedrockDataAutomationClient, ListBlueprintsCommand, "nextToken", "nextToken", "maxResults");
