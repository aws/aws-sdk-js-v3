// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachedFilesConfigurationsCommand,
  ListAttachedFilesConfigurationsCommandInput,
  ListAttachedFilesConfigurationsCommandOutput,
} from "../commands/ListAttachedFilesConfigurationsCommand";
import { ConnectClient } from "../ConnectClient";
import type { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachedFilesConfigurations: (
  config: ConnectPaginationConfiguration,
  input: ListAttachedFilesConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachedFilesConfigurationsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListAttachedFilesConfigurationsCommandInput,
  ListAttachedFilesConfigurationsCommandOutput
>(ConnectClient, ListAttachedFilesConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
