const _CE = "ConflictException";
const _CR = "CreateRule";
const _CRR = "CreateRuleRequest";
const _CRRr = "CreateRuleResponse";
const _D = "Description";
const _DR = "DeleteRule";
const _DRR = "DeleteRuleRequest";
const _DRRe = "DeleteRuleResponse";
const _ERT = "ExcludeResourceTags";
const _GR = "GetRule";
const _GRR = "GetRuleRequest";
const _GRRe = "GetRuleResponse";
const _I = "Identifier";
const _ISE = "InternalServerException";
const _K = "Key";
const _LC = "LockConfiguration";
const _LET = "LockEndTime";
const _LR = "ListRules";
const _LRR = "ListRulesRequest";
const _LRRi = "ListRulesResponse";
const _LRRo = "LockRuleRequest";
const _LRRoc = "LockRuleResponse";
const _LRo = "LockRule";
const _LS = "LockState";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _R = "Reason";
const _RA = "RuleArn";
const _RAe = "ResourceArn";
const _RNFE = "ResourceNotFoundException";
const _RP = "RetentionPeriod";
const _RPU = "RetentionPeriodUnit";
const _RPV = "RetentionPeriodValue";
const _RS = "RuleSummary";
const _RSL = "RuleSummaryList";
const _RT = "ResourceType";
const _RTK = "ResourceTagKey";
const _RTV = "ResourceTagValue";
const _RTe = "ResourceTags";
const _RTes = "ResourceTag";
const _Ru = "Rules";
const _S = "Status";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tags";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tag";
const _UD = "UnlockDelay";
const _UDU = "UnlockDelayUnit";
const _UDV = "UnlockDelayValue";
const _UR = "UnlockRule";
const _URR = "UnlockRuleRequest";
const _URRn = "UnlockRuleResponse";
const _URRnt = "UntagResourceRequest";
const _URRnta = "UntagResourceResponse";
const _URRp = "UpdateRuleRequest";
const _URRpd = "UpdateRuleResponse";
const _URn = "UntagResource";
const _URp = "UpdateRule";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.rbin";
const _tK = "tagKeys";
const n0 = "com.amazonaws.rbin";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { RbinServiceException as __RbinServiceException } from "../models/RbinServiceException";

