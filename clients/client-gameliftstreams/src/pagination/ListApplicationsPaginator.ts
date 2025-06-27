// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { GameLiftStreamsClient } from "../GameLiftStreamsClient";
import { GameLiftStreamsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplications: (
  config: GameLiftStreamsPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationsCommandOutput> = createPaginator<
  GameLiftStreamsPaginationConfiguration,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
>(GameLiftStreamsClient, ListApplicationsCommand, "NextToken", "NextToken", "MaxResults");
