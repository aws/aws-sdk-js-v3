// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DownloadDBLogFilePortionCommand,
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
} from "../commands/DownloadDBLogFilePortionCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDownloadDBLogFilePortion: (
  config: RDSPaginationConfiguration,
  input: DownloadDBLogFilePortionCommandInput,
  ...rest: any[]
) => Paginator<DownloadDBLogFilePortionCommandOutput> = createPaginator<
  RDSPaginationConfiguration,
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput
>(RDSClient, DownloadDBLogFilePortionCommand, "Marker", "Marker", "NumberOfLines");
