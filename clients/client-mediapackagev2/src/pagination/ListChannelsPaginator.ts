// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { MediaPackageV2Client } from "../MediaPackageV2Client";
import { MediaPackageV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: MediaPackageV2PaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  MediaPackageV2PaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(MediaPackageV2Client, ListChannelsCommand, "NextToken", "NextToken", "MaxResults");
