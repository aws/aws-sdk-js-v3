// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "../commands/DescribeTapeRecoveryPointsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTapeRecoveryPoints: (
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTapeRecoveryPointsCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput
>(StorageGatewayClient, DescribeTapeRecoveryPointsCommand, "Marker", "Marker", "Limit");
