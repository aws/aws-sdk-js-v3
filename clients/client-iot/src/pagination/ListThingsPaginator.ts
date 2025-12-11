// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListThingsCommand, ListThingsCommandInput, ListThingsCommandOutput } from "../commands/ListThingsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThings: (
  config: IoTPaginationConfiguration,
  input: ListThingsCommandInput,
  ...rest: any[]
) => Paginator<ListThingsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingsCommandInput,
  ListThingsCommandOutput
>(IoTClient, ListThingsCommand, "nextToken", "nextToken", "maxResults");
