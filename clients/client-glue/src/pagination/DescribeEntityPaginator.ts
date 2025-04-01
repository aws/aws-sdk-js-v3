// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  DescribeEntityCommand,
  DescribeEntityCommandInput,
  DescribeEntityCommandOutput,
} from "../commands/DescribeEntityCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEntity: (
  config: GluePaginationConfiguration,
  input: DescribeEntityCommandInput,
  ...rest: any[]
) => Paginator<DescribeEntityCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  DescribeEntityCommandInput,
  DescribeEntityCommandOutput
>(GlueClient, DescribeEntityCommand, "NextToken", "NextToken", "");
