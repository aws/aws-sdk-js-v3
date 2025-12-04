// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "../commands/DescribeTagsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTags: (
  config: RedshiftPaginationConfiguration,
  input: DescribeTagsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTagsCommandOutput> = createPaginator<
  RedshiftPaginationConfiguration,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
>(RedshiftClient, DescribeTagsCommand, "Marker", "Marker", "MaxRecords");
