// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTerminologiesCommand,
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
} from "../commands/ListTerminologiesCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTerminologies: (
  config: TranslatePaginationConfiguration,
  input: ListTerminologiesCommandInput,
  ...rest: any[]
) => Paginator<ListTerminologiesCommandOutput> = createPaginator<
  TranslatePaginationConfiguration,
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput
>(TranslateClient, ListTerminologiesCommand, "NextToken", "NextToken", "MaxResults");
