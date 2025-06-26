// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { GetStreamCommand, GetStreamCommandInput, GetStreamCommandOutput } from "../commands/GetStreamCommand";
import { KeyspacesStreamsClient } from "../KeyspacesStreamsClient";
import { KeyspacesStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetStream: (
  config: KeyspacesStreamsPaginationConfiguration,
  input: GetStreamCommandInput,
  ...rest: any[]
) => Paginator<GetStreamCommandOutput> = createPaginator<
  KeyspacesStreamsPaginationConfiguration,
  GetStreamCommandInput,
  GetStreamCommandOutput
>(KeyspacesStreamsClient, GetStreamCommand, "nextToken", "nextToken", "maxResults");
