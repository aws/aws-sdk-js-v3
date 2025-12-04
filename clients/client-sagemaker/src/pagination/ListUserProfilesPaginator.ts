// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUserProfilesCommand,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput,
} from "../commands/ListUserProfilesCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUserProfiles: (
  config: SageMakerPaginationConfiguration,
  input: ListUserProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListUserProfilesCommandOutput> = createPaginator<
  SageMakerPaginationConfiguration,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput
>(SageMakerClient, ListUserProfilesCommand, "NextToken", "NextToken", "MaxResults");
