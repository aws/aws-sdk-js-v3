// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import {
  _ACF,
  _ARR,
  _AUI,
  _c,
  _CI,
  _CIP,
  _CIPI,
  _CIPL,
  _CIPo,
  _CIPr,
  _Cl,
  _CME,
  _DIPe,
  _DIPIe,
  _DPN,
  _e,
  _GIPR,
  _GIPRI,
  _GIPRR,
  _hE,
  _IP,
  _IPI,
  _IPN,
  _IPTd,
  _LTFR,
  _LTFRI,
  _LTFRR,
  _m,
  _MRa,
  _MRL,
  _MT,
  _OICPARN,
  _PN,
  _R,
  _RA,
  _RARN,
  _RC,
  _RCT,
  _RM,
  _RMM,
  _RMo,
  _Ru,
  _SIPR,
  _SIPRI,
  _SLP,
  _SPARN,
  _SSTC,
  _Ta,
  _TK,
  _TR,
  _TRI,
  _TRR,
  _Ty,
  _UIP,
  _UR,
  _URI,
  _URR,
  _V,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_6_IdentityPoolRoles";

/* eslint no-var: 0 */

export var CognitoIdentityProvider = struct(n0, _CIP, 0, [_PN, _CI, _SSTC], [0, 0, 2]);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var CreateIdentityPoolInput = struct(
  n0,
  _CIPI,
  0,
  [_IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd],
  [0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]
);
export var DescribeIdentityPoolInput = struct(n0, _DIPIe, 0, [_IPI], [0]);
export var GetIdentityPoolRolesInput = struct(n0, _GIPRI, 0, [_IPI], [0]);
export var GetIdentityPoolRolesResponse = struct(n0, _GIPRR, 0, [_IPI, _R, _RM], [0, 128 | 0, () => RoleMappingMap]);
export var IdentityPool = struct(
  n0,
  _IP,
  0,
  [_IPI, _IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd],
  [0, 0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]
);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRR, 0, [_Ta], [128 | 0]);
export var MappingRule = struct(n0, _MRa, 0, [_Cl, _MT, _V, _RARN], [0, 0, 0, 0]);
export var RoleMapping = struct(n0, _RMo, 0, [_Ty, _ARR, _RC], [0, 0, () => RulesConfigurationType]);
export var RulesConfigurationType = struct(n0, _RCT, 0, [_Ru], [() => MappingRulesList]);
export var SetIdentityPoolRolesInput = struct(n0, _SIPRI, 0, [_IPI, _R, _RM], [0, 128 | 0, () => RoleMappingMap]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _Ta], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRR, 0, [], []);
export var UntagResourceInput = struct(n0, _URI, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URR, 0, [], []);
export var CognitoIdentityProviderList = list(n0, _CIPL, 0, () => CognitoIdentityProvider);
export var IdentityPoolTagsListType = 64 | 0;

export var MappingRulesList = list(n0, _MRL, 0, () => MappingRule);
export var OIDCProviderList = 64 | 0;

export var SAMLProviderList = 64 | 0;

export var IdentityPoolTagsType = 128 | 0;

export var IdentityProviders = 128 | 0;

export var RoleMappingMap = map(n0, _RMM, 0, 0, () => RoleMapping);
export var RolesMap = 128 | 0;

export var CreateIdentityPool = op(
  n0,
  _CIPr,
  0,
  () => CreateIdentityPoolInput,
  () => IdentityPool
);
export var DescribeIdentityPool = op(
  n0,
  _DIPe,
  0,
  () => DescribeIdentityPoolInput,
  () => IdentityPool
);
export var GetIdentityPoolRoles = op(
  n0,
  _GIPR,
  0,
  () => GetIdentityPoolRolesInput,
  () => GetIdentityPoolRolesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceResponse
);
export var SetIdentityPoolRoles = op(
  n0,
  _SIPR,
  0,
  () => SetIdentityPoolRolesInput,
  () => Unit
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceInput,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceResponse
);
export var UpdateIdentityPool = op(
  n0,
  _UIP,
  0,
  () => IdentityPool,
  () => IdentityPool
);
