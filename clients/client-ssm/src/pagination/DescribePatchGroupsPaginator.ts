// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePatchGroupsCommand,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput,
} from "../commands/DescribePatchGroupsCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePatchGroups: (
  config: SSMPaginationConfiguration,
  input: DescribePatchGroupsCommandInput,
  ...rest: any[]
) => Paginator<DescribePatchGroupsCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  DescribePatchGroupsCommandInput,
  DescribePatchGroupsCommandOutput
>(SSMClient, DescribePatchGroupsCommand, "NextToken", "NextToken", "MaxResults");
