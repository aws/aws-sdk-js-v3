// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSigningProfilesCommand,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput,
} from "../commands/ListSigningProfilesCommand";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSigningProfiles: (
  config: SignerPaginationConfiguration,
  input: ListSigningProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListSigningProfilesCommandOutput> = createPaginator<
  SignerPaginationConfiguration,
  ListSigningProfilesCommandInput,
  ListSigningProfilesCommandOutput
>(SignerClient, ListSigningProfilesCommand, "nextToken", "nextToken", "maxResults");
