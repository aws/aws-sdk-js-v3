// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "../commands/ListTriggersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTriggers: (
  config: GluePaginationConfiguration,
  input: ListTriggersCommandInput,
  ...rest: any[]
) => Paginator<ListTriggersCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListTriggersCommandInput,
  ListTriggersCommandOutput
>(GlueClient, ListTriggersCommand, "NextToken", "NextToken", "MaxResults");
