// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListProtectedJobsCommand,
  ListProtectedJobsCommandInput,
  ListProtectedJobsCommandOutput,
} from "../commands/ListProtectedJobsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectedJobs: (
  config: CleanRoomsPaginationConfiguration,
  input: ListProtectedJobsCommandInput,
  ...rest: any[]
) => Paginator<ListProtectedJobsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListProtectedJobsCommandInput,
  ListProtectedJobsCommandOutput
>(CleanRoomsClient, ListProtectedJobsCommand, "nextToken", "nextToken", "maxResults");
