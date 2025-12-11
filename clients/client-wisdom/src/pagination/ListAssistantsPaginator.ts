// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAssistantsCommand,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput,
} from "../commands/ListAssistantsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAssistants: (
  config: WisdomPaginationConfiguration,
  input: ListAssistantsCommandInput,
  ...rest: any[]
) => Paginator<ListAssistantsCommandOutput> = createPaginator<
  WisdomPaginationConfiguration,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput
>(WisdomClient, ListAssistantsCommand, "nextToken", "nextToken", "maxResults");
