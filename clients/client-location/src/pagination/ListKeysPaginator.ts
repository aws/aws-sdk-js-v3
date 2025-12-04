// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeys: (
  config: LocationPaginationConfiguration,
  input: ListKeysCommandInput,
  ...rest: any[]
) => Paginator<ListKeysCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ListKeysCommandInput,
  ListKeysCommandOutput
>(LocationClient, ListKeysCommand, "NextToken", "NextToken", "MaxResults");
