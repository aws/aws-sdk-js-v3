// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQuestionSetVersionsCommand,
  ListQuestionSetVersionsCommandInput,
  ListQuestionSetVersionsCommandOutput,
} from "../commands/ListQuestionSetVersionsCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQuestionSetVersions: (
  config: ElementalInferencePaginationConfiguration,
  input: ListQuestionSetVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListQuestionSetVersionsCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListQuestionSetVersionsCommandInput,
  ListQuestionSetVersionsCommandOutput
>(ElementalInferenceClient, ListQuestionSetVersionsCommand, "nextToken", "nextToken", "maxResults");
