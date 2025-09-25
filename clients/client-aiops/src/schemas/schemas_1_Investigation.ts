// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  ForbiddenException as __ForbiddenException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ADE,
  _c,
  _cA,
  _CAC,
  _cAC,
  _CACr,
  _cB,
  _CE,
  _CIG,
  _CIGI,
  _CIGO,
  _CNC,
  _cNC,
  _DIG,
  _DIGP,
  _DIGPO,
  _DIGPR,
  _DIGR,
  _e,
  _EC,
  _eC,
  _FE,
  _GIG,
  _GIGP,
  _GIGPR,
  _GIGPRe,
  _GIGR,
  _GIGRe,
  _h,
  _hE,
  _hQ,
  _i,
  _iCTEHE,
  _IG,
  _iG,
  _iGA,
  _ISE,
  _kKI,
  _LIG,
  _LIGI,
  _LIGM,
  _LIGO,
  _lMA,
  _lMB,
  _LTFR,
  _LTFRO,
  _LTFRR,
  _m,
  _mR,
  _n,
  _nT,
  _p,
  _PIGP,
  _PIGPR,
  _PIGPRu,
  _qC,
  _rA,
  _rAe,
  _rI,
  _rID,
  _RNFE,
  _rT,
  _s,
  _sC,
  _SQEE,
  _sRA,
  _SSWLL,
  _t,
  _TE,
  _tK,
  _tKB,
  _TR,
  _TRR,
  _TRRa,
  _ty,
  _UIG,
  _UIGO,
  _UIGR,
  _UR,
  _URR,
  _URRn,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveStringWithLengthLimits = sim(n0, _SSWLL, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateInvestigationGroupInput = struct(
  n0,
  _CIGI,
  0,
  [_n, _rA, _eC, _rID, _t, _tKB, _cNC, _iCTEHE, _cAC],
  [
    0,
    0,
    () => EncryptionConfiguration,
    1,
    128 | 0,
    64 | 0,
    map(n0, _CNC, 0, 0, 64 | 0),
    2,
    () => CrossAccountConfigurations,
  ]
);
export var CreateInvestigationGroupOutput = struct(n0, _CIGO, 0, [_a], [0]);
export var CrossAccountConfiguration = struct(n0, _CAC, 0, [_sRA], [0]);
export var DeleteInvestigationGroupPolicyOutput = struct(n0, _DIGPO, 0, [], []);
export var DeleteInvestigationGroupPolicyRequest = struct(n0, _DIGPR, 0, [_i], [[0, 1]]);
export var DeleteInvestigationGroupRequest = struct(n0, _DIGR, 0, [_i], [[0, 1]]);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_ty, _kKI], [0, 0]);
export var ForbiddenException = error(
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __ForbiddenException
);
export var GetInvestigationGroupPolicyRequest = struct(n0, _GIGPR, 0, [_i], [[0, 1]]);
export var GetInvestigationGroupPolicyResponse = struct(n0, _GIGPRe, 0, [_iGA, _p], [0, 0]);
export var GetInvestigationGroupRequest = struct(n0, _GIGR, 0, [_i], [[0, 1]]);
export var GetInvestigationGroupResponse = struct(
  n0,
  _GIGRe,
  0,
  [_cB, _cA, _lMB, _lMA, _n, _a, _rA, _eC, _rID, _cNC, _tKB, _iCTEHE, _cAC],
  [
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    () => EncryptionConfiguration,
    1,
    map(n0, _CNC, 0, 0, 64 | 0),
    64 | 0,
    2,
    () => CrossAccountConfigurations,
  ]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListInvestigationGroupsInput = struct(
  n0,
  _LIGI,
  0,
  [_nT, _mR],
  [
    [
      () => SensitiveStringWithLengthLimits,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListInvestigationGroupsModel = struct(n0, _LIGM, 0, [_a, _n], [0, 0]);
export var ListInvestigationGroupsOutput = struct(
  n0,
  _LIGO,
  0,
  [_nT, _iG],
  [[() => SensitiveStringWithLengthLimits, 0], () => InvestigationGroups]
);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var PutInvestigationGroupPolicyRequest = struct(n0, _PIGPR, 0, [_i, _p], [[0, 1], 0]);
export var PutInvestigationGroupPolicyResponse = struct(n0, _PIGPRu, 0, [_iGA], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateInvestigationGroupOutput = struct(n0, _UIGO, 0, [], []);
export var UpdateInvestigationGroupRequest = struct(
  n0,
  _UIGR,
  0,
  [_i, _rA, _eC, _tKB, _cNC, _iCTEHE, _cAC],
  [[0, 1], 0, () => EncryptionConfiguration, 64 | 0, map(n0, _CNC, 0, 0, 64 | 0), 2, () => CrossAccountConfigurations]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var ChatConfigurationArns = 64 | 0;

export var CrossAccountConfigurations = list(n0, _CACr, 0, () => CrossAccountConfiguration);
export var InvestigationGroups = list(n0, _IG, 0, () => ListInvestigationGroupsModel);
export var TagKeyBoundaries = 64 | 0;

export var TagKeys = 64 | 0;

export var ChatbotNotificationChannel = map(n0, _CNC, 0, 0, 64 | 0);
export var Tags = 128 | 0;

export var CreateInvestigationGroup = op(
  n0,
  _CIG,
  {
    [_h]: ["POST", "/investigationGroups", 201],
  },
  () => CreateInvestigationGroupInput,
  () => CreateInvestigationGroupOutput
);
export var DeleteInvestigationGroup = op(
  n0,
  _DIG,
  {
    [_h]: ["DELETE", "/investigationGroups/{identifier}", 200],
  },
  () => DeleteInvestigationGroupRequest,
  () => Unit
);
export var DeleteInvestigationGroupPolicy = op(
  n0,
  _DIGP,
  {
    [_h]: ["DELETE", "/investigationGroups/{identifier}/policy", 200],
  },
  () => DeleteInvestigationGroupPolicyRequest,
  () => DeleteInvestigationGroupPolicyOutput
);
export var GetInvestigationGroup = op(
  n0,
  _GIG,
  {
    [_h]: ["GET", "/investigationGroups/{identifier}", 200],
  },
  () => GetInvestigationGroupRequest,
  () => GetInvestigationGroupResponse
);
export var GetInvestigationGroupPolicy = op(
  n0,
  _GIGP,
  {
    [_h]: ["GET", "/investigationGroups/{identifier}/policy", 200],
  },
  () => GetInvestigationGroupPolicyRequest,
  () => GetInvestigationGroupPolicyResponse
);
export var ListInvestigationGroups = op(
  n0,
  _LIG,
  {
    [_h]: ["GET", "/investigationGroups", 200],
  },
  () => ListInvestigationGroupsInput,
  () => ListInvestigationGroupsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceOutput
);
export var PutInvestigationGroupPolicy = op(
  n0,
  _PIGP,
  {
    [_h]: ["POST", "/investigationGroups/{identifier}/policy", 200],
  },
  () => PutInvestigationGroupPolicyRequest,
  () => PutInvestigationGroupPolicyResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateInvestigationGroup = op(
  n0,
  _UIG,
  {
    [_h]: ["PATCH", "/investigationGroups/{identifier}", 200],
  },
  () => UpdateInvestigationGroupRequest,
  () => UpdateInvestigationGroupOutput
);
