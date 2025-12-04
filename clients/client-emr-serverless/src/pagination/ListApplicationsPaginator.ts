// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { EMRServerlessClient } from "../EMRServerlessClient";
import { EMRServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: EMRServerlessPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  EMRServerlessPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(EMRServerlessClient, ListApplicationsCommand, "nextToken", "nextToken", "maxResults");
