// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrincipalThingsCommand,
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput,
} from "../commands/ListPrincipalThingsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipalThings: (
  config: IoTPaginationConfiguration,
  input: ListPrincipalThingsCommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalThingsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPrincipalThingsCommandInput,
  ListPrincipalThingsCommandOutput
>(IoTClient, ListPrincipalThingsCommand, "nextToken", "nextToken", "maxResults");
