// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListComponentBuildVersionsCommand,
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "../commands/ListComponentBuildVersionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListComponentBuildVersions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListComponentBuildVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListComponentBuildVersionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput
>(ImagebuilderClient, ListComponentBuildVersionsCommand, "nextToken", "nextToken", "maxResults");
