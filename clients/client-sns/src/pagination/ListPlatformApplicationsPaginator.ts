// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPlatformApplicationsCommand,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "../commands/ListPlatformApplicationsCommand";
import { SNSClient } from "../SNSClient";
import { SNSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlatformApplications: (
  config: SNSPaginationConfiguration,
  input: ListPlatformApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListPlatformApplicationsCommandOutput> = createPaginator<
  SNSPaginationConfiguration,
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput
>(SNSClient, ListPlatformApplicationsCommand, "NextToken", "NextToken", "");
