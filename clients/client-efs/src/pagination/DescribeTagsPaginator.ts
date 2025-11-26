// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTags: (
  config: EFSPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsCommandOutput> = createPaginator<
  EFSPaginationConfiguration,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
>(EFSClient, DescribeTagsCommand, "Marker", "NextMarker", "MaxItems");
