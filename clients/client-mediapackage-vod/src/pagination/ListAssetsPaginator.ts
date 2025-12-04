// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssets: (
  config: MediaPackageVodPaginationConfiguration,
  input: ListAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListAssetsCommandOutput> = createPaginator<
  MediaPackageVodPaginationConfiguration,
  ListAssetsCommandInput,
  ListAssetsCommandOutput
>(MediaPackageVodClient, ListAssetsCommand, "NextToken", "NextToken", "MaxResults");
