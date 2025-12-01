// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { MediaConnectClient } from "../MediaConnectClient";
import { MediaConnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOfferings: (
  config: MediaConnectPaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...rest: any[]
) => Paginator<ListOfferingsCommandOutput> = createPaginator<
  MediaConnectPaginationConfiguration,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
>(MediaConnectClient, ListOfferingsCommand, "NextToken", "NextToken", "MaxResults");
