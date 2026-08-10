// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchFixturesCommand,
  SearchFixturesCommandInput,
  SearchFixturesCommandOutput,
} from "../commands/SearchFixturesCommand";
import { ElementalInferenceClient } from "../ElementalInferenceClient";
import type { ElementalInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchFixtures: (
  config: ElementalInferencePaginationConfiguration,
  input: SearchFixturesCommandInput,
  ...rest: any[]
) => Paginator<SearchFixturesCommandOutput> = createPaginator<
  ElementalInferencePaginationConfiguration,
  SearchFixturesCommandInput,
  SearchFixturesCommandOutput
>(ElementalInferenceClient, SearchFixturesCommand, "nextToken", "nextToken", "maxResults");
