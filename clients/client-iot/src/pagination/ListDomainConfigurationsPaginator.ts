// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDomainConfigurationsCommand,
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "../commands/ListDomainConfigurationsCommand";
import { IoTClient } from "../IoTClient";
import type { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainConfigurations: (
  config: IoTPaginationConfiguration,
  input: ListDomainConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<ListDomainConfigurationsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput
>(IoTClient, ListDomainConfigurationsCommand, "marker", "nextMarker", "pageSize");
