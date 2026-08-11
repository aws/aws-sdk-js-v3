const _ACE = "AlreadyCreatedException";
const _ADE = "AccessDeniedException";
const _AL = "ApplicationList";
const _AS = "ApplicationSummary";
const _CA = "CreateApplication";
const _CAR = "CreateApplicationRequest";
const _CARr = "CreateApplicationResponse";
const _CE = "ConflictException";
const _CER = "CreateEntitlementRequest";
const _CERr = "CreateEntitlementResponse";
const _CEr = "CreateEntitlement";
const _DA = "DeleteApplication";
const _DAR = "DeleteApplicationRequest";
const _DARe = "DeleteApplicationResponse";
const _DE = "DeleteEntitlement";
const _DER = "DeleteEntitlementRequest";
const _DERe = "DeleteEntitlementResponse";
const _E = "Entitlement";
const _ED = "ErrorDetails";
const _EDn = "EntitlementDetails";
const _EF = "EntitlementFilter";
const _EL = "EntitlementsList";
const _ELM = "EntitlementsListMember";
const _ES = "EntitlementSummary";
const _GA = "GetApplication";
const _GAR = "GetApplicationRequest";
const _GARe = "GetApplicationResponse";
const _GE = "GetEntitlement";
const _GER = "GetEntitlementRequest";
const _GERe = "GetEntitlementResponse";
const _IC = "IdentityCenter";
const _ICD = "IdentityCenterDetails";
const _ICP = "IdentityCenterPrincipal";
const _ICPF = "IdentityCenterPrincipalFilter";
const _IS = "IdentitySource";
const _ISD = "IdentitySourceDetails";
const _ISE = "InternalServerException";
const _LA = "ListApplications";
const _LAR = "ListApplicationsRequest";
const _LARi = "ListApplicationsResponse";
const _LE = "ListEntitlements";
const _LER = "ListEntitlementsRequest";
const _LERi = "ListEntitlementsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _P = "Principal";
const _PF = "PrincipalFilter";
const _PRE = "PrincipalRoleEntitlement";
const _PRED = "PrincipalRoleEntitlementDetails";
const _PREF = "PrincipalRoleEntitlementFilter";
const _PRES = "PrincipalRoleEntitlementSummary";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _a = "applications";
const _aA = "applicationArn";
const _aN = "accountName";
const _ac = "account";
const _c = "client";
const _cA = "createdAt";
const _co = "code";
const _e = "error";
const _eI = "entitlementId";
const _en = "entitlement";
const _ent = "entitlements";
const _f = "filter";
const _gI = "groupId";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iA = "instanceArn";
const _iC = "identityCenter";
const _iS = "identitySource";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "principal";
const _pR = "principalRole";
const _rA = "resourceArn";
const _rAo = "roleArn";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.accountaccess";
const _se = "server";
const _st = "status";
const _t = "tags";
const _tI = "tenantId";
const _tK = "tagKeys";
const _uA = "updatedAt";
const _uI = "userId";
const n0 = "com.amazonaws.accountaccess";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { AccountAccessServiceException } from "../models/AccountAccessServiceException";
import {
  AccessDeniedException,
  AlreadyCreatedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var AccountAccessServiceException$: StaticErrorSchema = [-3, _s, "AccountAccessServiceException", 0, [], []];
_s_registry.registerError(AccountAccessServiceException$, AccountAccessServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var AlreadyCreatedException$: StaticErrorSchema = [-3, n0, _ACE,
  { [_e]: _c },
  [_m],
  [0]
];
n0_registry.registerError(AlreadyCreatedException$, AlreadyCreatedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0]
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0]
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var ApplicationSummary$: StaticStructureSchema = [3, n0, _AS,
  0,
  [_aA, _cA, _uA, _tI],
  [0, 5, 5, 0], 3
];
export var CreateApplicationRequest$: StaticStructureSchema = [3, n0, _CAR,
  0,
  [_iS, _t],
  [() => IdentitySource$, 128 | 0], 1
];
export var CreateApplicationResponse$: StaticStructureSchema = [3, n0, _CARr,
  0,
  [_aA],
  [0], 1
];
export var CreateEntitlementRequest$: StaticStructureSchema = [3, n0, _CER,
  0,
  [_aA, _en],
  [0, () => Entitlement$], 2
];
export var CreateEntitlementResponse$: StaticStructureSchema = [3, n0, _CERr,
  0,
  [_eI],
  [0], 1
];
export var DeleteApplicationRequest$: StaticStructureSchema = [3, n0, _DAR,
  0,
  [_aA],
  [[0, 1]], 1
];
export var DeleteApplicationResponse$: StaticStructureSchema = [3, n0, _DARe,
  0,
  [],
  []
];
export var DeleteEntitlementRequest$: StaticStructureSchema = [3, n0, _DER,
  0,
  [_aA, _eI],
  [[0, { [_hQ]: _aA }], [0, 1]], 2
];
export var DeleteEntitlementResponse$: StaticStructureSchema = [3, n0, _DERe,
  0,
  [],
  []
];
export var EntitlementFilter$: StaticStructureSchema = [3, n0, _EF,
  0,
  [_pR],
  [() => PrincipalRoleEntitlementFilter$]
];
export var EntitlementsListMember$: StaticStructureSchema = [3, n0, _ELM,
  0,
  [_eI, _en, _cA],
  [0, () => EntitlementSummary$, 5], 3
];
export var ErrorDetails$: StaticStructureSchema = [3, n0, _ED,
  0,
  [_co, _m],
  [0, 0], 2
];
export var GetApplicationRequest$: StaticStructureSchema = [3, n0, _GAR,
  0,
  [_aA],
  [[0, 1]], 1
];
export var GetApplicationResponse$: StaticStructureSchema = [3, n0, _GARe,
  0,
  [_iS, _st, _cA, _uA, _tI, _t, _e],
  [() => IdentitySourceDetails$, 0, 5, 5, 0, 128 | 0, () => ErrorDetails$], 4
];
export var GetEntitlementRequest$: StaticStructureSchema = [3, n0, _GER,
  0,
  [_aA, _eI],
  [[0, { [_hQ]: _aA }], [0, 1]], 2
];
export var GetEntitlementResponse$: StaticStructureSchema = [3, n0, _GERe,
  0,
  [_aA, _eI, _en, _cA],
  [0, 0, () => EntitlementDetails$, 5], 4
];
export var IdentityCenter$: StaticStructureSchema = [3, n0, _IC,
  0,
  [_iA],
  [0], 1
];
export var IdentityCenterDetails$: StaticStructureSchema = [3, n0, _ICD,
  0,
  [_iA, _aA],
  [0, 0], 1
];
export var ListApplicationsRequest$: StaticStructureSchema = [3, n0, _LAR,
  0,
  [_mR, _nT],
  [1, 0]
];
export var ListApplicationsResponse$: StaticStructureSchema = [3, n0, _LARi,
  0,
  [_a, _nT],
  [() => ApplicationList, 0], 1
];
export var ListEntitlementsRequest$: StaticStructureSchema = [3, n0, _LER,
  0,
  [_aA, _f, _nT, _mR],
  [0, () => EntitlementFilter$, 0, 1], 2
];
export var ListEntitlementsResponse$: StaticStructureSchema = [3, n0, _LERi,
  0,
  [_ent, _nT],
  [() => EntitlementsList, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t],
  [128 | 0]
];
export var PrincipalRoleEntitlement$: StaticStructureSchema = [3, n0, _PRE,
  0,
  [_p, _rAo],
  [() => Principal$, 0], 2
];
export var PrincipalRoleEntitlementDetails$: StaticStructureSchema = [3, n0, _PRED,
  0,
  [_p, _rAo, _ac, _aN],
  [() => Principal$, 0, 0, 0], 3
];
export var PrincipalRoleEntitlementFilter$: StaticStructureSchema = [3, n0, _PREF,
  0,
  [_p, _rAo, _ac],
  [() => PrincipalFilter$, 0, 0]
];
export var PrincipalRoleEntitlementSummary$: StaticStructureSchema = [3, n0, _PRES,
  0,
  [_p, _rAo, _ac, _aN],
  [() => Principal$, 0, 0, 0], 3
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _t],
  [[0, 1], 128 | 0], 2
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
var ApplicationList: StaticListSchema = [1, n0, _AL,
  0, () => ApplicationSummary$
];
var EntitlementsList: StaticListSchema = [1, n0, _EL,
  0, () => EntitlementsListMember$
];
var TagKeys = 64 | 0;
var TagsMap = 128 | 0;
export var Entitlement$: StaticUnionSchema = [4, n0, _E,
  0,
  [_pR],
  [() => PrincipalRoleEntitlement$]
];
export var EntitlementDetails$: StaticUnionSchema = [4, n0, _EDn,
  0,
  [_pR],
  [() => PrincipalRoleEntitlementDetails$]
];
export var EntitlementSummary$: StaticUnionSchema = [4, n0, _ES,
  0,
  [_pR],
  [() => PrincipalRoleEntitlementSummary$]
];
export var IdentityCenterPrincipal$: StaticUnionSchema = [4, n0, _ICP,
  0,
  [_uI, _gI],
  [0, 0]
];
export var IdentityCenterPrincipalFilter$: StaticUnionSchema = [4, n0, _ICPF,
  0,
  [_uI, _gI],
  [0, 0]
];
export var IdentitySource$: StaticUnionSchema = [4, n0, _IS,
  0,
  [_iC],
  [() => IdentityCenter$]
];
export var IdentitySourceDetails$: StaticUnionSchema = [4, n0, _ISD,
  0,
  [_iC],
  [() => IdentityCenterDetails$]
];
export var Principal$: StaticUnionSchema = [4, n0, _P,
  0,
  [_iC],
  [() => IdentityCenterPrincipal$]
];
export var PrincipalFilter$: StaticUnionSchema = [4, n0, _PF,
  0,
  [_iC],
  [() => IdentityCenterPrincipalFilter$]
];
export var CreateApplication$: StaticOperationSchema = [9, n0, _CA,
  { [_h]: ["POST", "/applications", 200] }, () => CreateApplicationRequest$, () => CreateApplicationResponse$
];
export var CreateEntitlement$: StaticOperationSchema = [9, n0, _CEr,
  { [_h]: ["POST", "/entitlements", 200] }, () => CreateEntitlementRequest$, () => CreateEntitlementResponse$
];
export var DeleteApplication$: StaticOperationSchema = [9, n0, _DA,
  { [_h]: ["DELETE", "/applications/{applicationArn}", 204] }, () => DeleteApplicationRequest$, () => DeleteApplicationResponse$
];
export var DeleteEntitlement$: StaticOperationSchema = [9, n0, _DE,
  { [_h]: ["DELETE", "/entitlements/{entitlementId}", 204] }, () => DeleteEntitlementRequest$, () => DeleteEntitlementResponse$
];
export var GetApplication$: StaticOperationSchema = [9, n0, _GA,
  { [_h]: ["GET", "/applications/{applicationArn}", 200] }, () => GetApplicationRequest$, () => GetApplicationResponse$
];
export var GetEntitlement$: StaticOperationSchema = [9, n0, _GE,
  { [_h]: ["GET", "/entitlements/{entitlementId}", 200] }, () => GetEntitlementRequest$, () => GetEntitlementResponse$
];
export var ListApplications$: StaticOperationSchema = [9, n0, _LA,
  { [_h]: ["POST", "/applications-list", 200] }, () => ListApplicationsRequest$, () => ListApplicationsResponse$
];
export var ListEntitlements$: StaticOperationSchema = [9, n0, _LE,
  { [_h]: ["POST", "/entitlements-list", 200] }, () => ListEntitlementsRequest$, () => ListEntitlementsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
