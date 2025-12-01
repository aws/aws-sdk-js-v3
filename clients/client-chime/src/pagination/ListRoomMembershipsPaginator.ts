// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListRoomMembershipsCommand,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput,
} from "../commands/ListRoomMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoomMemberships: (
  config: ChimePaginationConfiguration,
  input: ListRoomMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListRoomMembershipsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListRoomMembershipsCommandInput,
  ListRoomMembershipsCommandOutput
>(ChimeClient, ListRoomMembershipsCommand, "NextToken", "NextToken", "MaxResults");
