// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PolicyEvaluationException as __PolicyEvaluationException } from "../models/index";
import {
  _ABO,
  _ABPB,
  _AN,
  _aQE,
  _CA,
  _CE,
  _CELT,
  _CEo,
  _CKN,
  _CKNo,
  _CKT,
  _CKV,
  _Col,
  _e,
  _EAN,
  _EDD,
  _EDv,
  _EPn,
  _ER,
  _ERD,
  _ERLT,
  _ERN,
  _ERv,
  _GCKFCP,
  _GCKFCPR,
  _GCKFPP,
  _GCKFPPR,
  _GCKFPR,
  _hE,
  _IT,
  _L,
  _m,
  _Ma,
  _MCV,
  _MI,
  _MS,
  _ODD,
  _PBDD,
  _PBPIL,
  _PEE,
  _PIL,
  _Pos,
  _PSA,
  _RA,
  _RHO,
  _RO,
  _RP,
  _RSR,
  _RSRe,
  _RSRLT,
  _s,
  _SCP,
  _SCPR,
  _SLT,
  _SPI,
  _SPP,
  _SPPR,
  _SPR,
  _SPT,
  _SPt,
  _Sta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContextEntry = struct(n0, _CE, 0, [_CKN, _CKV, _CKT], [0, 64 | 0, 0]);
export var EvaluationResult = struct(
  n0,
  _ER,
  0,
  [_EAN, _ERN, _EDv, _MS, _MCV, _ODD, _PBDD, _EDD, _RSR],
  [
    0,
    0,
    0,
    () => StatementListType,
    64 | 0,
    () => OrganizationsDecisionDetail,
    () => PermissionsBoundaryDecisionDetail,
    128 | 0,
    () => ResourceSpecificResultListType,
  ]
);
export var GetContextKeysForCustomPolicyRequest = struct(n0, _GCKFCPR, 0, [_PIL], [64 | 0]);
export var GetContextKeysForPolicyResponse = struct(n0, _GCKFPR, 0, [_CKNo], [64 | 0]);
export var GetContextKeysForPrincipalPolicyRequest = struct(n0, _GCKFPPR, 0, [_PSA, _PIL], [0, 64 | 0]);
export var OrganizationsDecisionDetail = struct(n0, _ODD, 0, [_ABO], [2]);
export var PermissionsBoundaryDecisionDetail = struct(n0, _PBDD, 0, [_ABPB], [2]);
export var PolicyEvaluationException = error(
  n0,
  _PEE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`PolicyEvaluation`, 500],
  },
  [_m],
  [0],

  __PolicyEvaluationException
);
export var Position = struct(n0, _Pos, 0, [_L, _Col], [1, 1]);
export var ResourceSpecificResult = struct(
  n0,
  _RSRe,
  0,
  [_ERN, _ERD, _MS, _MCV, _EDD, _PBDD],
  [0, 0, () => StatementListType, 64 | 0, 128 | 0, () => PermissionsBoundaryDecisionDetail]
);
export var SimulateCustomPolicyRequest = struct(
  n0,
  _SCPR,
  0,
  [_PIL, _PBPIL, _AN, _RA, _RP, _RO, _CA, _CEo, _RHO, _MI, _Ma],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => ContextEntryListType, 0, 1, 0]
);
export var SimulatePolicyResponse = struct(n0, _SPR, 0, [_ERv, _IT, _Ma], [() => EvaluationResultsListType, 2, 0]);
export var SimulatePrincipalPolicyRequest = struct(
  n0,
  _SPPR,
  0,
  [_PSA, _PIL, _PBPIL, _AN, _RA, _RP, _RO, _CA, _CEo, _RHO, _MI, _Ma],
  [0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 0, () => ContextEntryListType, 0, 1, 0]
);
export var Statement = struct(n0, _Sta, 0, [_SPI, _SPT, _SPt, _EPn], [0, 0, () => Position, () => Position]);
export var ActionNameListType = 64 | 0;

export var ContextEntryListType = list(n0, _CELT, 0, () => ContextEntry);
export var ContextKeyNamesResultListType = 64 | 0;

export var ContextKeyValueListType = 64 | 0;

export var EvaluationResultsListType = list(n0, _ERLT, 0, () => EvaluationResult);
export var ResourceNameListType = 64 | 0;

export var ResourceSpecificResultListType = list(n0, _RSRLT, 0, () => ResourceSpecificResult);
export var SimulationPolicyListType = 64 | 0;

export var StatementListType = list(n0, _SLT, 0, () => Statement);
export var EvalDecisionDetailsType = 128 | 0;

export var GetContextKeysForCustomPolicy = op(
  n0,
  _GCKFCP,
  0,
  () => GetContextKeysForCustomPolicyRequest,
  () => GetContextKeysForPolicyResponse
);
export var GetContextKeysForPrincipalPolicy = op(
  n0,
  _GCKFPP,
  0,
  () => GetContextKeysForPrincipalPolicyRequest,
  () => GetContextKeysForPolicyResponse
);
export var SimulateCustomPolicy = op(
  n0,
  _SCP,
  0,
  () => SimulateCustomPolicyRequest,
  () => SimulatePolicyResponse
);
export var SimulatePrincipalPolicy = op(
  n0,
  _SPP,
  0,
  () => SimulatePrincipalPolicyRequest,
  () => SimulatePolicyResponse
);
