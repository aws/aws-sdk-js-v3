// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListStateTemplatesCommand,
  ListStateTemplatesCommandInput,
  ListStateTemplatesCommandOutput,
} from "../commands/ListStateTemplatesCommand";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListStateTemplates: (
  config: IoTFleetWisePaginationConfiguration,
  input: ListStateTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListStateTemplatesCommandOutput> = createPaginator<
  IoTFleetWisePaginationConfiguration,
  ListStateTemplatesCommandInput,
  ListStateTemplatesCommandOutput
>(IoTFleetWiseClient, ListStateTemplatesCommand, "nextToken", "nextToken", "maxResults");
