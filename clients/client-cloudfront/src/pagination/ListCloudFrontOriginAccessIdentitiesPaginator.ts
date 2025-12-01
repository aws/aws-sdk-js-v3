// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudFrontOriginAccessIdentities: (
  config: CloudFrontPaginationConfiguration,
  input: ListCloudFrontOriginAccessIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListCloudFrontOriginAccessIdentitiesCommandOutput> = createPaginator<
  CloudFrontPaginationConfiguration,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput
>(
  CloudFrontClient,
  ListCloudFrontOriginAccessIdentitiesCommand,
  "Marker",
  "CloudFrontOriginAccessIdentityList.NextMarker",
  "MaxItems"
);
