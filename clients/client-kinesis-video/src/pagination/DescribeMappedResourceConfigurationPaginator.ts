// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMappedResourceConfigurationCommand,
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput,
} from "../commands/DescribeMappedResourceConfigurationCommand";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMappedResourceConfiguration: (
  config: KinesisVideoPaginationConfiguration,
  input: DescribeMappedResourceConfigurationCommandInput,
  ...rest: any[]
) => Paginator<DescribeMappedResourceConfigurationCommandOutput> = createPaginator<
  KinesisVideoPaginationConfiguration,
  DescribeMappedResourceConfigurationCommandInput,
  DescribeMappedResourceConfigurationCommandOutput
>(KinesisVideoClient, DescribeMappedResourceConfigurationCommand, "NextToken", "NextToken", "MaxResults");
