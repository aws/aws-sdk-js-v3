// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQualificationTypesCommand,
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "../commands/ListQualificationTypesCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQualificationTypes: (
  config: MTurkPaginationConfiguration,
  input: ListQualificationTypesCommandInput,
  ...rest: any[]
) => Paginator<ListQualificationTypesCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput
>(MTurkClient, ListQualificationTypesCommand, "NextToken", "NextToken", "MaxResults");
