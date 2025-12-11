// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSigningPlatformsCommand,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput,
} from "../commands/ListSigningPlatformsCommand";
import { SignerClient } from "../SignerClient";
import { SignerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSigningPlatforms: (
  config: SignerPaginationConfiguration,
  input: ListSigningPlatformsCommandInput,
  ...rest: any[]
) => Paginator<ListSigningPlatformsCommandOutput> = createPaginator<
  SignerPaginationConfiguration,
  ListSigningPlatformsCommandInput,
  ListSigningPlatformsCommandOutput
>(SignerClient, ListSigningPlatformsCommand, "nextToken", "nextToken", "maxResults");
