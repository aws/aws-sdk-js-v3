// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamKeysCommand,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput,
} from "../commands/ListStreamKeysCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamKeys: (
  config: IvsPaginationConfiguration,
  input: ListStreamKeysCommandInput,
  ...rest: any[]
) => Paginator<ListStreamKeysCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListStreamKeysCommandInput,
  ListStreamKeysCommandOutput
>(IvsClient, ListStreamKeysCommand, "nextToken", "nextToken", "maxResults");
