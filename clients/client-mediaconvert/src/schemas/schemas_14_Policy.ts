// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GP,
  _GPR,
  _GPRe,
  _HI,
  _hI,
  _HIt,
  _hIt,
  _ht,
  _jN,
  _Po,
  _po,
  _PPR,
  _PPRu,
  _PPu,
  _SIn,
  _sIn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetPolicyRequest = struct(n0, _GPR, 0, [], []);
export var GetPolicyResponse = struct(
  n0,
  _GPRe,
  0,
  [_Po],
  [
    [
      () => Policy,
      {
        [_jN]: _po,
      },
    ],
  ]
);
export var Policy = struct(
  n0,
  _Po,
  0,
  [_HI, _HIt, _SIn],
  [
    [
      0,
      {
        [_jN]: _hI,
      },
    ],
    [
      0,
      {
        [_jN]: _hIt,
      },
    ],
    [
      0,
      {
        [_jN]: _sIn,
      },
    ],
  ]
);
export var PutPolicyRequest = struct(
  n0,
  _PPR,
  0,
  [_Po],
  [
    [
      () => Policy,
      {
        [_jN]: _po,
      },
    ],
  ]
);
export var PutPolicyResponse = struct(
  n0,
  _PPRu,
  0,
  [_Po],
  [
    [
      () => Policy,
      {
        [_jN]: _po,
      },
    ],
  ]
);
export var GetPolicy = op(
  n0,
  _GP,
  {
    [_ht]: ["GET", "/2017-08-29/policy", 200],
  },
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
export var PutPolicy = op(
  n0,
  _PPu,
  {
    [_ht]: ["PUT", "/2017-08-29/policy", 200],
  },
  () => PutPolicyRequest,
  () => PutPolicyResponse
);
