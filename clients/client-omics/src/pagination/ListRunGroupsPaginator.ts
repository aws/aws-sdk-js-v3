// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRunGroupsCommand,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput,
} from "../commands/ListRunGroupsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRunGroups: (
  config: OmicsPaginationConfiguration,
  input: ListRunGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListRunGroupsCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput
>(OmicsClient, ListRunGroupsCommand, "startingToken", "nextToken", "maxResults");
