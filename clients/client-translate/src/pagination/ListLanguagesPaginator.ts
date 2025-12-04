// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListLanguagesCommand,
  ListLanguagesCommandInput,
  ListLanguagesCommandOutput,
} from "../commands/ListLanguagesCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListLanguages: (
  config: TranslatePaginationConfiguration,
  input: ListLanguagesCommandInput,
  ...rest: any[]
) => Paginator<ListLanguagesCommandOutput> = createPaginator<
  TranslatePaginationConfiguration,
  ListLanguagesCommandInput,
  ListLanguagesCommandOutput
>(TranslateClient, ListLanguagesCommand, "NextToken", "NextToken", "MaxResults");
