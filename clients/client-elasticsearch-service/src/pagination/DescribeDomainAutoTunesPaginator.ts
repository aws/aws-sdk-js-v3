// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeDomainAutoTunes: (
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribeDomainAutoTunesCommandInput,
  ...rest: any[]
) => Paginator<DescribeDomainAutoTunesCommandOutput> = createPaginator<
  ElasticsearchServicePaginationConfiguration,
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput
>(ElasticsearchServiceClient, DescribeDomainAutoTunesCommand, "NextToken", "NextToken", "MaxResults");
