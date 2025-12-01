// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTunnelsCommand, ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient";
import { IoTSecureTunnelingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTunnels: (
  config: IoTSecureTunnelingPaginationConfiguration,
  input: ListTunnelsCommandInput,
  ...rest: any[]
) => Paginator<ListTunnelsCommandOutput> = createPaginator<
  IoTSecureTunnelingPaginationConfiguration,
  ListTunnelsCommandInput,
  ListTunnelsCommandOutput
>(IoTSecureTunnelingClient, ListTunnelsCommand, "nextToken", "nextToken", "maxResults");
