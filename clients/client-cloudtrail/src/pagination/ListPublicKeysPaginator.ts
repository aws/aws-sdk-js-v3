// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudTrailClient } from "../CloudTrailClient";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "../commands/ListPublicKeysCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublicKeys: (
  config: CloudTrailPaginationConfiguration,
  input: ListPublicKeysCommandInput,
  ...rest: any[]
) => Paginator<ListPublicKeysCommandOutput> = createPaginator<
  CloudTrailPaginationConfiguration,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
>(CloudTrailClient, ListPublicKeysCommand, "NextToken", "NextToken", "");
