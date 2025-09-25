// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _aIp,
  _cA,
  _DA,
  _DAa,
  _dAA,
  _dAa,
  _dAI,
  _dN,
  _hQ,
  _ht,
  _iAA,
  _LDA,
  _LDAR,
  _LDARi,
  _mRa,
  _nT,
  _pr,
  _uA,
  n0,
} from "./schemas_0";
import { DataAccessorAuthenticationDetail, DataAccessorName } from "./schemas_14_Data";

/* eslint no-var: 0 */

export var DataAccessor = struct(
  n0,
  _DA,
  0,
  [_dN, _dAI, _dAA, _iAA, _pr, _aD, _cA, _uA],
  [[() => DataAccessorName, 0], 0, 0, 0, 0, () => DataAccessorAuthenticationDetail, 4, 4]
);
export var ListDataAccessorsRequest = struct(
  n0,
  _LDAR,
  0,
  [_aIp, _nT, _mRa],
  [
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
export var ListDataAccessorsResponse = struct(n0, _LDARi, 0, [_dAa, _nT], [[() => DataAccessors, 0], 0]);
export var DataAccessors = list(n0, _DAa, 0, [() => DataAccessor, 0]);
export var ListDataAccessors = op(
  n0,
  _LDA,
  {
    [_ht]: ["GET", "/applications/{applicationId}/dataaccessors", 200],
  },
  () => ListDataAccessorsRequest,
  () => ListDataAccessorsResponse
);
