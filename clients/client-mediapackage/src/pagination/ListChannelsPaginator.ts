// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { MediaPackageClient } from "../MediaPackageClient";
import { MediaPackagePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: MediaPackagePaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  MediaPackagePaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(MediaPackageClient, ListChannelsCommand, "NextToken", "NextToken", "MaxResults");
