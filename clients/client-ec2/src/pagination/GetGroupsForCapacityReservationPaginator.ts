// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetGroupsForCapacityReservationCommand,
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput,
} from "../commands/GetGroupsForCapacityReservationCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetGroupsForCapacityReservation: (
  config: EC2PaginationConfiguration,
  input: GetGroupsForCapacityReservationCommandInput,
  ...rest: any[]
) => Paginator<GetGroupsForCapacityReservationCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetGroupsForCapacityReservationCommandInput,
  GetGroupsForCapacityReservationCommandOutput
>(EC2Client, GetGroupsForCapacityReservationCommand, "NextToken", "NextToken", "MaxResults");
