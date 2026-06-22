// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedMicrovmImageVersionsCommand,
  ListManagedMicrovmImageVersionsCommandInput,
  ListManagedMicrovmImageVersionsCommandOutput,
} from "../commands/ListManagedMicrovmImageVersionsCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedMicrovmImageVersions: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListManagedMicrovmImageVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListManagedMicrovmImageVersionsCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListManagedMicrovmImageVersionsCommandInput,
  ListManagedMicrovmImageVersionsCommandOutput
>(LambdaMicrovmsClient, ListManagedMicrovmImageVersionsCommand, "nextToken", "nextToken", "maxResults");
