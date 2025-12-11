// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribePrincipalIdFormatCommand,
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput,
} from "../commands/DescribePrincipalIdFormatCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribePrincipalIdFormat: (
  config: EC2PaginationConfiguration,
  input: DescribePrincipalIdFormatCommandInput,
  ...rest: any[]
) => Paginator<DescribePrincipalIdFormatCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribePrincipalIdFormatCommandInput,
  DescribePrincipalIdFormatCommandOutput
>(EC2Client, DescribePrincipalIdFormatCommand, "NextToken", "NextToken", "MaxResults");
