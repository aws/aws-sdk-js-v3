// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUseCasesCommand,
  ListUseCasesCommandInput,
  ListUseCasesCommandOutput,
} from "../commands/ListUseCasesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUseCases: (
  config: ConnectPaginationConfiguration,
  input: ListUseCasesCommandInput,
  ...rest: any[]
) => Paginator<ListUseCasesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListUseCasesCommandInput,
  ListUseCasesCommandOutput
>(ConnectClient, ListUseCasesCommand, "NextToken", "NextToken", "MaxResults");
