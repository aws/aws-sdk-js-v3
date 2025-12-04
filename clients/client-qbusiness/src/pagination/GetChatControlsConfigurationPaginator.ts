// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetChatControlsConfigurationCommand,
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
} from "../commands/GetChatControlsConfigurationCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetChatControlsConfiguration: (
  config: QBusinessPaginationConfiguration,
  input: GetChatControlsConfigurationCommandInput,
  ...rest: any[]
) => Paginator<GetChatControlsConfigurationCommandOutput> = createPaginator<
  QBusinessPaginationConfiguration,
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput
>(QBusinessClient, GetChatControlsConfigurationCommand, "nextToken", "nextToken", "maxResults");
