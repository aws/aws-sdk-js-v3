// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListImagePackagesCommand,
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput,
} from "../commands/ListImagePackagesCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListImagePackages: (
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePackagesCommandInput,
  ...rest: any[]
) => Paginator<ListImagePackagesCommandOutput> = createPaginator<
  ImagebuilderPaginationConfiguration,
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput
>(ImagebuilderClient, ListImagePackagesCommand, "nextToken", "nextToken", "maxResults");
