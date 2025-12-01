// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagingGroupsCommand,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
} from "../commands/ListPackagingGroupsCommand";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackagingGroups: (
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListPackagingGroupsCommandOutput> = createPaginator<
  MediaPackageVodPaginationConfiguration,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput
>(MediaPackageVodClient, ListPackagingGroupsCommand, "NextToken", "NextToken", "MaxResults");
