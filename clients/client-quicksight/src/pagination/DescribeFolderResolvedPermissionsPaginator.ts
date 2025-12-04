// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeFolderResolvedPermissionsCommand,
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput,
} from "../commands/DescribeFolderResolvedPermissionsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeFolderResolvedPermissions: (
  config: QuickSightPaginationConfiguration,
  input: DescribeFolderResolvedPermissionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeFolderResolvedPermissionsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  DescribeFolderResolvedPermissionsCommandInput,
  DescribeFolderResolvedPermissionsCommandOutput
>(QuickSightClient, DescribeFolderResolvedPermissionsCommand, "NextToken", "NextToken", "MaxResults");
