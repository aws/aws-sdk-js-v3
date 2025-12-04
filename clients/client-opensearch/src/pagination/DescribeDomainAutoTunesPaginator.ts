// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDomainAutoTunes: (
  config: OpenSearchPaginationConfiguration,
  input: DescribeDomainAutoTunesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDomainAutoTunesCommandOutput> = createPaginator<
  OpenSearchPaginationConfiguration,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput
>(OpenSearchClient, DescribeDomainAutoTunesCommand, "NextToken", "NextToken", "MaxResults");
