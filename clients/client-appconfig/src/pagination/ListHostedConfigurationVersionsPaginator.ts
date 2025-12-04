// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListHostedConfigurationVersionsCommand,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput,
} from "../commands/ListHostedConfigurationVersionsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListHostedConfigurationVersions: (
  config: AppConfigPaginationConfiguration,
  input: ListHostedConfigurationVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListHostedConfigurationVersionsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListHostedConfigurationVersionsCommandInput,
  ListHostedConfigurationVersionsCommandOutput
>(AppConfigClient, ListHostedConfigurationVersionsCommand, "NextToken", "NextToken", "MaxResults");
