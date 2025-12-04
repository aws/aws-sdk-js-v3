// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "../commands/ListPackagesCommand";
import { PanoramaClient } from "../PanoramaClient";
import { PanoramaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackages: (
  config: PanoramaPaginationConfiguration,
  input: ListPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListPackagesCommandOutput> = createPaginator<
  PanoramaPaginationConfiguration,
  ListPackagesCommandInput,
  ListPackagesCommandOutput
>(PanoramaClient, ListPackagesCommand, "NextToken", "NextToken", "MaxResults");
