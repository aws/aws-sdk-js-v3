// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetParametersByPathCommand,
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "../commands/GetParametersByPathCommand";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetParametersByPath: (
  config: SSMPaginationConfiguration,
  input: GetParametersByPathCommandInput,
  ...rest: any[]
) => Paginator<GetParametersByPathCommandOutput> = createPaginator<
  SSMPaginationConfiguration,
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput
>(SSMClient, GetParametersByPathCommand, "NextToken", "NextToken", "MaxResults");
