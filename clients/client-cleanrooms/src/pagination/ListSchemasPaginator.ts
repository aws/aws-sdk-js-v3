// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemas: (
  config: CleanRoomsPaginationConfiguration,
  input: ListSchemasCommandInput,
  ...rest: any[]
) => Paginator<ListSchemasCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListSchemasCommandInput,
  ListSchemasCommandOutput
>(CleanRoomsClient, ListSchemasCommand, "nextToken", "nextToken", "maxResults");
