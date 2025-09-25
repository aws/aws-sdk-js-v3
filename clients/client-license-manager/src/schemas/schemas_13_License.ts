// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  FailedDependencyException as __FailedDependencyException,
  FilterLimitExceededException as __FilterLimitExceededException,
} from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _e,
  _EC,
  _FDE,
  _Fi,
  _FLEE,
  _hE,
  _IF,
  _IFL,
  _LRI,
  _LRIR,
  _LRIRi,
  _M,
  _MR,
  _N,
  _NT,
  _Pl,
  _PV,
  _RA,
  _RI,
  _RIe,
  _RIL,
  _ROAI,
  _RT,
  _Val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FailedDependencyException = error(
  n0,
  _FDE,
  {
    [_e]: _c,
    [_hE]: 424,
    [_aQE]: [`FailedDependency`, 424],
  },
  [_M, _EC],
  [0, 0],

  __FailedDependencyException
);
export var FilterLimitExceededException = error(
  n0,
  _FLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`FilterLimitExceeded`, 400],
  },
  [_M],
  [0],

  __FilterLimitExceededException
);
export var InventoryFilter = struct(n0, _IF, 0, [_N, _C, _Val], [0, 0, 0]);
export var ListResourceInventoryRequest = struct(n0, _LRIR, 0, [_MR, _NT, _Fi], [1, 0, () => InventoryFilterList]);
export var ListResourceInventoryResponse = struct(n0, _LRIRi, 0, [_RIL, _NT], [() => ResourceInventoryList, 0]);
export var ResourceInventory = struct(n0, _RI, 0, [_RIe, _RT, _RA, _Pl, _PV, _ROAI], [0, 0, 0, 0, 0, 0]);
export var InventoryFilterList = list(n0, _IFL, 0, () => InventoryFilter);
export var ResourceInventoryList = list(n0, _RIL, 0, () => ResourceInventory);
export var ListResourceInventory = op(
  n0,
  _LRI,
  0,
  () => ListResourceInventoryRequest,
  () => ListResourceInventoryResponse
);
