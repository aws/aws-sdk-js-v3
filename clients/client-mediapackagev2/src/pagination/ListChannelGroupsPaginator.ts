// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelGroupsCommand,
  ListChannelGroupsCommandInput,
  ListChannelGroupsCommandOutput,
} from "../commands/ListChannelGroupsCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";
import { MediaPackageV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelGroups: (
  config: MediaPackageV2PaginationConfiguration,
  input: ListChannelGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelGroupsCommandOutput> = createPaginator<
  MediaPackageV2PaginationConfiguration,
  ListChannelGroupsCommandInput,
  ListChannelGroupsCommandOutput
>(MediaPackageV2Client, ListChannelGroupsCommand, "NextToken", "NextToken", "MaxResults");
