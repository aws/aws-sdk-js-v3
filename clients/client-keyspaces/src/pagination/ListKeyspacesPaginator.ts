// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListKeyspacesCommand,
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput,
} from "../commands/ListKeyspacesCommand";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListKeyspaces: (
  config: KeyspacesPaginationConfiguration,
  input: ListKeyspacesCommandInput,
  ...rest: any[]
) => Paginator<ListKeyspacesCommandOutput> = createPaginator<
  KeyspacesPaginationConfiguration,
  ListKeyspacesCommandInput,
  ListKeyspacesCommandOutput
>(KeyspacesClient, ListKeyspacesCommand, "nextToken", "nextToken", "maxResults");
