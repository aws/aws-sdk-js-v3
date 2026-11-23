// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeSnapmirrorRelationshipsCommand,
  DescribeSnapmirrorRelationshipsCommandInput,
  DescribeSnapmirrorRelationshipsCommandOutput,
} from "../commands/DescribeSnapmirrorRelationshipsCommand";
import { FSxClient } from "../FSxClient";
import type { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSnapmirrorRelationships: (
  config: FSxPaginationConfiguration,
  input: DescribeSnapmirrorRelationshipsCommandInput,
  ...rest: any[]
) => Paginator<DescribeSnapmirrorRelationshipsCommandOutput> = createPaginator<
  FSxPaginationConfiguration,
  DescribeSnapmirrorRelationshipsCommandInput,
  DescribeSnapmirrorRelationshipsCommandOutput
>(FSxClient, DescribeSnapmirrorRelationshipsCommand, "NextToken", "NextToken", "MaxResults");
