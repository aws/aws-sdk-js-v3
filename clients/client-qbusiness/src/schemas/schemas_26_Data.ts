// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _cA,
  _dN,
  _DS,
  _DSa,
  _dSa,
  _dSI,
  _hQ,
  _ht,
  _iI,
  _LDS,
  _LDSR,
  _LDSRi,
  _mRa,
  _nT,
  _s,
  _t,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSource = struct(n0, _DS, 0, [_dN, _dSI, _t, _cA, _uA, _s], [0, 0, 0, 4, 4, 0]);
export var ListDataSourcesRequest = struct(
  n0,
  _LDSR,
  0,
  [_aIp, _iI, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListDataSourcesResponse = struct(n0, _LDSRi, 0, [_dSa, _nT], [() => DataSources, 0]);
export var DataSources = list(n0, _DSa, 0, () => DataSource);
export var ListDataSources = op(
  n0,
  _LDS,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}/datasources", 200],
  },
  () => ListDataSourcesRequest,
  () => ListDataSourcesResponse
);
