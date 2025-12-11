// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetManagedPrefixListEntriesCommand,
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput,
} from "../commands/GetManagedPrefixListEntriesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetManagedPrefixListEntries: (
  config: EC2PaginationConfiguration,
  input: GetManagedPrefixListEntriesCommandInput,
  ...rest: any[]
) => Paginator<GetManagedPrefixListEntriesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetManagedPrefixListEntriesCommandInput,
  GetManagedPrefixListEntriesCommandOutput
>(EC2Client, GetManagedPrefixListEntriesCommand, "NextToken", "NextToken", "MaxResults");
