// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCollectionGroupsCommand,
  ListCollectionGroupsCommandInput,
  ListCollectionGroupsCommandOutput,
} from "../commands/ListCollectionGroupsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollectionGroups: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListCollectionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListCollectionGroupsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListCollectionGroupsCommandInput,
  ListCollectionGroupsCommandOutput
>(OpenSearchServerlessClient, ListCollectionGroupsCommand, "nextToken", "nextToken", "");
