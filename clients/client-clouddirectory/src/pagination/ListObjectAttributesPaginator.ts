// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudDirectoryClient } from "../CloudDirectoryClient";
import {
  ListObjectAttributesCommand,
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "../commands/ListObjectAttributesCommand";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListObjectAttributes: (
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectAttributesCommandInput,
  ...rest: any[]
) => Paginator<ListObjectAttributesCommandOutput> = createPaginator<
  CloudDirectoryPaginationConfiguration,
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput
>(CloudDirectoryClient, ListObjectAttributesCommand, "NextToken", "NextToken", "MaxResults");
