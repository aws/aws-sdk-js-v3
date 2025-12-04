// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupMembershipsCommand,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput,
} from "../commands/ListGroupMembershipsCommand";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { IdentitystorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupMemberships: (
  config: IdentitystorePaginationConfiguration,
  input: ListGroupMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListGroupMembershipsCommandOutput> = createPaginator<
  IdentitystorePaginationConfiguration,
  ListGroupMembershipsCommandInput,
  ListGroupMembershipsCommandOutput
>(IdentitystoreClient, ListGroupMembershipsCommand, "NextToken", "NextToken", "MaxResults");
