// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _ABIJI,
  _ABIJS,
  _ABIJSL,
  _Ar,
  _CT,
  _FA,
  _h,
  _hQ,
  _JS,
  _LABIJ,
  _LABIJR,
  _LABIJRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetBundleImportJobSummary = struct(n0, _ABIJS, 0, [_JS, _Ar, _CT, _ABIJI, _FA], [0, 0, 4, 0, 0]);
export var ListAssetBundleImportJobsRequest = struct(
  n0,
  _LABIJR,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListAssetBundleImportJobsResponse = struct(
  n0,
  _LABIJRi,
  0,
  [_ABIJSL, _NT, _RI, _St],
  [() => AssetBundleImportJobSummaryList, 0, 0, [1, 32]]
);
export var AssetBundleImportJobSummaryList = list(n0, _ABIJSL, 0, () => AssetBundleImportJobSummary);
export var ListAssetBundleImportJobs = op(
  n0,
  _LABIJ,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/asset-bundle-import-jobs", 200],
  },
  () => ListAssetBundleImportJobsRequest,
  () => ListAssetBundleImportJobsResponse
);
