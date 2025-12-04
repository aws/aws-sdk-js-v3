// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: IvsPaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(IvsClient, ListChannelsCommand, "nextToken", "nextToken", "maxResults");
