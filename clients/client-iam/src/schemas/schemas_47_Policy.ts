// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { MalformedPolicyDocumentException as __MalformedPolicyDocumentException } from "../models/index";
import {
  _aQE,
  _AUTCP,
  _c,
  _e,
  _GN,
  _HE,
  _hE,
  _m,
  _MPA,
  _MPDE,
  _MPL,
  _PD,
  _PGP,
  _PGPR,
  _PN,
  _PRP,
  _PRPR,
  _PRPu,
  _PUP,
  _PUPR,
  _RLC,
  _RN,
  _RNe,
  _RS,
  _RUC,
  _UAPP,
  _UAPPR,
  _UARP,
  _UARPR,
  _UN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyDocument`, 400],
  },
  [_m],
  [0],

  __MalformedPolicyDocumentException
);
export var PutGroupPolicyRequest = struct(n0, _PGPR, 0, [_GN, _PN, _PD], [0, 0, 0]);
export var PutRolePolicyRequest = struct(n0, _PRPR, 0, [_RN, _PN, _PD], [0, 0, 0]);
export var PutUserPolicyRequest = struct(n0, _PUPR, 0, [_UN, _PN, _PD], [0, 0, 0]);
export var UpdateAccountPasswordPolicyRequest = struct(
  n0,
  _UAPPR,
  0,
  [_MPL, _RS, _RNe, _RUC, _RLC, _AUTCP, _MPA, _PRP, _HE],
  [1, 2, 2, 2, 2, 2, 1, 1, 2]
);
export var UpdateAssumeRolePolicyRequest = struct(n0, _UARPR, 0, [_RN, _PD], [0, 0]);
export var PutGroupPolicy = op(
  n0,
  _PGP,
  0,
  () => PutGroupPolicyRequest,
  () => Unit
);
export var PutRolePolicy = op(
  n0,
  _PRPu,
  0,
  () => PutRolePolicyRequest,
  () => Unit
);
export var PutUserPolicy = op(
  n0,
  _PUP,
  0,
  () => PutUserPolicyRequest,
  () => Unit
);
export var UpdateAccountPasswordPolicy = op(
  n0,
  _UAPP,
  0,
  () => UpdateAccountPasswordPolicyRequest,
  () => Unit
);
export var UpdateAssumeRolePolicy = op(
  n0,
  _UARP,
  0,
  () => UpdateAssumeRolePolicyRequest,
  () => Unit
);
