// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCreateAccountStatusCommand,
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "../commands/ListCreateAccountStatusCommand";
import { OrganizationsClient } from "../OrganizationsClient";
import { OrganizationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCreateAccountStatus: (
  config: OrganizationsPaginationConfiguration,
  input: ListCreateAccountStatusCommandInput,
  ...rest: any[]
) => Paginator<ListCreateAccountStatusCommandOutput> = createPaginator<
  OrganizationsPaginationConfiguration,
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput
>(OrganizationsClient, ListCreateAccountStatusCommand, "NextToken", "NextToken", "MaxResults");
