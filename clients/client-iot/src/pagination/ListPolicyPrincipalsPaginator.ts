// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicyPrincipalsCommand,
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "../commands/ListPolicyPrincipalsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyPrincipals: (
  config: IoTPaginationConfiguration,
  input: ListPolicyPrincipalsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyPrincipalsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput
>(IoTClient, ListPolicyPrincipalsCommand, "marker", "nextMarker", "pageSize");
