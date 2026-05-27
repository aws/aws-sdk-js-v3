// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDictionariesCommand,
  ListDictionariesCommandInput,
  ListDictionariesCommandOutput,
} from "../commands/ListDictionariesCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDictionaries: (
  config: ElementalInferencePaginationConfiguration,
  input: ListDictionariesCommandInput,
  ...rest: any[]
) => Paginator<ListDictionariesCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListDictionariesCommandInput,
  ListDictionariesCommandOutput
>(ElementalInferenceClient, ListDictionariesCommand, "nextToken", "nextToken", "maxResults");
