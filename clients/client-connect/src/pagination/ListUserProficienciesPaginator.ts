// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserProficienciesCommand,
  ListUserProficienciesCommandInput,
  ListUserProficienciesCommandOutput,
} from "../commands/ListUserProficienciesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserProficiencies: (
  config: ConnectPaginationConfiguration,
  input: ListUserProficienciesCommandInput,
  ...rest: any[]
) => Paginator<ListUserProficienciesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListUserProficienciesCommandInput,
  ListUserProficienciesCommandOutput
>(ConnectClient, ListUserProficienciesCommand, "NextToken", "NextToken", "MaxResults");
