// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListCustomModelsCommand,
  ListCustomModelsCommandInput,
  ListCustomModelsCommandOutput,
} from "../commands/ListCustomModelsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCustomModels: (
  config: BedrockPaginationConfiguration,
  input: ListCustomModelsCommandInput,
  ...rest: any[]
) => Paginator<ListCustomModelsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListCustomModelsCommandInput,
  ListCustomModelsCommandOutput
>(BedrockClient, ListCustomModelsCommand, "nextToken", "nextToken", "maxResults");
