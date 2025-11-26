// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "../commands/DescribeTapesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTapes: (
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTapesCommandOutput> = createPaginator<
  StorageGatewayPaginationConfiguration,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput
>(StorageGatewayClient, DescribeTapesCommand, "Marker", "Marker", "Limit");
