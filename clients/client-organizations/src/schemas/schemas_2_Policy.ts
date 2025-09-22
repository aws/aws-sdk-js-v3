// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AlreadyInOrganizationException as __AlreadyInOrganizationException,
  DuplicatePolicyException as __DuplicatePolicyException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  PolicyTypeAlreadyEnabledException as __PolicyTypeAlreadyEnabledException,
  PolicyTypeNotAvailableForOrganizationException as __PolicyTypeNotAvailableForOrganizationException,
  RootNotFoundException as __RootNotFoundException,
} from "../models/index";
import {
  _AIOE,
  _AM,
  _APT,
  _Ar,
  _c,
  _CO,
  _Co,
  _COR,
  _CORr,
  _CPR,
  _CPr,
  _CPRr,
  _D,
  _DOe,
  _DOR,
  _DPE,
  _DPe,
  _DPRe,
  _DPRes,
  _DPT,
  _DPTR,
  _DPTRi,
  _e,
  _EPT,
  _EPTR,
  _EPTRn,
  _F,
  _FS,
  _hE,
  _I,
  _LPFT,
  _LPFTR,
  _LPFTRi,
  _LPi,
  _LPRis,
  _LPRist,
  _LR,
  _LRR,
  _LRRi,
  _M,
  _MAA,
  _MAE,
  _MAI,
  _MPDE,
  _MR,
  _N,
  _NT,
  _O,
  _P,
  _PI,
  _Po,
  _PS,
  _PT,
  _PTAEE,
  _PTNAFOE,
  _PTo,
  _PTSo,
  _RI,
  _RNFE,
  _Ro,
  _Roo,
  _S,
  _T,
  _Ta,
  _TI,
  _UP,
  _UPR,
  _UPRp,
  n0,
  Unit,
} from "./schemas_0";
import { Email } from "./schemas_7_Account";
import { Tags } from "./schemas_9_Create";

/* eslint no-var: 0 */

export var AlreadyInOrganizationException = error(
  n0,
  _AIOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __AlreadyInOrganizationException
);
export var CreateOrganizationRequest = struct(n0, _COR, 0, [_FS], [0]);
export var CreateOrganizationResponse = struct(n0, _CORr, 0, [_O], [[() => Organization, 0]]);
export var CreatePolicyRequest = struct(n0, _CPR, 0, [_Co, _D, _N, _T, _Ta], [0, 0, 0, 0, () => Tags]);
export var CreatePolicyResponse = struct(n0, _CPRr, 0, [_P], [() => Policy]);
export var DescribeOrganizationResponse = struct(n0, _DOR, 0, [_O], [[() => Organization, 0]]);
export var DescribePolicyRequest = struct(n0, _DPRe, 0, [_PI], [0]);
export var DescribePolicyResponse = struct(n0, _DPRes, 0, [_P], [() => Policy]);
export var DisablePolicyTypeRequest = struct(n0, _DPTR, 0, [_RI, _PT], [0, 0]);
export var DisablePolicyTypeResponse = struct(n0, _DPTRi, 0, [_Ro], [() => Root]);
export var DuplicatePolicyException = error(
  n0,
  _DPE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicatePolicyException
);
export var EnablePolicyTypeRequest = struct(n0, _EPTR, 0, [_RI, _PT], [0, 0]);
export var EnablePolicyTypeResponse = struct(n0, _EPTRn, 0, [_Ro], [() => Root]);
export var ListPoliciesForTargetRequest = struct(n0, _LPFTR, 0, [_TI, _F, _NT, _MR], [0, 0, 0, 1]);
export var ListPoliciesForTargetResponse = struct(n0, _LPFTRi, 0, [_Po, _NT], [() => Policies, 0]);
export var ListPoliciesRequest = struct(n0, _LPRis, 0, [_F, _NT, _MR], [0, 0, 1]);
export var ListPoliciesResponse = struct(n0, _LPRist, 0, [_Po, _NT], [() => Policies, 0]);
export var ListRootsRequest = struct(n0, _LRR, 0, [_NT, _MR], [0, 1]);
export var ListRootsResponse = struct(n0, _LRRi, 0, [_Roo, _NT], [() => Roots, 0]);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __MalformedPolicyDocumentException
);
export var Organization = struct(
  n0,
  _O,
  0,
  [_I, _Ar, _FS, _MAA, _MAI, _MAE, _APT],
  [0, 0, 0, 0, 0, [() => Email, 0], () => PolicyTypes]
);
export var Policy = struct(n0, _P, 0, [_PS, _Co], [() => PolicySummary, 0]);
export var PolicySummary = struct(n0, _PS, 0, [_I, _Ar, _N, _D, _T, _AM], [0, 0, 0, 0, 0, 2]);
export var PolicyTypeAlreadyEnabledException = error(
  n0,
  _PTAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PolicyTypeAlreadyEnabledException
);
export var PolicyTypeNotAvailableForOrganizationException = error(
  n0,
  _PTNAFOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PolicyTypeNotAvailableForOrganizationException
);
export var PolicyTypeSummary = struct(n0, _PTSo, 0, [_T, _S], [0, 0]);
export var Root = struct(n0, _Ro, 0, [_I, _Ar, _N, _PTo], [0, 0, 0, () => PolicyTypes]);
export var RootNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __RootNotFoundException
);
export var UpdatePolicyRequest = struct(n0, _UPR, 0, [_PI, _N, _D, _Co], [0, 0, 0, 0]);
export var UpdatePolicyResponse = struct(n0, _UPRp, 0, [_P], [() => Policy]);
export var Policies = list(n0, _Po, 0, () => PolicySummary);
export var PolicyTypes = list(n0, _PTo, 0, () => PolicyTypeSummary);
export var Roots = list(n0, _Roo, 0, () => Root);
export var CreateOrganization = op(
  n0,
  _CO,
  0,
  () => CreateOrganizationRequest,
  () => CreateOrganizationResponse
);
export var CreatePolicy = op(
  n0,
  _CPr,
  0,
  () => CreatePolicyRequest,
  () => CreatePolicyResponse
);
export var DescribeOrganization = op(
  n0,
  _DOe,
  0,
  () => Unit,
  () => DescribeOrganizationResponse
);
export var DescribePolicy = op(
  n0,
  _DPe,
  0,
  () => DescribePolicyRequest,
  () => DescribePolicyResponse
);
export var DisablePolicyType = op(
  n0,
  _DPT,
  0,
  () => DisablePolicyTypeRequest,
  () => DisablePolicyTypeResponse
);
export var EnablePolicyType = op(
  n0,
  _EPT,
  0,
  () => EnablePolicyTypeRequest,
  () => EnablePolicyTypeResponse
);
export var ListPolicies = op(
  n0,
  _LPi,
  0,
  () => ListPoliciesRequest,
  () => ListPoliciesResponse
);
export var ListPoliciesForTarget = op(
  n0,
  _LPFT,
  0,
  () => ListPoliciesForTargetRequest,
  () => ListPoliciesForTargetResponse
);
export var ListRoots = op(
  n0,
  _LR,
  0,
  () => ListRootsRequest,
  () => ListRootsResponse
);
export var UpdatePolicy = op(
  n0,
  _UP,
  0,
  () => UpdatePolicyRequest,
  () => UpdatePolicyResponse
);
