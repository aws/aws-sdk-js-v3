// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSecurityKeysCommand,
  ListSecurityKeysCommandInput,
  ListSecurityKeysCommandOutput,
} from "../commands/ListSecurityKeysCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSecurityKeys: (
  config: ConnectPaginationConfiguration,
  input: ListSecurityKeysCommandInput,
  ...rest: any[]
) => Paginator<ListSecurityKeysCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListSecurityKeysCommandInput,
  ListSecurityKeysCommandOutput
>(ConnectClient, ListSecurityKeysCommand, "NextToken", "NextToken", "MaxResults");
