// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "../commands/DescribeLaunchConfigurationTemplatesCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLaunchConfigurationTemplates: (
  config: MgnPaginationConfiguration,
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeLaunchConfigurationTemplatesCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput
>(MgnClient, DescribeLaunchConfigurationTemplatesCommand, "nextToken", "nextToken", "maxResults");
