// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListAppliedSchemaArnsCommand,
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "../commands/ListAppliedSchemaArnsCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAppliedSchemaArns: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListAppliedSchemaArnsCommandInput,
  ...rest: any[]
) => Paginator<ListAppliedSchemaArnsCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput
>(CloudDirectoryClient, ListAppliedSchemaArnsCommand, "NextToken", "NextToken", "MaxResults");
