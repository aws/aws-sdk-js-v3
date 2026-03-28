// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: MgnPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(MgnClient, ListApplicationsCommand, "nextToken", "nextToken", "maxResults");
