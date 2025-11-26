// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import { SESv2Client } from "../SESv2Client";
import { SESv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDedicatedIpPools: (
  config: SESv2PaginationConfiguration,
  input: ListDedicatedIpPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListDedicatedIpPoolsCommandOutput> = createPaginator<
  SESv2PaginationConfiguration,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput
>(SESv2Client, ListDedicatedIpPoolsCommand, "NextToken", "NextToken", "PageSize");
