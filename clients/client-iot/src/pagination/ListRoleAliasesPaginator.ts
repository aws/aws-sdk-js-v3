// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRoleAliasesCommand,
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput,
} from "../commands/ListRoleAliasesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoleAliases: (
  config: IoTPaginationConfiguration,
  input: ListRoleAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListRoleAliasesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput
>(IoTClient, ListRoleAliasesCommand, "marker", "nextMarker", "pageSize");
