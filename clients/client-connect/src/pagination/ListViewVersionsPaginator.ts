// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListViewVersionsCommand,
  ListViewVersionsCommandInput,
  ListViewVersionsCommandOutput,
} from "../commands/ListViewVersionsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListViewVersions: (
  config: ConnectPaginationConfiguration,
  input: ListViewVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListViewVersionsCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListViewVersionsCommandInput,
  ListViewVersionsCommandOutput
>(ConnectClient, ListViewVersionsCommand, "NextToken", "NextToken", "MaxResults");
