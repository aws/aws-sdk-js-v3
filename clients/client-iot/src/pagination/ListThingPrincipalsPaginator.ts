// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListThingPrincipalsCommand,
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "../commands/ListThingPrincipalsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListThingPrincipals: (
  config: IoTPaginationConfiguration,
  input: ListThingPrincipalsCommandInput,
  ...rest: any[]
) => Paginator<ListThingPrincipalsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput
>(IoTClient, ListThingPrincipalsCommand, "nextToken", "nextToken", "maxResults");
