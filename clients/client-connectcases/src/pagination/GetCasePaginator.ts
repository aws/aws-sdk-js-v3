// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { GetCaseCommand, GetCaseCommandInput, GetCaseCommandOutput } from "../commands/GetCaseCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCase: (
  config: ConnectCasesPaginationConfiguration,
  input: GetCaseCommandInput,
  ...rest: any[]
) => Paginator<GetCaseCommandOutput> = createPaginator<
  ConnectCasesPaginationConfiguration,
  GetCaseCommandInput,
  GetCaseCommandOutput
>(ConnectCasesClient, GetCaseCommand, "nextToken", "nextToken", "");
