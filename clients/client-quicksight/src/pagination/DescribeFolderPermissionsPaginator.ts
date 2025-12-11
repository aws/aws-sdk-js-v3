// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFolderPermissionsCommand,
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput,
} from "../commands/DescribeFolderPermissionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFolderPermissions: (
  config: QuickSightPaginationConfiguration,
  input: DescribeFolderPermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFolderPermissionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  DescribeFolderPermissionsCommandInput,
  DescribeFolderPermissionsCommandOutput
>(QuickSightClient, DescribeFolderPermissionsCommand, "NextToken", "NextToken", "MaxResults");
