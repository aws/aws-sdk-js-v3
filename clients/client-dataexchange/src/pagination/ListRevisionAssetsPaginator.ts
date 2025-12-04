// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRevisionAssetsCommand,
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
} from "../commands/ListRevisionAssetsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRevisionAssets: (
  config: DataExchangePaginationConfiguration,
  input: ListRevisionAssetsCommandInput,
  ...rest: any[]
) => Paginator<ListRevisionAssetsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput
>(DataExchangeClient, ListRevisionAssetsCommand, "NextToken", "NextToken", "MaxResults");
