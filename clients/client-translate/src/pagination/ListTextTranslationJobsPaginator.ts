// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTextTranslationJobsCommand,
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "../commands/ListTextTranslationJobsCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTextTranslationJobs: (
  config: TranslatePaginationConfiguration,
  input: ListTextTranslationJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTextTranslationJobsCommandOutput> = createPaginator<
  TranslatePaginationConfiguration,
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput
>(TranslateClient, ListTextTranslationJobsCommand, "NextToken", "NextToken", "MaxResults");
