// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruSecurityClient } from "../CodeGuruSecurityClient";
import { ListScansCommand, ListScansCommandInput, ListScansCommandOutput } from "../commands/ListScansCommand";
import { CodeGuruSecurityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScans: (
  config: CodeGuruSecurityPaginationConfiguration,
  input: ListScansCommandInput,
  ...rest: any[]
) => Paginator<ListScansCommandOutput> = createPaginator<
  CodeGuruSecurityPaginationConfiguration,
  ListScansCommandInput,
  ListScansCommandOutput
>(CodeGuruSecurityClient, ListScansCommand, "nextToken", "nextToken", "maxResults");
