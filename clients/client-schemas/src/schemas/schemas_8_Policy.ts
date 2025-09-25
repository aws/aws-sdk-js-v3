// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { PreconditionFailedException as __PreconditionFailedException } from "../models/index";
import {
  _a,
  _C,
  _c,
  _e,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _hQ,
  _M,
  _mT,
  _P,
  _PFE,
  _PRP,
  _PRPR,
  _PRPRu,
  _RI,
  _RN,
  _rN,
  _Ss,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SynthesizedJson__string = sim(n0, _Ss, 0, {
  [_mT]: _a,
});
export var GetResourcePolicyRequest = struct(
  n0,
  _GRPR,
  0,
  [_RN],
  [
    [
      0,
      {
        [_hQ]: _rN,
      },
    ],
  ]
);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_P, _RI], [[() => SynthesizedJson__string, 0], 0]);
export var PreconditionFailedException = error(
  n0,
  _PFE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_C, _M],
  [0, 0],

  __PreconditionFailedException
);
export var PutResourcePolicyRequest = struct(
  n0,
  _PRPR,
  0,
  [_P, _RN, _RI],
  [
    [() => SynthesizedJson__string, 0],
    [
      0,
      {
        [_hQ]: _rN,
      },
    ],
    0,
  ]
);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_P, _RI], [[() => SynthesizedJson__string, 0], 0]);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/v1/policy", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/v1/policy", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
