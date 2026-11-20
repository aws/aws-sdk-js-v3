// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceRecordSetChangesCommand,
  ListResourceRecordSetChangesCommandInput,
  ListResourceRecordSetChangesCommandOutput,
} from "../commands/ListResourceRecordSetChangesCommand";
import { Route53Client } from "../Route53Client";
import type { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceRecordSetChanges: (
  config: Route53PaginationConfiguration,
  input: ListResourceRecordSetChangesCommandInput,
  ...rest: any[]
) => Paginator<ListResourceRecordSetChangesCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListResourceRecordSetChangesCommandInput,
  ListResourceRecordSetChangesCommandOutput
>(Route53Client, ListResourceRecordSetChangesCommand, "NextToken", "NextToken", "MaxResults");
