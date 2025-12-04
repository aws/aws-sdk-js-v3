// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetInterpolatedAssetPropertyValuesCommand,
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "../commands/GetInterpolatedAssetPropertyValuesCommand";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInterpolatedAssetPropertyValues: (
  config: IoTSiteWisePaginationConfiguration,
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  ...rest: any[]
) => Paginator<GetInterpolatedAssetPropertyValuesCommandOutput> = createPaginator<
  IoTSiteWisePaginationConfiguration,
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput
>(IoTSiteWiseClient, GetInterpolatedAssetPropertyValuesCommand, "nextToken", "nextToken", "maxResults");
