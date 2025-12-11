// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListTrustStoresCommand,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput,
} from "../commands/ListTrustStoresCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTrustStores: (
  config: CloudFrontPaginationConfiguration,
  input: ListTrustStoresCommandInput,
  ...rest: any[]
) => Paginator<ListTrustStoresCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput
>(CloudFrontClient, ListTrustStoresCommand, "Marker", "NextMarker", "MaxItems");