/* eslint no-var: 0 */
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_M, _R], [0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var CreateRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _CRR,
  0,
  [_RP, _D, _T, _RT, _RTe, _LC, _ERT],
  [() => RetentionPeriod, 0, () => TagList, 0, () => ResourceTags, () => LockConfiguration, () => ExcludeResourceTags],
];
export var CreateRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _CRRr,
  0,
  [_I, _RP, _D, _T, _RT, _RTe, _S, _LC, _LS, _RA, _ERT],
  [
    0,
    () => RetentionPeriod,
    0,
    () => TagList,
    0,
    () => ResourceTags,
    0,
    () => LockConfiguration,
    0,
    0,
    () => ExcludeResourceTags,
  ],
];
export var DeleteRuleRequest: StaticStructureSchema = [3, n0, _DRR, 0, [_I], [[0, 1]]];
export var DeleteRuleResponse: StaticStructureSchema = [3, n0, _DRRe, 0, [], []];
export var GetRuleRequest: StaticStructureSchema = [3, n0, _GRR, 0, [_I], [[0, 1]]];
export var GetRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _GRRe,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _LET, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 4, 0, () => ExcludeResourceTags],
];
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListRulesRequest: StaticStructureSchema = [
  3,
  n0,
  _LRR,
  0,
  [_MR, _NT, _RT, _RTe, _LS, _ERT],
  [1, 0, 0, () => ResourceTags, 0, () => ExcludeResourceTags],
];
export var ListRulesResponse: StaticStructureSchema = [3, n0, _LRRi, 0, [_Ru, _NT], [() => RuleSummaryList, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RAe], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var LockConfiguration: StaticStructureSchema = [3, n0, _LC, 0, [_UD], [() => UnlockDelay]];
export var LockRuleRequest: StaticStructureSchema = [3, n0, _LRRo, 0, [_I, _LC], [[0, 1], () => LockConfiguration]];
export var LockRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _LRRoc,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 0, () => ExcludeResourceTags],
];
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M, _R], [0, 0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ResourceTag: StaticStructureSchema = [3, n0, _RTes, 0, [_RTK, _RTV], [0, 0]];
export var RetentionPeriod: StaticStructureSchema = [3, n0, _RP, 0, [_RPV, _RPU], [1, 0]];
export var RuleSummary: StaticStructureSchema = [
  3,
  n0,
  _RS,
  0,
  [_I, _D, _RP, _LS, _RA],
  [0, 0, () => RetentionPeriod, 0, 0],
];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M, _R],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RAe, _T], [[0, 1], () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UnlockDelay: StaticStructureSchema = [3, n0, _UD, 0, [_UDV, _UDU], [1, 0]];
export var UnlockRuleRequest: StaticStructureSchema = [3, n0, _URR, 0, [_I], [[0, 1]]];
export var UnlockRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _URRn,
  0,
  [_I, _D, _RT, _RP, _RTe, _S, _LC, _LS, _LET, _RA, _ERT],
  [0, 0, 0, () => RetentionPeriod, () => ResourceTags, 0, () => LockConfiguration, 0, 4, 0, () => ExcludeResourceTags],
];
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URRnt,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRnta, 0, [], []];
export var UpdateRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _URRp,
  0,
  [_I, _RP, _D, _RT, _RTe, _ERT],
  [[0, 1], () => RetentionPeriod, 0, 0, () => ResourceTags, () => ExcludeResourceTags],
];
export var UpdateRuleResponse: StaticStructureSchema = [
  3,
  n0,
  _URRpd,
  0,
  [_I, _RP, _D, _RT, _RTe, _S, _LS, _LET, _RA, _ERT],
  [0, () => RetentionPeriod, 0, 0, () => ResourceTags, 0, 0, 4, 0, () => ExcludeResourceTags],
];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M, _R], [0, 0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var RbinServiceException: StaticErrorSchema = [-3, _sm, "RbinServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RbinServiceException, __RbinServiceException);
export var ExcludeResourceTags: StaticListSchema = [1, n0, _ERT, 0, () => ResourceTag];
export var ResourceTags: StaticListSchema = [1, n0, _RTe, 0, () => ResourceTag];
export var RuleSummaryList: StaticListSchema = [1, n0, _RSL, 0, () => RuleSummary];
export var TagKeyList = 64 | 0;
export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var CreateRule: StaticOperationSchema = [
  9,
  n0,
  _CR,
  { [_h]: ["POST", "/rules", 201] },
  () => CreateRuleRequest,
  () => CreateRuleResponse,
];
export var DeleteRule: StaticOperationSchema = [
  9,
  n0,
  _DR,
  { [_h]: ["DELETE", "/rules/{Identifier}", 204] },
  () => DeleteRuleRequest,
  () => DeleteRuleResponse,
];
export var GetRule: StaticOperationSchema = [
  9,
  n0,
  _GR,
  { [_h]: ["GET", "/rules/{Identifier}", 200] },
  () => GetRuleRequest,
  () => GetRuleResponse,
];
export var ListRules: StaticOperationSchema = [
  9,
  n0,
  _LR,
  { [_h]: ["POST", "/list-rules", 200] },
  () => ListRulesRequest,
  () => ListRulesResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var LockRule: StaticOperationSchema = [
  9,
  n0,
  _LRo,
  { [_h]: ["PATCH", "/rules/{Identifier}/lock", 200] },
  () => LockRuleRequest,
  () => LockRuleResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 201] },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UnlockRule: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["PATCH", "/rules/{Identifier}/unlock", 200] },
  () => UnlockRuleRequest,
  () => UnlockRuleResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _URn,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 204] },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateRule: StaticOperationSchema = [
  9,
  n0,
  _URp,
  { [_h]: ["PATCH", "/rules/{Identifier}", 200] },
  () => UpdateRuleRequest,
  () => UpdateRuleResponse,
];
