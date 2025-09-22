// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ac,
  _aI,
  _aIc,
  _AL,
  _AS,
  _ASL,
  _BGAS,
  _BGASR,
  _BGASRa,
  _BGMEDIS,
  _BGMEDISR,
  _BGMEDISRa,
  _cR,
  _cT,
  _Di,
  _DR,
  _DRi,
  _eC,
  _ec,
  _ecr,
  _eM,
  _En,
  _ER,
  _ERn,
  _eSS,
  _FA,
  _fAa,
  _fAI,
  _FAL,
  _FMAEDISS,
  _FMAEDISSL,
  _ht,
  _l,
  _lC,
  _MAEDISS,
  _MAEDISSL,
  _RS,
  _rS,
  _RSe,
  _rSe,
  _rTe,
  _S,
  _s,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Account = struct(n0, _A, 0, [_aI, _s, _rS], [0, 0, () => ResourceStatus]);
export var AccountState = struct(n0, _AS, 0, [_aI, _st, _rSe], [0, () => State, () => ResourceState]);
export var BatchGetAccountStatusRequest = struct(n0, _BGASR, 0, [_aIc], [64 | 0]);
export var BatchGetAccountStatusResponse = struct(
  n0,
  _BGASRa,
  0,
  [_ac, _fAa],
  [() => AccountStateList, () => FailedAccountList]
);
export var BatchGetMemberEc2DeepInspectionStatusRequest = struct(n0, _BGMEDISR, 0, [_aIc], [64 | 0]);
export var BatchGetMemberEc2DeepInspectionStatusResponse = struct(
  n0,
  _BGMEDISRa,
  0,
  [_aIc, _fAI],
  [() => MemberAccountEc2DeepInspectionStatusStateList, () => FailedMemberAccountEc2DeepInspectionStatusStateList]
);
export var DisableRequest = struct(n0, _DR, 0, [_aIc, _rTe], [64 | 0, 64 | 0]);
export var DisableResponse = struct(n0, _DRi, 0, [_ac, _fAa], [() => AccountList, () => FailedAccountList]);
export var EnableRequest = struct(n0, _ER, 0, [_aIc, _rTe, _cT], [64 | 0, 64 | 0, [0, 4]]);
export var EnableResponse = struct(n0, _ERn, 0, [_ac, _fAa], [() => AccountList, () => FailedAccountList]);
export var FailedAccount = struct(n0, _FA, 0, [_aI, _s, _rS, _eC, _eM], [0, 0, () => ResourceStatus, 0, 0]);
export var FailedMemberAccountEc2DeepInspectionStatusState = struct(n0, _FMAEDISS, 0, [_aI, _eSS, _eM], [0, 0, 0]);
export var MemberAccountEc2DeepInspectionStatusState = struct(n0, _MAEDISS, 0, [_aI, _s, _eM], [0, 0, 0]);
export var ResourceState = struct(
  n0,
  _RS,
  0,
  [_ec, _ecr, _l, _lC, _cR],
  [() => State, () => State, () => State, () => State, () => State]
);
export var ResourceStatus = struct(n0, _RSe, 0, [_ec, _ecr, _l, _lC, _cR], [0, 0, 0, 0, 0]);
export var State = struct(n0, _S, 0, [_s, _eC, _eM], [0, 0, 0]);
export var AccountIdSet = 64 | 0;

export var AccountList = list(n0, _AL, 0, () => Account);
export var AccountStateList = list(n0, _ASL, 0, () => AccountState);
export var DisableResourceTypeList = 64 | 0;

export var EnableResourceTypeList = 64 | 0;

export var FailedAccountList = list(n0, _FAL, 0, () => FailedAccount);
export var FailedMemberAccountEc2DeepInspectionStatusStateList = list(
  n0,
  _FMAEDISSL,
  0,
  () => FailedMemberAccountEc2DeepInspectionStatusState
);
export var MemberAccountEc2DeepInspectionStatusStateList = list(
  n0,
  _MAEDISSL,
  0,
  () => MemberAccountEc2DeepInspectionStatusState
);
export var BatchGetAccountStatus = op(
  n0,
  _BGAS,
  {
    [_ht]: ["POST", "/status/batch/get", 200],
  },
  () => BatchGetAccountStatusRequest,
  () => BatchGetAccountStatusResponse
);
export var BatchGetMemberEc2DeepInspectionStatus = op(
  n0,
  _BGMEDIS,
  {
    [_ht]: ["POST", "/ec2deepinspectionstatus/member/batch/get", 200],
  },
  () => BatchGetMemberEc2DeepInspectionStatusRequest,
  () => BatchGetMemberEc2DeepInspectionStatusResponse
);
export var Disable = op(
  n0,
  _Di,
  {
    [_ht]: ["POST", "/disable", 200],
  },
  () => DisableRequest,
  () => DisableResponse
);
export var Enable = op(
  n0,
  _En,
  {
    [_ht]: ["POST", "/enable", 200],
  },
  () => EnableRequest,
  () => EnableResponse
);
