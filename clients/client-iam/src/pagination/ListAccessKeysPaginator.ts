// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccessKeysCommand,
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "../commands/ListAccessKeysCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccessKeys: (
  config: IAMPaginationConfiguration,
  input: ListAccessKeysCommandInput,
  ...rest: any[]
) => Paginator<ListAccessKeysCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput
>(IAMClient, ListAccessKeysCommand, "Marker", "Marker", "MaxItems");
