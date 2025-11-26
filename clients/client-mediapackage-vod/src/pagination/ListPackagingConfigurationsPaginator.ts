// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
} from "../commands/ListPackagingConfigurationsCommand";
import { MediaPackageVodClient } from "../MediaPackageVodClient";
import { MediaPackageVodPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackagingConfigurations: (
  config: MediaPackageVodPaginationConfiguration,
  input: ListPackagingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListPackagingConfigurationsCommandOutput> = createPaginator<
  MediaPackageVodPaginationConfiguration,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput
>(MediaPackageVodClient, ListPackagingConfigurationsCommand, "NextToken", "NextToken", "MaxResults");
