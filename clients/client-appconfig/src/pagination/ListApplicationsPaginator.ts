// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppConfigClient } from "../AppConfigClient";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { AppConfigPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: AppConfigPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  AppConfigPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(AppConfigClient, ListApplicationsCommand, "NextToken", "NextToken", "MaxResults");
