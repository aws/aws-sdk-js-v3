// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { MalformedPolicyException as __MalformedPolicyException } from "../models/index";
import {
  _aO,
  _cD,
  _cl,
  _CPre,
  _CPRre,
  _CPRrea,
  _CPVre,
  _CPVRre,
  _CPVRrea,
  _dVI,
  _er,
  _gI,
  _GPet,
  _GPReto,
  _GPRetol,
  _GPVe,
  _GPVRet,
  _GPVReto,
  _h,
  _hE,
  _hQ,
  _iAO,
  _iDV,
  _LAP,
  _LAPR,
  _LAPRi,
  _lMD,
  _LPi,
  _LPRis,
  _LPRist,
  _ma,
  _me,
  _MPE,
  _nM,
  _P,
  _p,
  _pAo,
  _pDo,
  _pNo,
  _Po,
  _pS,
  _pVI,
  _recu,
  _sAD,
  _tag,
  _tar,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePolicyRequest = struct(n0, _CPRre, 0, [_pNo, _pDo, _tag], [[0, 1], 0, () => TagList]);
export var CreatePolicyResponse = struct(n0, _CPRrea, 0, [_pNo, _pAo, _pDo, _pVI], [0, 0, 0, 0]);
export var CreatePolicyVersionRequest = struct(
  n0,
  _CPVRre,
  0,
  [_pNo, _pDo, _sAD],
  [
    [0, 1],
    0,
    [
      2,
      {
        [_hQ]: _sAD,
      },
    ],
  ]
);
export var CreatePolicyVersionResponse = struct(n0, _CPVRrea, 0, [_pAo, _pDo, _pVI, _iDV], [0, 0, 0, 2]);
export var GetPolicyRequest = struct(n0, _GPReto, 0, [_pNo], [[0, 1]]);
export var GetPolicyResponse = struct(n0, _GPRetol, 0, [_pNo, _pAo, _pDo, _dVI, _cD, _lMD, _gI], [0, 0, 0, 0, 4, 4, 0]);
export var GetPolicyVersionRequest = struct(
  n0,
  _GPVRet,
  0,
  [_pNo, _pVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPolicyVersionResponse = struct(
  n0,
  _GPVReto,
  0,
  [_pAo, _pNo, _pDo, _pVI, _iDV, _cD, _lMD, _gI],
  [0, 0, 0, 0, 2, 4, 4, 0]
);
export var ListAttachedPoliciesRequest = struct(
  n0,
  _LAPR,
  0,
  [_tar, _recu, _ma, _pS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _recu,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
  ]
);
export var ListAttachedPoliciesResponse = struct(n0, _LAPRi, 0, [_p, _nM], [() => Policies, 0]);
export var ListPoliciesRequest = struct(
  n0,
  _LPRis,
  0,
  [_ma, _pS, _aO],
  [
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListPoliciesResponse = struct(n0, _LPRist, 0, [_p, _nM], [() => Policies, 0]);
export var MalformedPolicyException = error(
  n0,
  _MPE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __MalformedPolicyException
);
export var Policy = struct(n0, _P, 0, [_pNo, _pAo], [0, 0]);
export var Policies = list(n0, _Po, 0, () => Policy);
export var CreatePolicy = op(
  n0,
  _CPre,
  {
    [_h]: ["POST", "/policies/{policyName}", 200],
  },
  () => CreatePolicyRequest,
  () => CreatePolicyResponse
);
export var CreatePolicyVersion = op(
  n0,
  _CPVre,
  {
    [_h]: ["POST", "/policies/{policyName}/version", 200],
  },
  () => CreatePolicyVersionRequest,
  () => CreatePolicyVersionResponse
);
export var GetPolicy = op(
  n0,
  _GPet,
  {
    [_h]: ["GET", "/policies/{policyName}", 200],
  },
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
export var GetPolicyVersion = op(
  n0,
  _GPVe,
  {
    [_h]: ["GET", "/policies/{policyName}/version/{policyVersionId}", 200],
  },
  () => GetPolicyVersionRequest,
  () => GetPolicyVersionResponse
);
export var ListAttachedPolicies = op(
  n0,
  _LAP,
  {
    [_h]: ["POST", "/attached-policies/{target}", 200],
  },
  () => ListAttachedPoliciesRequest,
  () => ListAttachedPoliciesResponse
);
export var ListPolicies = op(
  n0,
  _LPi,
  {
    [_h]: ["GET", "/policies", 200],
  },
  () => ListPoliciesRequest,
  () => ListPoliciesResponse
);
