// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeLaunchConfigurationTemplatesCommand,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "../commands/DescribeLaunchConfigurationTemplatesCommand";
import { DrsClient } from "../DrsClient";
import { DrsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeLaunchConfigurationTemplates: (
  config: DrsPaginationConfiguration,
  input: DescribeLaunchConfigurationTemplatesCommandInput,
  ...rest: any[]
) => Paginator<DescribeLaunchConfigurationTemplatesCommandOutput> = createPaginator<
  DrsPaginationConfiguration,
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput
>(DrsClient, DescribeLaunchConfigurationTemplatesCommand, "nextToken", "nextToken", "maxResults");
