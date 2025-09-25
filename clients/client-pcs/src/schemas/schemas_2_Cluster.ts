// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _bI,
  _cIl,
  _E,
  _En,
  _en,
  _iA,
  _nID,
  _p,
  _pIA,
  _pIAu,
  _RCNGI,
  _RCNGIR,
  _RCNGIRe,
  _SS,
  _sS,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SharedSecret = sim(n0, _SS, 0, 8);
export var Endpoint = struct(n0, _E, 0, [_ty, _pIA, _pIAu, _iA, _p], [0, 0, 0, 0, 0]);
export var RegisterComputeNodeGroupInstanceRequest = struct(n0, _RCNGIR, 0, [_cIl, _bI], [0, 0]);
export var RegisterComputeNodeGroupInstanceResponse = struct(
  n0,
  _RCNGIRe,
  0,
  [_nID, _sS, _en],
  [0, [() => SharedSecret, 0], () => Endpoints]
);
export var Endpoints = list(n0, _En, 0, () => Endpoint);
export var RegisterComputeNodeGroupInstance = op(
  n0,
  _RCNGI,
  0,
  () => RegisterComputeNodeGroupInstanceRequest,
  () => RegisterComputeNodeGroupInstanceResponse
);
