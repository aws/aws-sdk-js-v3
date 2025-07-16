// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListBrowsersCommand,
  ListBrowsersCommandInput,
  ListBrowsersCommandOutput,
} from "../commands/ListBrowsersCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBrowsers: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListBrowsersCommandInput,
  ...rest: any[]
) => Paginator<ListBrowsersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListBrowsersCommandInput,
  ListBrowsersCommandOutput
>(BedrockAgentCoreControlClient, ListBrowsersCommand, "nextToken", "nextToken", "maxResults");
