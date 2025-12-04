// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOfferingsCommand,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput,
} from "../commands/ListOfferingsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOfferings: (
  config: MediaLivePaginationConfiguration,
  input: ListOfferingsCommandInput,
  ...rest: any[]
) => Paginator<ListOfferingsCommandOutput> = createPaginator<
  MediaLivePaginationConfiguration,
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
>(MediaLiveClient, ListOfferingsCommand, "NextToken", "NextToken", "MaxResults");
