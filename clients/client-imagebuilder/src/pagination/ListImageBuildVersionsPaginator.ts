// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImageBuildVersions: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImageBuildVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListImageBuildVersionsCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput
>(ImagebuilderClient, ListImageBuildVersionsCommand, "nextToken", "nextToken", "maxResults");
