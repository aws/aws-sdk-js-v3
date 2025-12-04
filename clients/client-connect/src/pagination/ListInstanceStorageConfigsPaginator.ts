// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListInstanceStorageConfigsCommand,
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "../commands/ListInstanceStorageConfigsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInstanceStorageConfigs: (
  config: ConnectPaginationConfiguration,
  input: ListInstanceStorageConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListInstanceStorageConfigsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput
>(ConnectClient, ListInstanceStorageConfigsCommand, "NextToken", "NextToken", "MaxResults");
