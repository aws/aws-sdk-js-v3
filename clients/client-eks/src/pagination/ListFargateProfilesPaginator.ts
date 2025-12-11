// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListFargateProfilesCommand,
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFargateProfiles: (
  config: EKSPaginationConfiguration,
  input: ListFargateProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListFargateProfilesCommandOutput> = createPaginator<
  EKSPaginationConfiguration,
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput
>(EKSClient, ListFargateProfilesCommand, "nextToken", "nextToken", "maxResults");
