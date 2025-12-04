// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "../commands/DescribeConnectorProfilesCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeConnectorProfiles: (
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorProfilesCommandInput,
  ...rest: any[]
) => Paginator<DescribeConnectorProfilesCommandOutput> = createPaginator<
  AppflowPaginationConfiguration,
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput
>(AppflowClient, DescribeConnectorProfilesCommand, "nextToken", "nextToken", "maxResults");
