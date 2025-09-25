// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { InvalidParameterException as __InvalidParameterException } from "../models/index";
import { _c, _e, _GRP, _GRPR, _GRPRe, _h, _hE, _IPE, _M, _PD, _PN, _PT, _PVA, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PolicyDocument = sim(n0, _PD, 0, 8);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA, _PN, _PT], [0, 0, 0]);
export var GetResourcePolicyResponse = struct(
  n0,
  _GRPRe,
  0,
  [_RA, _PT, _PVA, _PN, _PD],
  [0, 0, 0, 0, [() => PolicyDocument, 0]]
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidParameterException
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  {
    [_h]: ["POST", "/GetResourcePolicy", 200],
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
