// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEnvironmentOutputsCommand,
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "../commands/ListEnvironmentOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEnvironmentOutputs: (
  config: ProtonPaginationConfiguration,
  input: ListEnvironmentOutputsCommandInput,
  ...rest: any[]
) => Paginator<ListEnvironmentOutputsCommandOutput> = createPaginator<
  ProtonPaginationConfiguration,
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput
>(ProtonClient, ListEnvironmentOutputsCommand, "nextToken", "nextToken", "");
