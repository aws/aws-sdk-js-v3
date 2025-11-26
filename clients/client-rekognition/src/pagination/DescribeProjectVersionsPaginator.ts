// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeProjectVersionsCommand,
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
} from "../commands/DescribeProjectVersionsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeProjectVersions: (
  config: RekognitionPaginationConfiguration,
  input: DescribeProjectVersionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeProjectVersionsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput
>(RekognitionClient, DescribeProjectVersionsCommand, "NextToken", "NextToken", "MaxResults");
