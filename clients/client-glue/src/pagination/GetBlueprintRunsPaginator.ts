// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetBlueprintRunsCommand,
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput,
} from "../commands/GetBlueprintRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetBlueprintRuns: (
  config: GluePaginationConfiguration,
  input: GetBlueprintRunsCommandInput,
  ...rest: any[]
) => Paginator<GetBlueprintRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetBlueprintRunsCommandInput,
  GetBlueprintRunsCommandOutput
>(GlueClient, GetBlueprintRunsCommand, "NextToken", "NextToken", "MaxResults");
