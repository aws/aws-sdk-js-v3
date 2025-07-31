// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTenantsCommand, ListTenantsCommandInput, ListTenantsCommandOutput } from "../commands/ListTenantsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTenants: (
  config: SESv2PaginationConfiguration,
  input: ListTenantsCommandInput,
  ...rest: any[]
) => Paginator<ListTenantsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListTenantsCommandInput,
  ListTenantsCommandOutput
>(SESv2Client, ListTenantsCommand, "NextToken", "NextToken", "PageSize");
