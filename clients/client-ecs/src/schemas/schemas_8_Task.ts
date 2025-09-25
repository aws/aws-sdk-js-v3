// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _c,
  _cl,
  _e,
  _eD,
  _eIM,
  _fa,
  _GTP,
  _GTPR,
  _GTPRe,
  _m,
  _pE,
  _PT,
  _PTr,
  _pTro,
  _rAes,
  _RNFE,
  _tA,
  _ta,
  _tas,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _UTP,
  _UTPR,
  _UTPRp,
  Failures,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTaskProtectionRequest = struct(n0, _GTPR, 0, [_cl, _tas], [0, 64 | 0]);
export var GetTaskProtectionResponse = struct(n0, _GTPRe, 0, [_pTro, _fa], [() => ProtectedTasks, () => Failures]);
export var ProtectedTask = struct(n0, _PT, 0, [_tA, _pE, _eD], [0, 2, 4]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAes, _ta], [0, () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rAes, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateTaskProtectionRequest = struct(n0, _UTPR, 0, [_cl, _tas, _pE, _eIM], [0, 64 | 0, 2, 1]);
export var UpdateTaskProtectionResponse = struct(n0, _UTPRp, 0, [_pTro, _fa], [() => ProtectedTasks, () => Failures]);
export var ProtectedTasks = list(n0, _PTr, 0, () => ProtectedTask);
export var TagKeys = 64 | 0;

export var GetTaskProtection = op(
  n0,
  _GTP,
  0,
  () => GetTaskProtectionRequest,
  () => GetTaskProtectionResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateTaskProtection = op(
  n0,
  _UTP,
  0,
  () => UpdateTaskProtectionRequest,
  () => UpdateTaskProtectionResponse
);
