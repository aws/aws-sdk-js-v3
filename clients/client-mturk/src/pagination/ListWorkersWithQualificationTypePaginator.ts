// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "../commands/ListWorkersWithQualificationTypeCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkersWithQualificationType: (
  config: MTurkPaginationConfiguration,
  input: ListWorkersWithQualificationTypeCommandInput,
  ...rest: any[]
) => Paginator<ListWorkersWithQualificationTypeCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput
>(MTurkClient, ListWorkersWithQualificationTypeCommand, "NextToken", "NextToken", "MaxResults");
