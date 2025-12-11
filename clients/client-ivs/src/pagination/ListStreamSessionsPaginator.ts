// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStreamSessionsCommand,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
} from "../commands/ListStreamSessionsCommand";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStreamSessions: (
  config: IvsPaginationConfiguration,
  input: ListStreamSessionsCommandInput,
  ...rest: any[]
) => Paginator<ListStreamSessionsCommandOutput> = createPaginator<
  IvsPaginationConfiguration,
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput
>(IvsClient, ListStreamSessionsCommand, "nextToken", "nextToken", "maxResults");
