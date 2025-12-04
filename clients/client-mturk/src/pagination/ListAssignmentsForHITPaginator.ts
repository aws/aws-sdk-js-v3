// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssignmentsForHITCommand,
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "../commands/ListAssignmentsForHITCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssignmentsForHIT: (
  config: MTurkPaginationConfiguration,
  input: ListAssignmentsForHITCommandInput,
  ...rest: any[]
) => Paginator<ListAssignmentsForHITCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput
>(MTurkClient, ListAssignmentsForHITCommand, "NextToken", "NextToken", "MaxResults");
