const _ADE = "AccessDeniedException";
const _CAC = "CrossAccountConfiguration";
const _CACr = "CrossAccountConfigurations";
const _CE = "ConflictException";
const _CIG = "CreateInvestigationGroup";
const _CIGI = "CreateInvestigationGroupInput";
const _CIGO = "CreateInvestigationGroupOutput";
const _CNC = "ChatbotNotificationChannel";
const _DIG = "DeleteInvestigationGroup";
const _DIGP = "DeleteInvestigationGroupPolicy";
const _DIGPO = "DeleteInvestigationGroupPolicyOutput";
const _DIGPR = "DeleteInvestigationGroupPolicyRequest";
const _DIGR = "DeleteInvestigationGroupRequest";
const _EC = "EncryptionConfiguration";
const _FE = "ForbiddenException";
const _GIG = "GetInvestigationGroup";
const _GIGP = "GetInvestigationGroupPolicy";
const _GIGPR = "GetInvestigationGroupPolicyRequest";
const _GIGPRe = "GetInvestigationGroupPolicyResponse";
const _GIGR = "GetInvestigationGroupRequest";
const _GIGRe = "GetInvestigationGroupResponse";
const _IG = "InvestigationGroups";
const _ISE = "InternalServerException";
const _LIG = "ListInvestigationGroups";
const _LIGI = "ListInvestigationGroupsInput";
const _LIGM = "ListInvestigationGroupsModel";
const _LIGO = "ListInvestigationGroupsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRO = "ListTagsForResourceOutput";
const _LTFRR = "ListTagsForResourceRequest";
const _PIGP = "PutInvestigationGroupPolicy";
const _PIGPR = "PutInvestigationGroupPolicyRequest";
const _PIGPRu = "PutInvestigationGroupPolicyResponse";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _SSWLL = "SensitiveStringWithLengthLimits";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UIG = "UpdateInvestigationGroup";
const _UIGO = "UpdateInvestigationGroupOutput";
const _UIGR = "UpdateInvestigationGroupRequest";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _a = "arn";
const _c = "client";
const _cA = "createdAt";
const _cAC = "crossAccountConfigurations";
const _cB = "createdBy";
const _cNC = "chatbotNotificationChannel";
const _e = "error";
const _eC = "encryptionConfiguration";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "identifier";
const _iCTEHE = "isCloudTrailEventHistoryEnabled";
const _iG = "investigationGroups";
const _iGA = "investigationGroupArn";
const _kKI = "kmsKeyId";
const _lMA = "lastModifiedAt";
const _lMB = "lastModifiedBy";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _p = "policy";
const _qC = "quotaCode";
const _rA = "roleArn";
const _rAe = "resourceArn";
const _rI = "resourceId";
const _rID = "retentionInDays";
const _rT = "resourceType";
const _s = "server";
const _sC = "serviceCode";
const _sRA = "sourceRoleArn";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.aiops";
const _t = "tags";
const _tK = "tagKeys";
const _tKB = "tagKeyBoundaries";
const _ty = "type";
const n0 = "com.amazonaws.aiops";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { AIOpsServiceException } from "../models/AIOpsServiceException";
import {
  AccessDeniedException,
  ConflictException,
  ForbiddenException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var SensitiveStringWithLengthLimits: StaticSimpleSchema = [0, n0, _SSWLL, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateInvestigationGroupInput$: StaticStructureSchema = [
  3,
  n0,
  _CIGI,
  0,
  [_n, _rA, _eC, _rID, _t, _tKB, _cNC, _iCTEHE, _cAC],
  [
    0,
    0,
    () => EncryptionConfiguration$,
    1,
    128 | 0,
    64 | 0,
    [2, n0, _CNC, 0, 0, 64 | 0],
    2,
    () => CrossAccountConfigurations,
  ],
];
export var CreateInvestigationGroupOutput$: StaticStructureSchema = [3, n0, _CIGO, 0, [_a], [0]];
export var CrossAccountConfiguration$: StaticStructureSchema = [3, n0, _CAC, 0, [_sRA], [0]];
export var DeleteInvestigationGroupPolicyOutput$: StaticStructureSchema = [3, n0, _DIGPO, 0, [], []];
export var DeleteInvestigationGroupPolicyRequest$: StaticStructureSchema = [3, n0, _DIGPR, 0, [_i], [[0, 1]]];
export var DeleteInvestigationGroupRequest$: StaticStructureSchema = [3, n0, _DIGR, 0, [_i], [[0, 1]]];
export var EncryptionConfiguration$: StaticStructureSchema = [3, n0, _EC, 0, [_ty, _kKI], [0, 0]];
export var ForbiddenException$: StaticErrorSchema = [-3, n0, _FE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ForbiddenException$, ForbiddenException);
export var GetInvestigationGroupPolicyRequest$: StaticStructureSchema = [3, n0, _GIGPR, 0, [_i], [[0, 1]]];
export var GetInvestigationGroupPolicyResponse$: StaticStructureSchema = [3, n0, _GIGPRe, 0, [_iGA, _p], [0, 0]];
export var GetInvestigationGroupRequest$: StaticStructureSchema = [3, n0, _GIGR, 0, [_i], [[0, 1]]];
export var GetInvestigationGroupResponse$: StaticStructureSchema = [
  3,
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
    () => EncryptionConfiguration$,
    1,
    [2, n0, _CNC, 0, 0, 64 | 0],
    64 | 0,
    2,
    () => CrossAccountConfigurations,
  ],
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListInvestigationGroupsInput$: StaticStructureSchema = [
  3,
  n0,
  _LIGI,
  0,
  [_nT, _mR],
  [
    [() => SensitiveStringWithLengthLimits, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListInvestigationGroupsModel$: StaticStructureSchema = [3, n0, _LIGM, 0, [_a, _n], [0, 0]];
export var ListInvestigationGroupsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LIGO,
  0,
  [_nT, _iG],
  [[() => SensitiveStringWithLengthLimits, 0], () => InvestigationGroups],
];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO, 0, [_t], [128 | 0]];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rAe], [[0, 1]]];
export var PutInvestigationGroupPolicyRequest$: StaticStructureSchema = [3, n0, _PIGPR, 0, [_i, _p], [[0, 1], 0]];
export var PutInvestigationGroupPolicyResponse$: StaticStructureSchema = [3, n0, _PIGPRu, 0, [_iGA], [0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_rAe, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateInvestigationGroupOutput$: StaticStructureSchema = [3, n0, _UIGO, 0, [], []];
export var UpdateInvestigationGroupRequest$: StaticStructureSchema = [
  3,
  n0,
  _UIGR,
  0,
  [_i, _rA, _eC, _tKB, _cNC, _iCTEHE, _cAC],
  [[0, 1], 0, () => EncryptionConfiguration$, 64 | 0, [2, n0, _CNC, 0, 0, 64 | 0], 2, () => CrossAccountConfigurations],
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
var __Unit = "unit" as const;
export var AIOpsServiceException$: StaticErrorSchema = [-3, _sm, "AIOpsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(AIOpsServiceException$, AIOpsServiceException);
var ChatConfigurationArns = 64 | 0;
var CrossAccountConfigurations: StaticListSchema = [1, n0, _CACr, 0, () => CrossAccountConfiguration$];
var InvestigationGroups: StaticListSchema = [1, n0, _IG, 0, () => ListInvestigationGroupsModel$];
var TagKeyBoundaries = 64 | 0;
var TagKeys = 64 | 0;
var ChatbotNotificationChannel: StaticMapSchema = [2, n0, _CNC, 0, 0, 64 | 0];
var Tags = 128 | 0;
export var CreateInvestigationGroup$: StaticOperationSchema = [
  9,
  n0,
  _CIG,
  { [_h]: ["POST", "/investigationGroups", 201] },
  () => CreateInvestigationGroupInput$,
  () => CreateInvestigationGroupOutput$,
];
export var DeleteInvestigationGroup$: StaticOperationSchema = [
  9,
  n0,
  _DIG,
  { [_h]: ["DELETE", "/investigationGroups/{identifier}", 200] },
  () => DeleteInvestigationGroupRequest$,
  () => __Unit,
];
export var DeleteInvestigationGroupPolicy$: StaticOperationSchema = [
  9,
  n0,
  _DIGP,
  { [_h]: ["DELETE", "/investigationGroups/{identifier}/policy", 200] },
  () => DeleteInvestigationGroupPolicyRequest$,
  () => DeleteInvestigationGroupPolicyOutput$,
];
export var GetInvestigationGroup$: StaticOperationSchema = [
  9,
  n0,
  _GIG,
  { [_h]: ["GET", "/investigationGroups/{identifier}", 200] },
  () => GetInvestigationGroupRequest$,
  () => GetInvestigationGroupResponse$,
];
export var GetInvestigationGroupPolicy$: StaticOperationSchema = [
  9,
  n0,
  _GIGP,
  { [_h]: ["GET", "/investigationGroups/{identifier}/policy", 200] },
  () => GetInvestigationGroupPolicyRequest$,
  () => GetInvestigationGroupPolicyResponse$,
];
export var ListInvestigationGroups$: StaticOperationSchema = [
  9,
  n0,
  _LIG,
  { [_h]: ["GET", "/investigationGroups", 200] },
  () => ListInvestigationGroupsInput$,
  () => ListInvestigationGroupsOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceOutput$,
];
export var PutInvestigationGroupPolicy$: StaticOperationSchema = [
  9,
  n0,
  _PIGP,
  { [_h]: ["POST", "/investigationGroups/{identifier}/policy", 200] },
  () => PutInvestigationGroupPolicyRequest$,
  () => PutInvestigationGroupPolicyResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateInvestigationGroup$: StaticOperationSchema = [
  9,
  n0,
  _UIG,
  { [_h]: ["PATCH", "/investigationGroups/{identifier}", 200] },
  () => UpdateInvestigationGroupRequest$,
  () => UpdateInvestigationGroupOutput$,
];
