// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListManagedSchemaArnsCommand,
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "../commands/ListManagedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedSchemaArns: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListManagedSchemaArnsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedSchemaArnsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput
>(CloudDirectoryClient, ListManagedSchemaArnsCommand, "NextToken", "NextToken", "MaxResults");
