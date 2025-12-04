// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CodeGuruSecurityClient } from "../CodeGuruSecurityClient";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { CodeGuruSecurityPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetFindings: (
  config: CodeGuruSecurityPaginationConfiguration,
  input: GetFindingsCommandInput,
  ...rest: any[]
) => Paginator<GetFindingsCommandOutput> = createPaginator<
  CodeGuruSecurityPaginationConfiguration,
  GetFindingsCommandInput,
  GetFindingsCommandOutput
>(CodeGuruSecurityClient, GetFindingsCommand, "nextToken", "nextToken", "maxResults");
