// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetClassifiersCommand,
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
} from "../commands/GetClassifiersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetClassifiers: (
  config: GluePaginationConfiguration,
  input: GetClassifiersCommandInput,
  ...rest: any[]
) => Paginator<GetClassifiersCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput
>(GlueClient, GetClassifiersCommand, "NextToken", "NextToken", "MaxResults");
