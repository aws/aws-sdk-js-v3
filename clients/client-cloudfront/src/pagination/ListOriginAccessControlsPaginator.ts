// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListOriginAccessControlsCommand,
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "../commands/ListOriginAccessControlsCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOriginAccessControls: (
  config: CloudFrontPaginationConfiguration,
  input: ListOriginAccessControlsCommandInput,
  ...rest: any[]
) => Paginator<ListOriginAccessControlsCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput
>(CloudFrontClient, ListOriginAccessControlsCommand, "Marker", "OriginAccessControlList.NextMarker", "MaxItems");
