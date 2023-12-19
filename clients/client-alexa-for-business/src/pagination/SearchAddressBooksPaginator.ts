// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchAddressBooksCommand,
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput,
} from "../commands/SearchAddressBooksCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchAddressBooks: (
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchAddressBooksCommandInput,
  ...rest: any[]
) => Paginator<SearchAddressBooksCommandOutput> = createPaginator<
  AlexaForBusinessPaginationConfiguration,
  SearchAddressBooksCommandInput,
  SearchAddressBooksCommandOutput
>(AlexaForBusinessClient, SearchAddressBooksCommand, "NextToken", "NextToken", "MaxResults");
