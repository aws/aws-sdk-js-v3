// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeProjectsCommand,
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput,
} from "../commands/DescribeProjectsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeProjects: (
  config: RekognitionPaginationConfiguration,
  input: DescribeProjectsCommandInput,
  ...rest: any[]
) => Paginator<DescribeProjectsCommandOutput> = createPaginator<
  RekognitionPaginationConfiguration,
  DescribeProjectsCommandInput,
  DescribeProjectsCommandOutput
>(RekognitionClient, DescribeProjectsCommand, "NextToken", "NextToken", "MaxResults");
