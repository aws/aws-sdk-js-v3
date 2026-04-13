// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAttachPointsCommand,
  ListAttachPointsCommandInput,
  ListAttachPointsCommandOutput,
} from "../commands/ListAttachPointsCommand";
import { InterconnectClient } from "../InterconnectClient";
import type { InterconnectPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAttachPoints: (
  config: InterconnectPaginationConfiguration,
  input: ListAttachPointsCommandInput,
  ...rest: any[]
) => Paginator<ListAttachPointsCommandOutput> = createPaginator<
  InterconnectPaginationConfiguration,
  ListAttachPointsCommandInput,
  ListAttachPointsCommandOutput
>(InterconnectClient, ListAttachPointsCommand, "nextToken", "nextToken", "maxResults");
