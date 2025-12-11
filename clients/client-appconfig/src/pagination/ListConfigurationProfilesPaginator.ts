// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListConfigurationProfilesCommand,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput,
} from "../commands/ListConfigurationProfilesCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationProfiles: (
  config: AppConfigPaginationConfiguration,
  input: ListConfigurationProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationProfilesCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListConfigurationProfilesCommandInput,
  ListConfigurationProfilesCommandOutput
>(AppConfigClient, ListConfigurationProfilesCommand, "NextToken", "NextToken", "MaxResults");
