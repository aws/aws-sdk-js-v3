// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRecordingConfigurationsCommand,
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "../commands/ListRecordingConfigurationsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRecordingConfigurations: (
  config: IvsPaginationConfiguration,
  input: ListRecordingConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListRecordingConfigurationsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput
>(IvsClient, ListRecordingConfigurationsCommand, "nextToken", "nextToken", "maxResults");
