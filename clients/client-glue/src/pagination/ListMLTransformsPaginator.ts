// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMLTransformsCommand,
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput,
} from "../commands/ListMLTransformsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMLTransforms: (
  config: GluePaginationConfiguration,
  input: ListMLTransformsCommandInput,
  ...rest: any[]
) => Paginator<ListMLTransformsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput
>(GlueClient, ListMLTransformsCommand, "NextToken", "NextToken", "MaxResults");
