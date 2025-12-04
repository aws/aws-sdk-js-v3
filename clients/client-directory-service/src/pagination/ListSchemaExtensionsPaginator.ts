// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchemaExtensionsCommand,
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "../commands/ListSchemaExtensionsCommand";
import { DirectoryServiceClient } from "../DirectoryServiceClient";
import { DirectoryServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemaExtensions: (
  config: DirectoryServicePaginationConfiguration,
  input: ListSchemaExtensionsCommandInput,
  ...rest: any[]
) => Paginator<ListSchemaExtensionsCommandOutput> = createPaginator<
  DirectoryServicePaginationConfiguration,
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput
>(DirectoryServiceClient, ListSchemaExtensionsCommand, "NextToken", "NextToken", "Limit");
