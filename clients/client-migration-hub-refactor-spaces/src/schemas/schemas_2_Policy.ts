// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidResourcePolicyException as __InvalidResourcePolicyException } from "../models/index";
import { _c, _e, _GRP, _GRPR, _GRPRe, _h, _hE, _I, _IRPE, _M, _P, _PRP, _PRPR, _PRPRu, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_I], [[0, 1]]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_P], [0]);
export var InvalidResourcePolicyException = error(
  n0,
  _IRPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidResourcePolicyException
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _P], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["GET", "/resourcepolicy/{Identifier}", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["PUT", "/resourcepolicy", 200],
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
