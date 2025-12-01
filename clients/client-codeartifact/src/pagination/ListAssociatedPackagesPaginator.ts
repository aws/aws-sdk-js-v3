// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeartifactClient } from "../CodeartifactClient";
import {
  ListAssociatedPackagesCommand,
  ListAssociatedPackagesCommandInput,
  ListAssociatedPackagesCommandOutput,
} from "../commands/ListAssociatedPackagesCommand";
import { CodeartifactPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssociatedPackages: (
  config: CodeartifactPaginationConfiguration,
  input: ListAssociatedPackagesCommandInput,
  ...rest: any[]
) => Paginator<ListAssociatedPackagesCommandOutput> = createPaginator<
  CodeartifactPaginationConfiguration,
  ListAssociatedPackagesCommandInput,
  ListAssociatedPackagesCommandOutput
>(CodeartifactClient, ListAssociatedPackagesCommand, "nextToken", "nextToken", "maxResults");
