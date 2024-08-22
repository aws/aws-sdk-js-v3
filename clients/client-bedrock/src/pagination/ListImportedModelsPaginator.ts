// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListImportedModelsCommand,
  ListImportedModelsCommandInput,
  ListImportedModelsCommandOutput,
} from "../commands/ListImportedModelsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImportedModels: (
  config: BedrockPaginationConfiguration,
  input: ListImportedModelsCommandInput,
  ...rest: any[]
) => Paginator<ListImportedModelsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListImportedModelsCommandInput,
  ListImportedModelsCommandOutput
>(BedrockClient, ListImportedModelsCommand, "nextToken", "nextToken", "maxResults");
