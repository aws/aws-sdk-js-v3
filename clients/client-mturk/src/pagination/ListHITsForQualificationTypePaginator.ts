// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListHITsForQualificationTypeCommand,
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "../commands/ListHITsForQualificationTypeCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHITsForQualificationType: (
  config: MTurkPaginationConfiguration,
  input: ListHITsForQualificationTypeCommandInput,
  ...rest: any[]
) => Paginator<ListHITsForQualificationTypeCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput
>(MTurkClient, ListHITsForQualificationTypeCommand, "NextToken", "NextToken", "MaxResults");
