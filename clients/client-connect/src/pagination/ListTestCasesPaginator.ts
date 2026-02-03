// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestCasesCommand,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput,
} from "../commands/ListTestCasesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestCases: (
  config: ConnectPaginationConfiguration,
  input: ListTestCasesCommandInput,
  ...rest: any[]
) => Paginator<ListTestCasesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput
>(ConnectClient, ListTestCasesCommand, "NextToken", "NextToken", "MaxResults");
