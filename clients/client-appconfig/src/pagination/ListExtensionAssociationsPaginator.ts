// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListExtensionAssociationsCommand,
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput,
} from "../commands/ListExtensionAssociationsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExtensionAssociations: (
  config: AppConfigPaginationConfiguration,
  input: ListExtensionAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListExtensionAssociationsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListExtensionAssociationsCommandInput,
  ListExtensionAssociationsCommandOutput
>(AppConfigClient, ListExtensionAssociationsCommand, "NextToken", "NextToken", "MaxResults");
