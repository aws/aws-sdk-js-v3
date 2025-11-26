// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontKeyValueStoreClient } from "../CloudFrontKeyValueStoreClient";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { CloudFrontKeyValueStorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeys: (
  config: CloudFrontKeyValueStorePaginationConfiguration,
  input: ListKeysCommandInput,
  ...rest: any[]
) => Paginator<ListKeysCommandOutput> = createPaginator<
  CloudFrontKeyValueStorePaginationConfiguration,
  ListKeysCommandInput,
  ListKeysCommandOutput
>(CloudFrontKeyValueStoreClient, ListKeysCommand, "NextToken", "NextToken", "MaxResults");
