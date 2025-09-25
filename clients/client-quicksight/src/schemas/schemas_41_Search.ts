// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CT,
  _DSIat,
  _DSSat,
  _DSSatao,
  _DSSFa,
  _DSSFLa,
  _DSSLa,
  _Fi,
  _h,
  _LUT,
  _MR,
  _N,
  _NT,
  _Op,
  _RI,
  _SDSea,
  _SDSRea,
  _SDSRear,
  _St,
  _T,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceSearchFilter = struct(n0, _DSSFa, 0, [_Op, _N, _V], [0, 0, 0]);
export var DataSourceSummary = struct(n0, _DSSat, 0, [_Ar, _DSIat, _N, _T, _CT, _LUT], [0, 0, 0, 0, 4, 4]);
export var SearchDataSourcesRequest = struct(
  n0,
  _SDSRea,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => DataSourceSearchFilterList, 0, 1]
);
export var SearchDataSourcesResponse = struct(
  n0,
  _SDSRear,
  0,
  [_DSSatao, _NT, _St, _RI],
  [() => DataSourceSummaryList, 0, [1, 32], 0]
);
export var DataSourceSearchFilterList = list(n0, _DSSFLa, 0, () => DataSourceSearchFilter);
export var DataSourceSummaryList = list(n0, _DSSLa, 0, () => DataSourceSummary);
export var SearchDataSources = op(
  n0,
  _SDSea,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/data-sources", 200],
  },
  () => SearchDataSourcesRequest,
  () => SearchDataSourcesResponse
);
