// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  HierarchyLevelLimitExceededException as __HierarchyLevelLimitExceededException,
  HierarchyTypeMismatchException as __HierarchyTypeMismatchException,
  IncompatiblePolicyException as __IncompatiblePolicyException,
  InvalidAllowedPatternException as __InvalidAllowedPatternException,
  InvalidKeyId as __InvalidKeyId,
  InvalidPolicyAttributeException as __InvalidPolicyAttributeException,
  InvalidPolicyTypeException as __InvalidPolicyTypeException,
  ParameterAlreadyExists as __ParameterAlreadyExists,
  ParameterLimitExceeded as __ParameterLimitExceeded,
  ParameterMaxVersionLimitExceeded as __ParameterMaxVersionLimitExceeded,
  ParameterNotFound as __ParameterNotFound,
  ParameterPatternMismatchException as __ParameterPatternMismatchException,
  ParameterVersionLabelLimitExceeded as __ParameterVersionLabelLimitExceeded,
  ParameterVersionNotFound as __ParameterVersionNotFound,
  PoliciesLimitExceededException as __PoliciesLimitExceededException,
  UnsupportedParameterType as __UnsupportedParameterType,
} from "../models/index";
import {
  _APl,
  _aQE,
  _ARN,
  _c,
  _D,
  _DP,
  _DPe,
  _DPel,
  _DPR,
  _DPRe,
  _DPRel,
  _DPRele,
  _DTa,
  _e,
  _GP,
  _GPe,
  _GPH,
  _GPHR,
  _GPHRe,
  _GPR,
  _GPRe,
  _GPRet,
  _GPReta,
  _HLLEE,
  _HTME,
  _IAPE,
  _IKI,
  _IL,
  _IP,
  _IPAE,
  _IPE,
  _IPTE,
  _KI,
  _L,
  _LMD,
  _LMU,
  _LPV,
  _LPVR,
  _LPVRa,
  _m,
  _MR,
  _N,
  _Na,
  _NT,
  _Ov,
  _P,
  _PAE,
  _Par,
  _PHa,
  _PHL,
  _PIP,
  _PL,
  _PLE,
  _PLEE,
  _PMVLE,
  _PNF,
  _Po,
  _PP,
  _PPLa,
  _PPME,
  _PPR,
  _PPRu,
  _PSo,
  _PSPV,
  _PTo,
  _PTol,
  _PVa,
  _PVLLE,
  _PVNF,
  _RLe,
  _Sel,
  _SRo,
  _T,
  _Tie,
  _Ty,
  _UPT,
  _UPV,
  _UPVR,
  _UPVRn,
  _V,
  _Ve,
  _WD,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PSParameterValue = sim(n0, _PSPV, 0, 8);
export var DeleteParameterRequest = struct(n0, _DPR, 0, [_N], [0]);
export var DeleteParameterResult = struct(n0, _DPRe, 0, [], []);
export var DeleteParametersRequest = struct(n0, _DPRel, 0, [_Na], [64 | 0]);
export var DeleteParametersResult = struct(n0, _DPRele, 0, [_DP, _IP], [64 | 0, 64 | 0]);
export var GetParameterHistoryRequest = struct(n0, _GPHR, 0, [_N, _WD, _MR, _NT], [0, 2, 1, 0]);
export var GetParameterHistoryResult = struct(n0, _GPHRe, 0, [_P, _NT], [[() => ParameterHistoryList, 0], 0]);
export var GetParameterRequest = struct(n0, _GPR, 0, [_N, _WD], [0, 2]);
export var GetParameterResult = struct(n0, _GPRe, 0, [_Par], [[() => Parameter, 0]]);
export var GetParametersRequest = struct(n0, _GPRet, 0, [_Na, _WD], [64 | 0, 2]);
export var GetParametersResult = struct(n0, _GPReta, 0, [_P, _IP], [[() => ParameterList, 0], 64 | 0]);
export var HierarchyLevelLimitExceededException = error(
  n0,
  _HLLEE,
  {
    [_e]: _c,
    [_aQE]: [`HierarchyLevelLimitExceededException`, 400],
  },
  [_m],
  [0],

  __HierarchyLevelLimitExceededException
);
export var HierarchyTypeMismatchException = error(
  n0,
  _HTME,
  {
    [_e]: _c,
    [_aQE]: [`HierarchyTypeMismatchException`, 400],
  },
  [_m],
  [0],

  __HierarchyTypeMismatchException
);
export var IncompatiblePolicyException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_aQE]: [`IncompatiblePolicyException`, 400],
  },
  [_m],
  [0],

  __IncompatiblePolicyException
);
export var InvalidAllowedPatternException = error(
  n0,
  _IAPE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAllowedPatternException`, 400],
  },
  [_m],
  [0],

  __InvalidAllowedPatternException
);
export var InvalidKeyId = error(
  n0,
  _IKI,
  {
    [_e]: _c,
    [_aQE]: [`InvalidKeyId`, 400],
  },
  [_m],
  [0],

  __InvalidKeyId
);
export var InvalidPolicyAttributeException = error(
  n0,
  _IPAE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidPolicyAttributeException`, 400],
  },
  [_m],
  [0],

  __InvalidPolicyAttributeException
);
export var InvalidPolicyTypeException = error(
  n0,
  _IPTE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidPolicyTypeException`, 400],
  },
  [_m],
  [0],

  __InvalidPolicyTypeException
);
export var LabelParameterVersionRequest = struct(n0, _LPVR, 0, [_N, _PVa, _L], [0, 1, 64 | 0]);
export var LabelParameterVersionResult = struct(n0, _LPVRa, 0, [_IL, _PVa], [64 | 0, 1]);
export var Parameter = struct(
  n0,
  _Par,
  0,
  [_N, _Ty, _V, _Ve, _Sel, _SRo, _LMD, _ARN, _DTa],
  [0, 0, [() => PSParameterValue, 0], 1, 0, 0, 4, 0, 0]
);
export var ParameterAlreadyExists = error(
  n0,
  _PAE,
  {
    [_e]: _c,
    [_aQE]: [`ParameterAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ParameterAlreadyExists
);
export var ParameterHistory = struct(
  n0,
  _PHa,
  0,
  [_N, _Ty, _KI, _LMD, _LMU, _D, _V, _APl, _Ve, _L, _Tie, _Po, _DTa],
  [0, 0, 0, 4, 0, 0, [() => PSParameterValue, 0], 0, 1, 64 | 0, 0, () => ParameterPolicyList, 0]
);
export var ParameterInlinePolicy = struct(n0, _PIP, 0, [_PTo, _PTol, _PSo], [0, 0, 0]);
export var ParameterLimitExceeded = error(
  n0,
  _PLE,
  {
    [_e]: _c,
    [_aQE]: [`ParameterLimitExceeded`, 429],
  },
  [_m],
  [0],

  __ParameterLimitExceeded
);
export var ParameterMaxVersionLimitExceeded = error(
  n0,
  _PMVLE,
  {
    [_e]: _c,
    [_aQE]: [`ParameterMaxVersionLimitExceeded`, 400],
  },
  [_m],
  [0],

  __ParameterMaxVersionLimitExceeded
);
export var ParameterNotFound = error(
  n0,
  _PNF,
  {
    [_e]: _c,
    [_aQE]: [`ParameterNotFound`, 404],
  },
  [_m],
  [0],

  __ParameterNotFound
);
export var ParameterPatternMismatchException = error(
  n0,
  _PPME,
  {
    [_e]: _c,
    [_aQE]: [`ParameterPatternMismatchException`, 400],
  },
  [_m],
  [0],

  __ParameterPatternMismatchException
);
export var ParameterVersionLabelLimitExceeded = error(
  n0,
  _PVLLE,
  {
    [_e]: _c,
    [_aQE]: [`ParameterVersionLabelLimitExceeded`, 400],
  },
  [_m],
  [0],

  __ParameterVersionLabelLimitExceeded
);
export var ParameterVersionNotFound = error(
  n0,
  _PVNF,
  {
    [_e]: _c,
    [_aQE]: [`ParameterVersionNotFound`, 400],
  },
  [_m],
  [0],

  __ParameterVersionNotFound
);
export var PoliciesLimitExceededException = error(
  n0,
  _PLEE,
  {
    [_e]: _c,
    [_aQE]: [`PoliciesLimitExceededException`, 400],
  },
  [_m],
  [0],

  __PoliciesLimitExceededException
);
export var PutParameterRequest = struct(
  n0,
  _PPR,
  0,
  [_N, _D, _V, _Ty, _KI, _Ov, _APl, _T, _Tie, _Po, _DTa],
  [0, 0, [() => PSParameterValue, 0], 0, 0, 2, 0, () => TagList, 0, 0, 0]
);
export var PutParameterResult = struct(n0, _PPRu, 0, [_Ve, _Tie], [1, 0]);
export var UnlabelParameterVersionRequest = struct(n0, _UPVR, 0, [_N, _PVa, _L], [0, 1, 64 | 0]);
export var UnlabelParameterVersionResult = struct(n0, _UPVRn, 0, [_RLe, _IL], [64 | 0, 64 | 0]);
export var UnsupportedParameterType = error(
  n0,
  _UPT,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedParameterType`, 400],
  },
  [_m],
  [0],

  __UnsupportedParameterType
);
export var ParameterHistoryList = list(n0, _PHL, 0, [() => ParameterHistory, 0]);
export var ParameterLabelList = 64 | 0;

export var ParameterList = list(n0, _PL, 0, [() => Parameter, 0]);
export var ParameterNameList = 64 | 0;

export var ParameterPolicyList = list(n0, _PPLa, 0, () => ParameterInlinePolicy);
export var DeleteParameter = op(
  n0,
  _DPe,
  0,
  () => DeleteParameterRequest,
  () => DeleteParameterResult
);
export var DeleteParameters = op(
  n0,
  _DPel,
  0,
  () => DeleteParametersRequest,
  () => DeleteParametersResult
);
export var GetParameter = op(
  n0,
  _GP,
  0,
  () => GetParameterRequest,
  () => GetParameterResult
);
export var GetParameterHistory = op(
  n0,
  _GPH,
  0,
  () => GetParameterHistoryRequest,
  () => GetParameterHistoryResult
);
export var GetParameters = op(
  n0,
  _GPe,
  0,
  () => GetParametersRequest,
  () => GetParametersResult
);
export var LabelParameterVersion = op(
  n0,
  _LPV,
  0,
  () => LabelParameterVersionRequest,
  () => LabelParameterVersionResult
);
export var PutParameter = op(
  n0,
  _PP,
  0,
  () => PutParameterRequest,
  () => PutParameterResult
);
export var UnlabelParameterVersion = op(
  n0,
  _UPV,
  0,
  () => UnlabelParameterVersionRequest,
  () => UnlabelParameterVersionResult
);
