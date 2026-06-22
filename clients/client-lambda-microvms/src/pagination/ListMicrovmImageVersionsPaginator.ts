// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMicrovmImageVersionsCommand,
  ListMicrovmImageVersionsCommandInput,
  ListMicrovmImageVersionsCommandOutput,
} from "../commands/ListMicrovmImageVersionsCommand";
import { LambdaMicrovmsClient } from "../LambdaMicrovmsClient";
import type { LambdaMicrovmsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMicrovmImageVersions: (
  config: LambdaMicrovmsPaginationConfiguration,
  input: ListMicrovmImageVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListMicrovmImageVersionsCommandOutput> = createPaginator<
  LambdaMicrovmsPaginationConfiguration,
  ListMicrovmImageVersionsCommandInput,
  ListMicrovmImageVersionsCommandOutput
>(LambdaMicrovmsClient, ListMicrovmImageVersionsCommand, "nextToken", "nextToken", "maxResults");
