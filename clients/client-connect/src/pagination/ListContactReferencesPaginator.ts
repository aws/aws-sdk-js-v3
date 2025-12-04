// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactReferencesCommand,
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "../commands/ListContactReferencesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContactReferences: (
  config: ConnectPaginationConfiguration,
  input: ListContactReferencesCommandInput,
  ...rest: any[]
) => Paginator<ListContactReferencesCommandOutput> = createPaginator<
  ConnectPaginationConfiguration,
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput
>(ConnectClient, ListContactReferencesCommand, "NextToken", "NextToken", "");
