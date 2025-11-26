// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListExtensionsCommand,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
} from "../commands/ListExtensionsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExtensions: (
  config: AppConfigPaginationConfiguration,
  input: ListExtensionsCommandInput,
  ...rest: any[]
) => Paginator<ListExtensionsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput
>(AppConfigClient, ListExtensionsCommand, "NextToken", "NextToken", "MaxResults");
