// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceRecordSetProtectionsCommand,
  ListResourceRecordSetProtectionsCommandInput,
  ListResourceRecordSetProtectionsCommandOutput,
} from "../commands/ListResourceRecordSetProtectionsCommand";
import { Route53Client } from "../Route53Client";
import type { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceRecordSetProtections: (
  config: Route53PaginationConfiguration,
  input: ListResourceRecordSetProtectionsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceRecordSetProtectionsCommandOutput> = createPaginator<
  Route53PaginationConfiguration,
  ListResourceRecordSetProtectionsCommandInput,
  ListResourceRecordSetProtectionsCommandOutput
>(Route53Client, ListResourceRecordSetProtectionsCommand, "NextToken", "NextToken", "MaxResults");
