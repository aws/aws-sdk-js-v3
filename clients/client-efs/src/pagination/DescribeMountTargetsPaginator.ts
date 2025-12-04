// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeMountTargetsCommand,
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "../commands/DescribeMountTargetsCommand";
import { EFSClient } from "../EFSClient";
import { EFSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeMountTargets: (
  config: EFSPaginationConfiguration,
  input: DescribeMountTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeMountTargetsCommandOutput> = createPaginator<
  EFSPaginationConfiguration,
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput
>(EFSClient, DescribeMountTargetsCommand, "Marker", "NextMarker", "MaxItems");
