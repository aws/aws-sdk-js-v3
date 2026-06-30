// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListIntermediateTableVersionsCommand,
  ListIntermediateTableVersionsCommandInput,
  ListIntermediateTableVersionsCommandOutput,
} from "../commands/ListIntermediateTableVersionsCommand";
import type { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntermediateTableVersions: (
  config: CleanRoomsPaginationConfiguration,
  input: ListIntermediateTableVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListIntermediateTableVersionsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListIntermediateTableVersionsCommandInput,
  ListIntermediateTableVersionsCommandOutput
>(CleanRoomsClient, ListIntermediateTableVersionsCommand, "nextToken", "nextToken", "maxResults");
