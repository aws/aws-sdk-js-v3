// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NotPolicyException as __NotPolicyException } from "../models/index";
import {
  _AP,
  _APR,
  _APRt,
  _c,
  _DA,
  _DP,
  _DPR,
  _DPRe,
  _e,
  _h,
  _hE,
  _hH,
  _M,
  _NPE,
  _OR,
  _PRo,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachPolicyRequest = struct(
  n0,
  _APR,
  0,
  [_DA, _PRo, _OR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
  ]
);
export var AttachPolicyResponse = struct(n0, _APRt, 0, [], []);
export var DetachPolicyRequest = struct(
  n0,
  _DPR,
  0,
  [_DA, _PRo, _OR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
  ]
);
export var DetachPolicyResponse = struct(n0, _DPRe, 0, [], []);
export var NotPolicyException = error(
  n0,
  _NPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NotPolicyException
);
export var AttachPolicy = op(
  n0,
  _AP,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/policy/attach", 200],
  },
  () => AttachPolicyRequest,
  () => AttachPolicyResponse
);
export var DetachPolicy = op(
  n0,
  _DP,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/policy/detach", 200],
  },
  () => DetachPolicyRequest,
  () => DetachPolicyResponse
);
