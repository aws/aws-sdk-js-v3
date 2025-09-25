// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _DRP,
  _DRPR,
  _DRPRe,
  _GRP,
  _GRPR,
  _GRPRe,
  _P,
  _PRP,
  _PRPR,
  _PRPRu,
  _RAe,
  _TK,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RAe], [0]);
export var DeleteResourcePolicyResult = struct(n0, _DRPRe, 0, [_RAe, _P, _CTr], [0, 0, 4]);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RAe], [0]);
export var GetResourcePolicyResult = struct(n0, _GRPRe, 0, [_RAe, _P, _CTr], [0, 0, 4]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RAe, _P], [0, 0]);
export var PutResourcePolicyResult = struct(n0, _PRPRu, 0, [_RAe, _P, _CTr], [0, 0, 4]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAe, _TK], [0, 64 | 0]);
export var UntagResourceResult = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResult
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResult
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResult
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResult
);
