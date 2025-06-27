// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListParticipantReplicasCommand,
  ListParticipantReplicasCommandInput,
  ListParticipantReplicasCommandOutput,
} from "../commands/ListParticipantReplicasCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListParticipantReplicas: (
  config: IVSRealTimePaginationConfiguration,
  input: ListParticipantReplicasCommandInput,
  ...rest: any[]
) => Paginator<ListParticipantReplicasCommandOutput> = createPaginator<
  IVSRealTimePaginationConfiguration,
  ListParticipantReplicasCommandInput,
  ListParticipantReplicasCommandOutput
>(IVSRealTimeClient, ListParticipantReplicasCommand, "nextToken", "nextToken", "maxResults");
