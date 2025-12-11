// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetMLTransformsCommand,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
} from "../commands/GetMLTransformsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetMLTransforms: (
  config: GluePaginationConfiguration,
  input: GetMLTransformsCommandInput,
  ...rest: any[]
) => Paginator<GetMLTransformsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput
>(GlueClient, GetMLTransformsCommand, "NextToken", "NextToken", "MaxResults");
