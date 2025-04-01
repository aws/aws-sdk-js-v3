// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListPromptRoutersCommand,
  ListPromptRoutersCommandInput,
  ListPromptRoutersCommandOutput,
} from "../commands/ListPromptRoutersCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPromptRouters: (
  config: BedrockPaginationConfiguration,
  input: ListPromptRoutersCommandInput,
  ...rest: any[]
) => Paginator<ListPromptRoutersCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListPromptRoutersCommandInput,
  ListPromptRoutersCommandOutput
>(BedrockClient, ListPromptRoutersCommand, "nextToken", "nextToken", "maxResults");
