// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEncoderConfigurationsCommand,
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput,
} from "../commands/ListEncoderConfigurationsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEncoderConfigurations: (
  config: IVSRealTimePaginationConfiguration,
  input: ListEncoderConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListEncoderConfigurationsCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput
>(IVSRealTimeClient, ListEncoderConfigurationsCommand, "nextToken", "nextToken", "maxResults");
