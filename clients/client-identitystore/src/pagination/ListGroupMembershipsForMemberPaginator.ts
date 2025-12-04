// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListGroupMembershipsForMemberCommand,
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput,
} from "../commands/ListGroupMembershipsForMemberCommand";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { IdentitystorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGroupMembershipsForMember: (
  config: IdentitystorePaginationConfiguration,
  input: ListGroupMembershipsForMemberCommandInput,
  ...rest: any[]
) => Paginator<ListGroupMembershipsForMemberCommandOutput> = createPaginator<
  IdentitystorePaginationConfiguration,
  ListGroupMembershipsForMemberCommandInput,
  ListGroupMembershipsForMemberCommandOutput
>(IdentitystoreClient, ListGroupMembershipsForMemberCommand, "NextToken", "NextToken", "MaxResults");
