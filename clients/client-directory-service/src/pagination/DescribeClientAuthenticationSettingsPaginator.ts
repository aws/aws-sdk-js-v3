// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeClientAuthenticationSettingsCommand,
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "../commands/DescribeClientAuthenticationSettingsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeClientAuthenticationSettings: (
  config: DirectoryServicePaginationConfiguration,
  input: DescribeClientAuthenticationSettingsCommandInput,
  ...rest: any[]
) => Paginator<DescribeClientAuthenticationSettingsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput
>(DirectoryServiceClient, DescribeClientAuthenticationSettingsCommand, "NextToken", "NextToken", "Limit");
