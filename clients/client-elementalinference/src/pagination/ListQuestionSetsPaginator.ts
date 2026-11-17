// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuestionSetsCommand,
  ListQuestionSetsCommandInput,
  ListQuestionSetsCommandOutput,
} from "../commands/ListQuestionSetsCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuestionSets: (
  config: ElementalInferencePaginationConfiguration,
  input: ListQuestionSetsCommandInput,
  ...rest: any[]
) => Paginator<ListQuestionSetsCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListQuestionSetsCommandInput,
  ListQuestionSetsCommandOutput
>(ElementalInferenceClient, ListQuestionSetsCommand, "nextToken", "nextToken", "maxResults");
