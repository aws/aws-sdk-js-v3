// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListChecksCommand, ListChecksCommandInput, ListChecksCommandOutput } from "../commands/ListChecksCommand";
import { TrustedAdvisorClient } from "../TrustedAdvisorClient";
import { TrustedAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChecks: (
  config: TrustedAdvisorPaginationConfiguration,
  input: ListChecksCommandInput,
  ...rest: any[]
) => Paginator<ListChecksCommandOutput> = createPaginator<
  TrustedAdvisorPaginationConfiguration,
  ListChecksCommandInput,
  ListChecksCommandOutput
>(TrustedAdvisorClient, ListChecksCommand, "nextToken", "nextToken", "maxResults");
