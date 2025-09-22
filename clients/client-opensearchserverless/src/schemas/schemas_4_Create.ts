// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  OcuLimitExceededException as __OcuLimitExceededException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _a,
  _aPD,
  _c,
  _CAP,
  _CAPR,
  _CAPRr,
  _CC,
  _CCD,
  _cCD,
  _CCR,
  _CCRr,
  _cD,
  _CIICCO,
  _CLP,
  _CLPR,
  _CLPRr,
  _CSC,
  _CSCR,
  _CSCRr,
  _CSP,
  _CSPR,
  _CSPRr,
  _cT,
  _CVE,
  _CVED,
  _cVED,
  _CVER,
  _CVERr,
  _d,
  _e,
  _gA,
  _hE,
  _iA,
  _id_,
  _iFO,
  _iICO,
  _kKA,
  _lMD,
  _lPDi,
  _m,
  _n,
  _OLEE,
  _p,
  _pV,
  _qC,
  _rA,
  _rIe,
  _rT,
  _s,
  _sC,
  _sCD,
  _sGI,
  _sI,
  _sO,
  _sPD,
  _SQEE,
  _sR,
  _t,
  _ta,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _ULP,
  _ULPR,
  _ULPRp,
  _USP,
  _USPR,
  _USPRp,
  _vI,
  n0,
} from "./schemas_0";
import { AccessPolicyDetail, LifecyclePolicyDetail, SecurityPolicyDetail } from "./schemas_2_Policy";
import { IamFederationConfigOptions, SamlConfigOptions, SecurityConfigDetail } from "./schemas_3_List";
import { Tags } from "./schemas_5_Resource";

/* eslint no-var: 0 */

export var CreateAccessPolicyRequest = struct(n0, _CAPR, 0, [_t, _n, _d, _p, _cT], [0, 0, 0, 0, [0, 4]]);
export var CreateAccessPolicyResponse = struct(n0, _CAPRr, 0, [_aPD], [() => AccessPolicyDetail]);
export var CreateCollectionDetail = struct(
  n0,
  _CCD,
  0,
  [_id_, _n, _s, _t, _d, _a, _kKA, _sR, _cD, _lMD],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
);
export var CreateCollectionRequest = struct(n0, _CCR, 0, [_n, _t, _d, _ta, _sR, _cT], [0, 0, 0, () => Tags, 0, [0, 4]]);
export var CreateCollectionResponse = struct(n0, _CCRr, 0, [_cCD], [() => CreateCollectionDetail]);
export var CreateIamIdentityCenterConfigOptions = struct(n0, _CIICCO, 0, [_iA, _uA, _gA], [0, 0, 0]);
export var CreateLifecyclePolicyRequest = struct(n0, _CLPR, 0, [_t, _n, _d, _p, _cT], [0, 0, 0, 0, [0, 4]]);
export var CreateLifecyclePolicyResponse = struct(n0, _CLPRr, 0, [_lPDi], [() => LifecyclePolicyDetail]);
export var CreateSecurityConfigRequest = struct(
  n0,
  _CSCR,
  0,
  [_t, _n, _d, _sO, _iICO, _iFO, _cT],
  [
    0,
    0,
    0,
    () => SamlConfigOptions,
    () => CreateIamIdentityCenterConfigOptions,
    () => IamFederationConfigOptions,
    [0, 4],
  ]
);
export var CreateSecurityConfigResponse = struct(n0, _CSCRr, 0, [_sCD], [() => SecurityConfigDetail]);
export var CreateSecurityPolicyRequest = struct(n0, _CSPR, 0, [_t, _n, _d, _p, _cT], [0, 0, 0, 0, [0, 4]]);
export var CreateSecurityPolicyResponse = struct(n0, _CSPRr, 0, [_sPD], [() => SecurityPolicyDetail]);
export var CreateVpcEndpointDetail = struct(n0, _CVED, 0, [_id_, _n, _s], [0, 0, 0]);
export var CreateVpcEndpointRequest = struct(n0, _CVER, 0, [_n, _vI, _sI, _sGI, _cT], [0, 0, 64 | 0, 64 | 0, [0, 4]]);
export var CreateVpcEndpointResponse = struct(n0, _CVERr, 0, [_cVED], [() => CreateVpcEndpointDetail]);
export var OcuLimitExceededException = error(
  n0,
  _OLEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __OcuLimitExceededException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rIe, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [0, () => Tags]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UpdateLifecyclePolicyRequest = struct(n0, _ULPR, 0, [_t, _n, _pV, _d, _p, _cT], [0, 0, 0, 0, 0, [0, 4]]);
export var UpdateLifecyclePolicyResponse = struct(n0, _ULPRp, 0, [_lPDi], [() => LifecyclePolicyDetail]);
export var UpdateSecurityPolicyRequest = struct(n0, _USPR, 0, [_t, _n, _pV, _d, _p, _cT], [0, 0, 0, 0, 0, [0, 4]]);
export var UpdateSecurityPolicyResponse = struct(n0, _USPRp, 0, [_sPD], [() => SecurityPolicyDetail]);
export var CreateAccessPolicy = op(
  n0,
  _CAP,
  2,
  () => CreateAccessPolicyRequest,
  () => CreateAccessPolicyResponse
);
export var CreateCollection = op(
  n0,
  _CC,
  2,
  () => CreateCollectionRequest,
  () => CreateCollectionResponse
);
export var CreateLifecyclePolicy = op(
  n0,
  _CLP,
  2,
  () => CreateLifecyclePolicyRequest,
  () => CreateLifecyclePolicyResponse
);
export var CreateSecurityConfig = op(
  n0,
  _CSC,
  2,
  () => CreateSecurityConfigRequest,
  () => CreateSecurityConfigResponse
);
export var CreateSecurityPolicy = op(
  n0,
  _CSP,
  2,
  () => CreateSecurityPolicyRequest,
  () => CreateSecurityPolicyResponse
);
export var CreateVpcEndpoint = op(
  n0,
  _CVE,
  2,
  () => CreateVpcEndpointRequest,
  () => CreateVpcEndpointResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UpdateLifecyclePolicy = op(
  n0,
  _ULP,
  2,
  () => UpdateLifecyclePolicyRequest,
  () => UpdateLifecyclePolicyResponse
);
export var UpdateSecurityPolicy = op(
  n0,
  _USP,
  2,
  () => UpdateSecurityPolicyRequest,
  () => UpdateSecurityPolicyResponse
);
