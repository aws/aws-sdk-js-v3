// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIc,
  _AP,
  _aP,
  _APc,
  _aPcc,
  _DAP,
  _DAPe,
  _DAPR,
  _DAPRe,
  _DAPRes,
  _DIPe,
  _DIPRes,
  _DIPResc,
  _DRP,
  _DRPR,
  _eRI,
  _IP,
  _iP,
  _IPn,
  _iPnd,
  _lGI,
  _lGIo,
  _lUT,
  _lUTa,
  _nT,
  _PAP,
  _PAPR,
  _PAPRu,
  _pD,
  _PIP,
  _PIPR,
  _PIPRu,
  _pN,
  _PRP,
  _PRPR,
  _PRPRu,
  _pSo,
  _pT,
  _rA,
  _rIev,
  _RP,
  _rPe,
  _s,
  _sC,
  _so,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountPolicy = struct(n0, _AP, 0, [_pN, _pD, _lUT, _pT, _s, _sC, _aI], [0, 0, 1, 0, 0, 0, 0]);
export var DeleteAccountPolicyRequest = struct(n0, _DAPR, 0, [_pN, _pT], [0, 0]);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_pN, _rA, _eRI], [0, 0, 0]);
export var DescribeAccountPoliciesRequest = struct(n0, _DAPRe, 0, [_pT, _pN, _aIc, _nT], [0, 0, 64 | 0, 0]);
export var DescribeAccountPoliciesResponse = struct(n0, _DAPRes, 0, [_aP, _nT], [() => AccountPolicies, 0]);
export var DescribeIndexPoliciesRequest = struct(n0, _DIPRes, 0, [_lGIo, _nT], [64 | 0, 0]);
export var DescribeIndexPoliciesResponse = struct(n0, _DIPResc, 0, [_iP, _nT], [() => IndexPolicies, 0]);
export var IndexPolicy = struct(n0, _IP, 0, [_lGI, _lUTa, _pD, _pN, _so], [0, 1, 0, 0, 0]);
export var PutAccountPolicyRequest = struct(n0, _PAPR, 0, [_pN, _pD, _pT, _s, _sC], [0, 0, 0, 0, 0]);
export var PutAccountPolicyResponse = struct(n0, _PAPRu, 0, [_aPcc], [() => AccountPolicy]);
export var PutIndexPolicyRequest = struct(n0, _PIPR, 0, [_lGI, _pD], [0, 0]);
export var PutIndexPolicyResponse = struct(n0, _PIPRu, 0, [_iPnd], [() => IndexPolicy]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_pN, _pD, _rA, _eRI], [0, 0, 0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_rPe, _rIev], [() => ResourcePolicy, 0]);
export var ResourcePolicy = struct(n0, _RP, 0, [_pN, _pD, _lUT, _pSo, _rA, _rIev], [0, 0, 1, 0, 0, 0]);
export var AccountPolicies = list(n0, _APc, 0, () => AccountPolicy);
export var DescribeIndexPoliciesLogGroupIdentifiers = 64 | 0;

export var IndexPolicies = list(n0, _IPn, 0, () => IndexPolicy);
export var DeleteAccountPolicy = op(
  n0,
  _DAP,
  0,
  () => DeleteAccountPolicyRequest,
  () => Unit
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => Unit
);
export var DescribeAccountPolicies = op(
  n0,
  _DAPe,
  0,
  () => DescribeAccountPoliciesRequest,
  () => DescribeAccountPoliciesResponse
);
export var DescribeIndexPolicies = op(
  n0,
  _DIPe,
  0,
  () => DescribeIndexPoliciesRequest,
  () => DescribeIndexPoliciesResponse
);
export var PutAccountPolicy = op(
  n0,
  _PAP,
  0,
  () => PutAccountPolicyRequest,
  () => PutAccountPolicyResponse
);
export var PutIndexPolicy = op(
  n0,
  _PIP,
  0,
  () => PutIndexPolicyRequest,
  () => PutIndexPolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
