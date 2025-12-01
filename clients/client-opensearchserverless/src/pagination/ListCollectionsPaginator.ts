// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCollectionsCommand,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput,
} from "../commands/ListCollectionsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollections: (
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListCollectionsCommandInput,
  ...rest: any[]
) => Paginator<ListCollectionsCommandOutput> = createPaginator<
  OpenSearchServerlessPaginationConfiguration,
  ListCollectionsCommandInput,
  ListCollectionsCommandOutput
>(OpenSearchServerlessClient, ListCollectionsCommand, "nextToken", "nextToken", "");
