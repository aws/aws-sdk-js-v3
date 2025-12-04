// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetManagedPrefixListAssociationsCommand,
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
} from "../commands/GetManagedPrefixListAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetManagedPrefixListAssociations: (
  config: EC2PaginationConfiguration,
  input: GetManagedPrefixListAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetManagedPrefixListAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput
>(EC2Client, GetManagedPrefixListAssociationsCommand, "NextToken", "NextToken", "MaxResults");
