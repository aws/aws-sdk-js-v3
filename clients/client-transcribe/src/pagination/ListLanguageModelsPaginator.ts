// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLanguageModelsCommand,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
} from "../commands/ListLanguageModelsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLanguageModels: (
  config: TranscribePaginationConfiguration,
  input: ListLanguageModelsCommandInput,
  ...rest: any[]
) => Paginator<ListLanguageModelsCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput
>(TranscribeClient, ListLanguageModelsCommand, "NextToken", "NextToken", "MaxResults");
