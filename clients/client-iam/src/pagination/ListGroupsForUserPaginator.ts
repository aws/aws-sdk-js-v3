// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupsForUserCommand,
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "../commands/ListGroupsForUserCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupsForUser: (
  config: IAMPaginationConfiguration,
  input: ListGroupsForUserCommandInput,
  ...rest: any[]
) => Paginator<ListGroupsForUserCommandOutput> = createPaginator<
  IAMPaginationConfiguration,
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput
>(IAMClient, ListGroupsForUserCommand, "Marker", "Marker", "MaxItems");
