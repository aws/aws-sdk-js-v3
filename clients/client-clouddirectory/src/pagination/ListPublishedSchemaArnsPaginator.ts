// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListPublishedSchemaArnsCommand,
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "../commands/ListPublishedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPublishedSchemaArns: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListPublishedSchemaArnsCommandInput,
  ...rest: any[]
) => Paginator<ListPublishedSchemaArnsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput
>(CloudDirectoryClient, ListPublishedSchemaArnsCommand, "NextToken", "NextToken", "MaxResults");
