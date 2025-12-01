// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReservationsCommand,
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
} from "../commands/ListReservationsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReservations: (
  config: MediaLivePaginationConfiguration,
  input: ListReservationsCommandInput,
  ...rest: any[]
) => Paginator<ListReservationsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListReservationsCommandInput,
  ListReservationsCommandOutput
>(MediaLiveClient, ListReservationsCommand, "NextToken", "NextToken", "MaxResults");
