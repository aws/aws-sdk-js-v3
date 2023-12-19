// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeAddonVersionsCommand,
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAddonVersions: (
  config: EKSPaginationConfiguration,
  input: DescribeAddonVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAddonVersionsCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput
>(EKSClient, DescribeAddonVersionsCommand, "nextToken", "nextToken", "maxResults");
