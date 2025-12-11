// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOfferings: (
  config: DeviceFarmPaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...rest: any[]
) => Paginator<ListOfferingsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
>(DeviceFarmClient, ListOfferingsCommand, "nextToken", "nextToken", "");
