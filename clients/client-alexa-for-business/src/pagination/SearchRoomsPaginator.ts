// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { SearchRoomsCommand, SearchRoomsCommandInput, SearchRoomsCommandOutput } from "../commands/SearchRoomsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchRooms: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchRoomsCommandInput,
  ...rest: any[]
) => Paginator<SearchRoomsCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchRoomsCommandInput,
  SearchRoomsCommandOutput
>(AlexaForBusinessClient, SearchRoomsCommand, "NextToken", "NextToken", "MaxResults");
