// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListContacts: (
  config: GroundStationPaginationConfiguration,
  input: ListContactsCommandInput,
  ...rest: any[]
) => Paginator<ListContactsCommandOutput> = createPaginator<
  GroundStationPaginationConfiguration,
  ListContactsCommandInput,
  ListContactsCommandOutput
>(GroundStationClient, ListContactsCommand, "nextToken", "nextToken", "maxResults");
