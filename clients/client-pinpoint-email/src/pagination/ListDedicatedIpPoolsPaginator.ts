// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDedicatedIpPoolsCommand,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDedicatedIpPools: (
  config: PinpointEmailPaginationConfiguration,
  input: ListDedicatedIpPoolsCommandInput,
  ...rest: any[]
) => Paginator<ListDedicatedIpPoolsCommandOutput> = createPaginator<
  PinpointEmailPaginationConfiguration,
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput
>(PinpointEmailClient, ListDedicatedIpPoolsCommand, "NextToken", "NextToken", "PageSize");
