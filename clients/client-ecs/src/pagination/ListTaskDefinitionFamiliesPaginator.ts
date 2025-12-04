// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaskDefinitionFamiliesCommand,
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "../commands/ListTaskDefinitionFamiliesCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaskDefinitionFamilies: (
  config: ECSPaginationConfiguration,
  input: ListTaskDefinitionFamiliesCommandInput,
  ...rest: any[]
) => Paginator<ListTaskDefinitionFamiliesCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput
>(ECSClient, ListTaskDefinitionFamiliesCommand, "nextToken", "nextToken", "maxResults");
