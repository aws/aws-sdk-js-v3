// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationSignalsClient } from "../ApplicationSignalsClient";
import {
  GetInstrumentationConfigurationStatusCommand,
  GetInstrumentationConfigurationStatusCommandInput,
  GetInstrumentationConfigurationStatusCommandOutput,
} from "../commands/GetInstrumentationConfigurationStatusCommand";
import type { ApplicationSignalsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetInstrumentationConfigurationStatus: (
  config: ApplicationSignalsPaginationConfiguration,
  input: GetInstrumentationConfigurationStatusCommandInput,
  ...rest: any[]
) => Paginator<GetInstrumentationConfigurationStatusCommandOutput> = createPaginator<
  ApplicationSignalsPaginationConfiguration,
  GetInstrumentationConfigurationStatusCommandInput,
  GetInstrumentationConfigurationStatusCommandOutput
>(ApplicationSignalsClient, GetInstrumentationConfigurationStatusCommand, "NextToken", "NextToken", "MaxResults");
