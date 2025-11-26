// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPackageVersions: (
  config: IoTPaginationConfiguration,
  input: ListPackageVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPackageVersionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput
>(IoTClient, ListPackageVersionsCommand, "nextToken", "nextToken", "maxResults");
