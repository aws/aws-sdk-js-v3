// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  MalformedResourcePolicyDocumentException as __MalformedResourcePolicyDocumentException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourcePolicyConflictException as __ResourcePolicyConflictException,
  ResourcePolicyInvalidParameterException as __ResourcePolicyInvalidParameterException,
  ResourcePolicyNotFoundException as __ResourcePolicyNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _AKI,
  _AKST,
  _aQE,
  _ARI,
  _ARS,
  _c,
  _Cr,
  _DRP,
  _DRPR,
  _DRPRe,
  _e,
  _ETxp,
  _GAT,
  _GATR,
  _GATRe,
  _GRP,
  _GRPR,
  _GRPRE,
  _GRPRe,
  _GRPREe,
  _M,
  _MR,
  _MRPDE,
  _NT,
  _PH,
  _PI,
  _PNa,
  _Po,
  _Pol,
  _QC,
  _RA,
  _Rea,
  _RI,
  _RNFE,
  _RPCE,
  _RPIPE,
  _RPNFE,
  _RT,
  _SAK,
  _SAR,
  _SARR,
  _SARRt,
  _SCe,
  _SQEE,
  _STe,
  _STT,
  _T,
  _Ta,
  _TE,
  n0,
  TagList,
  Targets,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessKeySecretType = sim(n0, _AKST, 0, 8);
export var SessionTokenType = sim(n0, _STT, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var Credentials = struct(
  n0,
  _Cr,
  0,
  [_AKI, _SAK, _STe, _ETxp],
  [0, [() => AccessKeySecretType, 0], [() => SessionTokenType, 0], 4]
);
export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA, _PI, _PH], [0, 0, 0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var GetAccessTokenRequest = struct(n0, _GATR, 0, [_ARI], [0]);
export var GetAccessTokenResponse = struct(n0, _GATRe, 0, [_Cr, _ARS], [[() => Credentials, 0], 0]);
export var GetResourcePoliciesRequest = struct(n0, _GRPR, 0, [_RA, _NT, _MR], [0, 0, 1]);
export var GetResourcePoliciesResponse = struct(
  n0,
  _GRPRe,
  0,
  [_NT, _Po],
  [0, () => GetResourcePoliciesResponseEntries]
);
export var GetResourcePoliciesResponseEntry = struct(n0, _GRPRE, 0, [_PI, _PH, _Pol], [0, 0, 0]);
export var MalformedResourcePolicyDocumentException = error(
  n0,
  _MRPDE,
  {
    [_e]: _c,
    [_aQE]: [`MalformedResourcePolicyDocumentException`, 400],
  },
  [_M],
  [0],

  __MalformedResourcePolicyDocumentException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ResourcePolicyConflictException = error(
  n0,
  _RPCE,
  {
    [_e]: _c,
    [_aQE]: [`ResourcePolicyConflictException`, 400],
  },
  [_M],
  [0],

  __ResourcePolicyConflictException
);
export var ResourcePolicyInvalidParameterException = error(
  n0,
  _RPIPE,
  {
    [_e]: _c,
    [_aQE]: [`ResourcePolicyInvalidParameterException`, 400],
  },
  [_PNa, _M],
  [64 | 0, 0],

  __ResourcePolicyInvalidParameterException
);
export var ResourcePolicyNotFoundException = error(
  n0,
  _RPNFE,
  {
    [_e]: _c,
    [_aQE]: [`ResourcePolicyNotFoundException`, 404],
  },
  [_M],
  [0],

  __ResourcePolicyNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
  },
  [_M, _RI, _RT, _QC, _SCe],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartAccessRequestRequest = struct(n0, _SARR, 0, [_Rea, _Ta, _T], [0, () => Targets, () => TagList]);
export var StartAccessRequestResponse = struct(n0, _SARRt, 0, [_ARI], [0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_M, _QC, _SCe],
  [0, 0, 0],

  __ThrottlingException
);
export var GetResourcePoliciesResponseEntries = list(n0, _GRPREe, 0, () => GetResourcePoliciesResponseEntry);
export var ResourcePolicyParameterNamesList = 64 | 0;

export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetAccessToken = op(
  n0,
  _GAT,
  0,
  () => GetAccessTokenRequest,
  () => GetAccessTokenResponse
);
export var GetResourcePolicies = op(
  n0,
  _GRP,
  0,
  () => GetResourcePoliciesRequest,
  () => GetResourcePoliciesResponse
);
export var StartAccessRequest = op(
  n0,
  _SAR,
  0,
  () => StartAccessRequestRequest,
  () => StartAccessRequestResponse
);
