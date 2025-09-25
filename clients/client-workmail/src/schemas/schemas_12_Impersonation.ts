// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _ACR,
  _ACRL,
  _AIR,
  _AIRR,
  _AIRRs,
  _CIR,
  _CIRR,
  _CIRRr,
  _CT,
  _D,
  _DC,
  _DIR,
  _DIRR,
  _DIRRe,
  _DM,
  _E,
  _EIx,
  _GACE,
  _GACER,
  _GACERe,
  _GIR,
  _GIRE,
  _GIRER,
  _GIRERe,
  _GIRR,
  _GIRRe,
  _IAp,
  _IMR,
  _IMRL,
  _IR,
  _IRI,
  _IRIm,
  _IRImp,
  _IRL,
  _IRLm,
  _IRm,
  _IRmp,
  _LACRis,
  _LACRR,
  _LACRRi,
  _LIR,
  _LIRR,
  _LIRRi,
  _MR,
  _MRa,
  _N,
  _NA,
  _NIR,
  _NIRI,
  _NT,
  _NTU,
  _NUI,
  _OI,
  _PACR,
  _PACRR,
  _PACRRu,
  _R,
  _Rol,
  _T,
  _TU,
  _TUa,
  _Ty,
  _UI,
  _UIR,
  _UIRR,
  _UIRRp,
  _UIs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessControlRule = struct(
  n0,
  _ACR,
  0,
  [_N, _E, _D, _IR, _NIR, _A, _NA, _UI, _NUI, _DC, _DM, _IRI, _NIRI],
  [0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 4, 4, 64 | 0, 64 | 0]
);
export var AssumeImpersonationRoleRequest = struct(n0, _AIRR, 0, [_OI, _IRIm], [0, 0]);
export var AssumeImpersonationRoleResponse = struct(n0, _AIRRs, 0, [_T, _EIx], [0, 1]);
export var CreateImpersonationRoleRequest = struct(
  n0,
  _CIRR,
  0,
  [_CT, _OI, _N, _Ty, _D, _R],
  [[0, 4], 0, 0, 0, 0, () => ImpersonationRuleList]
);
export var CreateImpersonationRoleResponse = struct(n0, _CIRRr, 0, [_IRIm], [0]);
export var DeleteImpersonationRoleRequest = struct(n0, _DIRR, 0, [_OI, _IRIm], [0, 0]);
export var DeleteImpersonationRoleResponse = struct(n0, _DIRRe, 0, [], []);
export var GetAccessControlEffectRequest = struct(n0, _GACER, 0, [_OI, _IAp, _Ac, _UIs, _IRIm], [0, 0, 0, 0, 0]);
export var GetAccessControlEffectResponse = struct(n0, _GACERe, 0, [_E, _MR], [0, 64 | 0]);
export var GetImpersonationRoleEffectRequest = struct(n0, _GIRER, 0, [_OI, _IRIm, _TU], [0, 0, 0]);
export var GetImpersonationRoleEffectResponse = struct(
  n0,
  _GIRERe,
  0,
  [_Ty, _E, _MR],
  [0, 0, () => ImpersonationMatchedRuleList]
);
export var GetImpersonationRoleRequest = struct(n0, _GIRR, 0, [_OI, _IRIm], [0, 0]);
export var GetImpersonationRoleResponse = struct(
  n0,
  _GIRRe,
  0,
  [_IRIm, _N, _Ty, _D, _R, _DC, _DM],
  [0, 0, 0, 0, () => ImpersonationRuleList, 4, 4]
);
export var ImpersonationMatchedRule = struct(n0, _IMR, 0, [_IRImp, _N], [0, 0]);
export var ImpersonationRole = struct(n0, _IRm, 0, [_IRIm, _N, _Ty, _DC, _DM], [0, 0, 0, 4, 4]);
export var ImpersonationRule = struct(n0, _IRmp, 0, [_IRImp, _N, _D, _E, _TUa, _NTU], [0, 0, 0, 0, 64 | 0, 64 | 0]);
export var ListAccessControlRulesRequest = struct(n0, _LACRR, 0, [_OI], [0]);
export var ListAccessControlRulesResponse = struct(n0, _LACRRi, 0, [_R], [() => AccessControlRulesList]);
export var ListImpersonationRolesRequest = struct(n0, _LIRR, 0, [_OI, _NT, _MRa], [0, 0, 1]);
export var ListImpersonationRolesResponse = struct(n0, _LIRRi, 0, [_Rol, _NT], [() => ImpersonationRoleList, 0]);
export var PutAccessControlRuleRequest = struct(
  n0,
  _PACRR,
  0,
  [_N, _E, _D, _IR, _NIR, _A, _NA, _UI, _NUI, _OI, _IRI, _NIRI],
  [0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var PutAccessControlRuleResponse = struct(n0, _PACRRu, 0, [], []);
export var UpdateImpersonationRoleRequest = struct(
  n0,
  _UIRR,
  0,
  [_OI, _IRIm, _N, _Ty, _D, _R],
  [0, 0, 0, 0, 0, () => ImpersonationRuleList]
);
export var UpdateImpersonationRoleResponse = struct(n0, _UIRRp, 0, [], []);
export var AccessControlRuleNameList = 64 | 0;

export var AccessControlRulesList = list(n0, _ACRL, 0, () => AccessControlRule);
export var ActionsList = 64 | 0;

export var ImpersonationMatchedRuleList = list(n0, _IMRL, 0, () => ImpersonationMatchedRule);
export var ImpersonationRoleIdList = 64 | 0;

export var ImpersonationRoleList = list(n0, _IRL, 0, () => ImpersonationRole);
export var ImpersonationRuleList = list(n0, _IRLm, 0, () => ImpersonationRule);
export var IpRangeList = 64 | 0;

export var TargetUsers = 64 | 0;

export var UserIdList = 64 | 0;

export var AssumeImpersonationRole = op(
  n0,
  _AIR,
  0,
  () => AssumeImpersonationRoleRequest,
  () => AssumeImpersonationRoleResponse
);
export var CreateImpersonationRole = op(
  n0,
  _CIR,
  0,
  () => CreateImpersonationRoleRequest,
  () => CreateImpersonationRoleResponse
);
export var DeleteImpersonationRole = op(
  n0,
  _DIR,
  0,
  () => DeleteImpersonationRoleRequest,
  () => DeleteImpersonationRoleResponse
);
export var GetAccessControlEffect = op(
  n0,
  _GACE,
  0,
  () => GetAccessControlEffectRequest,
  () => GetAccessControlEffectResponse
);
export var GetImpersonationRole = op(
  n0,
  _GIR,
  0,
  () => GetImpersonationRoleRequest,
  () => GetImpersonationRoleResponse
);
export var GetImpersonationRoleEffect = op(
  n0,
  _GIRE,
  0,
  () => GetImpersonationRoleEffectRequest,
  () => GetImpersonationRoleEffectResponse
);
export var ListAccessControlRules = op(
  n0,
  _LACRis,
  0,
  () => ListAccessControlRulesRequest,
  () => ListAccessControlRulesResponse
);
export var ListImpersonationRoles = op(
  n0,
  _LIR,
  0,
  () => ListImpersonationRolesRequest,
  () => ListImpersonationRolesResponse
);
export var PutAccessControlRule = op(
  n0,
  _PACR,
  0,
  () => PutAccessControlRuleRequest,
  () => PutAccessControlRuleResponse
);
export var UpdateImpersonationRole = op(
  n0,
  _UIR,
  0,
  () => UpdateImpersonationRoleRequest,
  () => UpdateImpersonationRoleResponse
);
