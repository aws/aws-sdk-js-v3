// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTrunkInterfaceAssociationsCommand,
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput,
} from "../commands/DescribeTrunkInterfaceAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTrunkInterfaceAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeTrunkInterfaceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTrunkInterfaceAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTrunkInterfaceAssociationsCommandInput,
  DescribeTrunkInterfaceAssociationsCommandOutput
>(EC2Client, DescribeTrunkInterfaceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
