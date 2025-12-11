// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTapeArchivesCommand,
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput,
} from "../commands/DescribeTapeArchivesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTapeArchives: (
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeArchivesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTapeArchivesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  DescribeTapeArchivesCommandInput,
  DescribeTapeArchivesCommandOutput
>(StorageGatewayClient, DescribeTapeArchivesCommand, "Marker", "Marker", "Limit");
