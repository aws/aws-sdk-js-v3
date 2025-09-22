// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CA,
  _GAGIRP,
  _GAGIRPR,
  _GAGIRPRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _Or,
  _PAGIRP,
  _PAGIRPR,
  _PAGIRPRu,
  _Po,
  _xaai,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessGrantsInstanceResourcePolicyRequest = struct(
  n0,
  _GAGIRPR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var GetAccessGrantsInstanceResourcePolicyResult = struct(n0, _GAGIRPRe, 0, [_Po, _Or, _CA], [0, 0, 4]);
export var PutAccessGrantsInstanceResourcePolicyRequest = struct(
  n0,
  _PAGIRPR,
  0,
  [_AI, _Po, _Or],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    0,
    0,
  ]
);
export var PutAccessGrantsInstanceResourcePolicyResult = struct(n0, _PAGIRPRu, 0, [_Po, _Or, _CA], [0, 0, 4]);
export var GetAccessGrantsInstanceResourcePolicy = op(
  n0,
  _GAGIRP,
  {
    [_h]: ["GET", "/v20180820/accessgrantsinstance/resourcepolicy", 200],
    [_hCR]: 1,
  },
  () => GetAccessGrantsInstanceResourcePolicyRequest,
  () => GetAccessGrantsInstanceResourcePolicyResult
);
export var PutAccessGrantsInstanceResourcePolicy = op(
  n0,
  _PAGIRP,
  {
    [_h]: ["PUT", "/v20180820/accessgrantsinstance/resourcepolicy", 200],
    [_hCR]: 1,
  },
  () => PutAccessGrantsInstanceResourcePolicyRequest,
  () => PutAccessGrantsInstanceResourcePolicyResult
);
