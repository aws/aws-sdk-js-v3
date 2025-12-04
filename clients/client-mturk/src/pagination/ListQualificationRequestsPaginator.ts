// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListQualificationRequestsCommand,
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "../commands/ListQualificationRequestsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListQualificationRequests: (
  config: MTurkPaginationConfiguration,
  input: ListQualificationRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListQualificationRequestsCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput
>(MTurkClient, ListQualificationRequestsCommand, "NextToken", "NextToken", "MaxResults");
