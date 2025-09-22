// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _dLA,
  _DLS,
  _dLS,
  _DLSL,
  _DLSS,
  _DLSSL,
  _eCv,
  _GDLS,
  _GDLSR,
  _GDLSRe,
  _h,
  _mR,
  _nT,
  _res,
  _sN,
  _sS,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataLakeSource = struct(n0, _DLS, 0, [_ac, _sN, _eCv, _sS], [0, 0, 64 | 0, () => DataLakeSourceStatusList]);
export var DataLakeSourceStatus = struct(n0, _DLSS, 0, [_res, _st], [0, 0]);
export var GetDataLakeSourcesRequest = struct(n0, _GDLSR, 0, [_a, _mR, _nT], [64 | 0, 1, 0]);
export var GetDataLakeSourcesResponse = struct(n0, _GDLSRe, 0, [_dLA, _dLS, _nT], [0, () => DataLakeSourceList, 0]);
export var AccountList = 64 | 0;

export var DataLakeSourceList = list(n0, _DLSL, 0, () => DataLakeSource);
export var DataLakeSourceStatusList = list(n0, _DLSSL, 0, () => DataLakeSourceStatus);
export var GetDataLakeSources = op(
  n0,
  _GDLS,
  {
    [_h]: ["POST", "/v1/datalake/sources", 200],
  },
  () => GetDataLakeSourcesRequest,
  () => GetDataLakeSourcesResponse
);
