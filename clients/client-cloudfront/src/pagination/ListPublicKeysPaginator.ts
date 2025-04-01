// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "../commands/ListPublicKeysCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublicKeys: (
  config: CloudFrontPaginationConfiguration,
  input: ListPublicKeysCommandInput,
  ...rest: any[]
) => Paginator<ListPublicKeysCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
>(CloudFrontClient, ListPublicKeysCommand, "Marker", "PublicKeyList.NextMarker", "MaxItems");
