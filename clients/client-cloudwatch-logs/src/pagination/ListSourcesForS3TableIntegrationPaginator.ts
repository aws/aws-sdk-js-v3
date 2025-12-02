// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudWatchLogsClient } from "../CloudWatchLogsClient";
import {
  ListSourcesForS3TableIntegrationCommand,
  ListSourcesForS3TableIntegrationCommandInput,
  ListSourcesForS3TableIntegrationCommandOutput,
} from "../commands/ListSourcesForS3TableIntegrationCommand";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourcesForS3TableIntegration: (
  config: CloudWatchLogsPaginationConfiguration,
  input: ListSourcesForS3TableIntegrationCommandInput,
  ...rest: any[]
) => Paginator<ListSourcesForS3TableIntegrationCommandOutput> = createPaginator<
  CloudWatchLogsPaginationConfiguration,
  ListSourcesForS3TableIntegrationCommandInput,
  ListSourcesForS3TableIntegrationCommandOutput
>(CloudWatchLogsClient, ListSourcesForS3TableIntegrationCommand, "nextToken", "nextToken", "maxResults");
