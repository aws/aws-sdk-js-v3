// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctions: (
  config: ElementalInferencePaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionsCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
>(ElementalInferenceClient, ListFunctionsCommand, "nextToken", "nextToken", "maxResults");
