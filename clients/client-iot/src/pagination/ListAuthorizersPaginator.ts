// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAuthorizersCommand,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput,
} from "../commands/ListAuthorizersCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAuthorizers: (
  config: IoTPaginationConfiguration,
  input: ListAuthorizersCommandInput,
  ...rest: any[]
) => Paginator<ListAuthorizersCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput
>(IoTClient, ListAuthorizersCommand, "marker", "nextMarker", "pageSize");
