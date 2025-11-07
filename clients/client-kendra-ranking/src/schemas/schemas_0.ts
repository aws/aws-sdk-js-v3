export const _A = "Arn";
export const _ADE = "AccessDeniedException";
export const _B = "Body";
export const _CA = "CreatedAt";
export const _CE = "ConflictException";
export const _CREP = "CreateRescoreExecutionPlan";
export const _CREPR = "CreateRescoreExecutionPlanRequest";
export const _CREPRr = "CreateRescoreExecutionPlanResponse";
export const _CT = "ClientToken";
export const _CU = "CapacityUnits";
export const _CUC = "CapacityUnitsConfiguration";
export const _D = "Description";
export const _DI = "DocumentId";
export const _DL = "DocumentList";
export const _DREP = "DeleteRescoreExecutionPlan";
export const _DREPR = "DeleteRescoreExecutionPlanRequest";
export const _DREPRe = "DescribeRescoreExecutionPlanRequest";
export const _DREPRes = "DescribeRescoreExecutionPlanResponse";
export const _DREPe = "DescribeRescoreExecutionPlan";
export const _Do = "Document";
export const _Doc = "Documents";
export const _EM = "ErrorMessage";
export const _GI = "GroupId";
export const _I = "Id";
export const _ISE = "InternalServerException";
export const _K = "Key";
export const _LREP = "ListRescoreExecutionPlans";
export const _LREPR = "ListRescoreExecutionPlansRequest";
export const _LREPRi = "ListRescoreExecutionPlansResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _OS = "OriginalScore";
export const _R = "Rescore";
export const _RARN = "ResourceARN";
export const _RCU = "RescoreCapacityUnits";
export const _REPI = "RescoreExecutionPlanId";
export const _REPS = "RescoreExecutionPlanSummary";
export const _REPSL = "RescoreExecutionPlanSummaryList";
export const _RI = "RescoreId";
export const _RIe = "ResultItems";
export const _RNFE = "ResourceNotFoundException";
export const _RR = "RescoreRequest";
export const _RRI = "RescoreResultItem";
export const _RRIL = "RescoreResultItemList";
export const _RRe = "RescoreResult";
export const _RUE = "ResourceUnavailableException";
export const _S = "Status";
export const _SI = "SummaryItems";
export const _SQ = "SearchQuery";
export const _SQEE = "ServiceQuotaExceededException";
export const _Sc = "Score";
export const _T = "Tags";
export const _TB = "TokenizedBody";
export const _TE = "ThrottlingException";
export const _TK = "TagKeys";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TT = "TokenizedTitle";
export const _Ta = "Tag";
export const _Ti = "Title";
export const _UA = "UpdatedAt";
export const _UR = "UntagResource";
export const _UREP = "UpdateRescoreExecutionPlan";
export const _UREPR = "UpdateRescoreExecutionPlanRequest";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _mR = "maxResults";
export const _nT = "nextToken";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.kendraranking";
export const n0 = "com.amazonaws.kendraranking";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourceUnavailableException as __ResourceUnavailableException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { KendraRankingServiceException as __KendraRankingServiceException } from "../models/KendraRankingServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var CapacityUnitsConfiguration: StaticStructureSchema = [3, n0, _CUC, 0, [_RCU], [1]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateRescoreExecutionPlanRequest: StaticStructureSchema = [
  3,
  n0,
  _CREPR,
  0,
  [_N, _D, _CU, _T, _CT],
  [0, 0, () => CapacityUnitsConfiguration, () => TagList, [0, 4]],
];
export var CreateRescoreExecutionPlanResponse: StaticStructureSchema = [3, n0, _CREPRr, 0, [_I, _A], [0, 0]];
export var DeleteRescoreExecutionPlanRequest: StaticStructureSchema = [3, n0, _DREPR, 0, [_I], [[0, 1]]];
export var DescribeRescoreExecutionPlanRequest: StaticStructureSchema = [3, n0, _DREPRe, 0, [_I], [[0, 1]]];
export var DescribeRescoreExecutionPlanResponse: StaticStructureSchema = [
  3,
  n0,
  _DREPRes,
  0,
  [_I, _A, _N, _D, _CU, _CA, _UA, _S, _EM],
  [0, 0, 0, 0, () => CapacityUnitsConfiguration, 4, 4, 0, 0],
];
export var Document: StaticStructureSchema = [
  3,
  n0,
  _Do,
  0,
  [_I, _GI, _Ti, _B, _TT, _TB, _OS],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 1],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListRescoreExecutionPlansRequest: StaticStructureSchema = [
  3,
  n0,
  _LREPR,
  0,
  [_NT, _MR],
  [
    [
      0,
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
  ],
];
export var ListRescoreExecutionPlansResponse: StaticStructureSchema = [
  3,
  n0,
  _LREPRi,
  0,
  [_SI, _NT],
  [() => RescoreExecutionPlanSummaryList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RARN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var RescoreExecutionPlanSummary: StaticStructureSchema = [
  3,
  n0,
  _REPS,
  0,
  [_N, _I, _CA, _UA, _S],
  [0, 0, 4, 4, 0],
];
export var RescoreRequest: StaticStructureSchema = [3, n0, _RR, 0, [_REPI, _SQ, _Doc], [[0, 1], 0, () => DocumentList]];
export var RescoreResult: StaticStructureSchema = [3, n0, _RRe, 0, [_RI, _RIe], [0, () => RescoreResultItemList]];
export var RescoreResultItem: StaticStructureSchema = [3, n0, _RRI, 0, [_DI, _Sc], [0, 1]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _RUE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceUnavailableException, __ResourceUnavailableException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RARN, _T], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateRescoreExecutionPlanRequest: StaticStructureSchema = [
  3,
  n0,
  _UREPR,
  0,
  [_I, _N, _D, _CU],
  [[0, 1], 0, 0, () => CapacityUnitsConfiguration],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var KendraRankingServiceException: StaticErrorSchema = [-3, _sm, "KendraRankingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(KendraRankingServiceException, __KendraRankingServiceException);

export var BodyTokensList = 64 | 0;

export var DocumentList: StaticListSchema = [1, n0, _DL, 0, () => Document];
export var RescoreExecutionPlanSummaryList: StaticListSchema = [1, n0, _REPSL, 0, () => RescoreExecutionPlanSummary];
export var RescoreResultItemList: StaticListSchema = [1, n0, _RRIL, 0, () => RescoreResultItem];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var TitleTokensList = 64 | 0;

export var CreateRescoreExecutionPlan: StaticOperationSchema = [
  9,
  n0,
  _CREP,
  {
    [_h]: ["POST", "/rescore-execution-plans", 200],
  },
  () => CreateRescoreExecutionPlanRequest,
  () => CreateRescoreExecutionPlanResponse,
];
export var DeleteRescoreExecutionPlan: StaticOperationSchema = [
  9,
  n0,
  _DREP,
  {
    [_h]: ["DELETE", "/rescore-execution-plans/{Id}", 200],
  },
  () => DeleteRescoreExecutionPlanRequest,
  () => __Unit,
];
export var DescribeRescoreExecutionPlan: StaticOperationSchema = [
  9,
  n0,
  _DREPe,
  {
    [_h]: ["GET", "/rescore-execution-plans/{Id}", 200],
  },
  () => DescribeRescoreExecutionPlanRequest,
  () => DescribeRescoreExecutionPlanResponse,
];
export var ListRescoreExecutionPlans: StaticOperationSchema = [
  9,
  n0,
  _LREP,
  {
    [_h]: ["GET", "/rescore-execution-plans", 200],
  },
  () => ListRescoreExecutionPlansRequest,
  () => ListRescoreExecutionPlansResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var Rescore: StaticOperationSchema = [
  9,
  n0,
  _R,
  {
    [_h]: ["POST", "/rescore-execution-plans/{RescoreExecutionPlanId}/rescore", 200],
  },
  () => RescoreRequest,
  () => RescoreResult,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateRescoreExecutionPlan: StaticOperationSchema = [
  9,
  n0,
  _UREP,
  {
    [_h]: ["PUT", "/rescore-execution-plans/{Id}", 200],
  },
  () => UpdateRescoreExecutionPlanRequest,
  () => __Unit,
];
