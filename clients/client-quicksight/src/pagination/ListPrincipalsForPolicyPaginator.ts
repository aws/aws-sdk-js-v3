// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPrincipalsForPolicyCommand,
  ListPrincipalsForPolicyCommandInput,
  ListPrincipalsForPolicyCommandOutput,
} from "../commands/ListPrincipalsForPolicyCommand";
import { QuickSightClient } from "../QuickSightClient";
import type { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPrincipalsForPolicy: (
  config: QuickSightPaginationConfiguration,
  input: ListPrincipalsForPolicyCommandInput,
  ...rest: any[]
) => Paginator<ListPrincipalsForPolicyCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListPrincipalsForPolicyCommandInput,
  ListPrincipalsForPolicyCommandOutput
>(QuickSightClient, ListPrincipalsForPolicyCommand, "NextToken", "NextToken", "MaxResults");
