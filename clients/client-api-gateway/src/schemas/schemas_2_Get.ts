// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cP,
  _d,
  _dVe,
  _fN,
  _GST,
  _GSTe,
  _GSTR,
  _GSTRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _li,
  _LOSCP,
  _LOST,
  _n,
  _p,
  _r,
  _SCP,
  _ST,
  _STd,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSdkTypeRequest = struct(n0, _GSTR, 0, [_i], [[0, 1]]);
export var GetSdkTypesRequest = struct(
  n0,
  _GSTRe,
  0,
  [_p, _li],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var SdkConfigurationProperty = struct(n0, _SCP, 0, [_n, _fN, _d, _r, _dVe], [0, 0, 0, 2, 0]);
export var SdkType = struct(n0, _ST, 0, [_i, _fN, _d, _cP], [0, 0, 0, () => ListOfSdkConfigurationProperty]);
export var SdkTypes = struct(
  n0,
  _STd,
  0,
  [_it],
  [
    [
      () => ListOfSdkType,
      {
        [_jN]: _ite,
      },
    ],
  ]
);
export var ListOfSdkConfigurationProperty = list(n0, _LOSCP, 0, () => SdkConfigurationProperty);
export var ListOfSdkType = list(n0, _LOST, 0, () => SdkType);
export var GetSdkType = op(
  n0,
  _GST,
  {
    [_ht]: ["GET", "/sdktypes/{id}", 200],
  },
  () => GetSdkTypeRequest,
  () => SdkType
);
export var GetSdkTypes = op(
  n0,
  _GSTe,
  {
    [_ht]: ["GET", "/sdktypes", 200],
  },
  () => GetSdkTypesRequest,
  () => SdkTypes
);
