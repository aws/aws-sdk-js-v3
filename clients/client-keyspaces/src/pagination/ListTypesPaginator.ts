// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { KeyspacesClient } from "../KeyspacesClient";
import { KeyspacesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypes: (
  config: KeyspacesPaginationConfiguration,
  input: ListTypesCommandInput,
  ...rest: any[]
) => Paginator<ListTypesCommandOutput> = createPaginator<
  KeyspacesPaginationConfiguration,
  ListTypesCommandInput,
  ListTypesCommandOutput
>(KeyspacesClient, ListTypesCommand, "nextToken", "nextToken", "maxResults");
