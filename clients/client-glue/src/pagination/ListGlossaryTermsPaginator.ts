// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGlossaryTermsCommand,
  ListGlossaryTermsCommandInput,
  ListGlossaryTermsCommandOutput,
} from "../commands/ListGlossaryTermsCommand";
import { GlueClient } from "../GlueClient";
import type { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGlossaryTerms: (
  config: GluePaginationConfiguration,
  input: ListGlossaryTermsCommandInput,
  ...rest: any[]
) => Paginator<ListGlossaryTermsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListGlossaryTermsCommandInput,
  ListGlossaryTermsCommandOutput
>(GlueClient, ListGlossaryTermsCommand, "NextToken", "NextToken", "MaxResults");
