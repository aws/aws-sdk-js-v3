// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CLPRA,
  _CT,
  _DSI,
  _DSSa,
  _DSSata,
  _DSSF,
  _DSSFL,
  _DSSL,
  _Fi,
  _FVo,
  _h,
  _hQ,
  _IM,
  _LDS,
  _LDSR,
  _LDSRi,
  _LUT,
  _MR,
  _mr,
  _N,
  _Na,
  _NT,
  _nt,
  _Op,
  _PPe,
  _RI,
  _RLPDS,
  _RLPTCA,
  _SDSe,
  _SDSR,
  _SDSRe,
  _St,
  _UA,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSetSearchFilter = struct(n0, _DSSF, 0, [_Op, _N, _V], [0, 0, 0]);
export var DataSetSummary = struct(
  n0,
  _DSSa,
  0,
  [_Ar, _DSI, _N, _CT, _LUT, _IM, _RLPDS, _RLPTCA, _CLPRA, _UA],
  [0, 0, 0, 4, 4, 0, () => RowLevelPermissionDataSet, 2, 2, 0]
);
export var ListDataSetsRequest = struct(
  n0,
  _LDSR,
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
export var ListDataSetsResponse = struct(
  n0,
  _LDSRi,
  0,
  [_DSSata, _NT, _RI, _St],
  [() => DataSetSummaryList, 0, 0, [1, 32]]
);
export var RowLevelPermissionDataSet = struct(n0, _RLPDS, 0, [_Na, _Ar, _PPe, _FVo, _St], [0, 0, 0, 0, 0]);
export var SearchDataSetsRequest = struct(
  n0,
  _SDSR,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => DataSetSearchFilterList, 0, 1]
);
export var SearchDataSetsResponse = struct(
  n0,
  _SDSRe,
  0,
  [_DSSata, _NT, _St, _RI],
  [() => DataSetSummaryList, 0, [1, 32], 0]
);
export var DataSetSearchFilterList = list(n0, _DSSFL, 0, () => DataSetSearchFilter);
export var DataSetSummaryList = list(n0, _DSSL, 0, () => DataSetSummary);
export var ListDataSets = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets", 200],
  },
  () => ListDataSetsRequest,
  () => ListDataSetsResponse
);
export var SearchDataSets = op(
  n0,
  _SDSe,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/data-sets", 200],
  },
  () => SearchDataSetsRequest,
  () => SearchDataSetsResponse
);
