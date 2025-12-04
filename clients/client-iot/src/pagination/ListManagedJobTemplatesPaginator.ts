// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListManagedJobTemplatesCommand,
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "../commands/ListManagedJobTemplatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListManagedJobTemplates: (
  config: IoTPaginationConfiguration,
  input: ListManagedJobTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListManagedJobTemplatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput
>(IoTClient, ListManagedJobTemplatesCommand, "nextToken", "nextToken", "maxResults");
