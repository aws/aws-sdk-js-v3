// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetTriggersCommand, GetTriggersCommandInput, GetTriggersCommandOutput } from "../commands/GetTriggersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTriggers: (
  config: GluePaginationConfiguration,
  input: GetTriggersCommandInput,
  ...rest: any[]
) => Paginator<GetTriggersCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetTriggersCommandInput,
  GetTriggersCommandOutput
>(GlueClient, GetTriggersCommand, "NextToken", "NextToken", "MaxResults");
