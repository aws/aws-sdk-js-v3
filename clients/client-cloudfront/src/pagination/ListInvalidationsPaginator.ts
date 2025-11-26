// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListInvalidationsCommand,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "../commands/ListInvalidationsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvalidations: (
  config: CloudFrontPaginationConfiguration,
  input: ListInvalidationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvalidationsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput
>(CloudFrontClient, ListInvalidationsCommand, "Marker", "InvalidationList.NextMarker", "MaxItems");
