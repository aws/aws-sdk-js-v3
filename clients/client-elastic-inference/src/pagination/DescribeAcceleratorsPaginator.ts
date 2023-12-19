// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeAcceleratorsCommand,
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
} from "../commands/DescribeAcceleratorsCommand";
import { ElasticInferenceClient } from "../ElasticInferenceClient";
import { ElasticInferencePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeAccelerators: (
  config: ElasticInferencePaginationConfiguration,
  input: DescribeAcceleratorsCommandInput,
  ...rest: any[]
) => Paginator<DescribeAcceleratorsCommandOutput> = createPaginator<
  ElasticInferencePaginationConfiguration,
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput
>(ElasticInferenceClient, DescribeAcceleratorsCommand, "nextToken", "nextToken", "maxResults");
