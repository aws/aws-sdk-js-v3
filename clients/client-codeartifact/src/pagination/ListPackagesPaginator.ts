// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "../commands/ListPackagesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackages: (
  config: CodeartifactPaginationConfiguration,
  input: ListPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListPackagesCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListPackagesCommandInput,
  ListPackagesCommandOutput
>(CodeartifactClient, ListPackagesCommand, "nextToken", "nextToken", "maxResults");
