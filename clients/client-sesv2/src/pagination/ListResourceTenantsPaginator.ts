// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListResourceTenantsCommand,
  ListResourceTenantsCommandInput,
  ListResourceTenantsCommandOutput,
} from "../commands/ListResourceTenantsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceTenants: (
  config: SESv2PaginationConfiguration,
  input: ListResourceTenantsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceTenantsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListResourceTenantsCommandInput,
  ListResourceTenantsCommandOutput
>(SESv2Client, ListResourceTenantsCommand, "NextToken", "NextToken", "PageSize");
