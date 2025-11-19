const _A = "Arn";
const _ADE = "AccessDeniedException";
const _B = "Body";
const _CA = "CreatedAt";
const _CE = "ConflictException";
const _CREP = "CreateRescoreExecutionPlan";
const _CREPR = "CreateRescoreExecutionPlanRequest";
const _CREPRr = "CreateRescoreExecutionPlanResponse";
const _CT = "ClientToken";
const _CU = "CapacityUnits";
const _CUC = "CapacityUnitsConfiguration";
const _D = "Description";
const _DI = "DocumentId";
const _DL = "DocumentList";
const _DREP = "DeleteRescoreExecutionPlan";
const _DREPR = "DeleteRescoreExecutionPlanRequest";
const _DREPRe = "DescribeRescoreExecutionPlanRequest";
const _DREPRes = "DescribeRescoreExecutionPlanResponse";
const _DREPe = "DescribeRescoreExecutionPlan";
const _Do = "Document";
const _Doc = "Documents";
const _EM = "ErrorMessage";
const _GI = "GroupId";
const _I = "Id";
const _ISE = "InternalServerException";
const _K = "Key";
const _LREP = "ListRescoreExecutionPlans";
const _LREPR = "ListRescoreExecutionPlansRequest";
const _LREPRi = "ListRescoreExecutionPlansResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _OS = "OriginalScore";
const _R = "Rescore";
const _RARN = "ResourceARN";
const _RCU = "RescoreCapacityUnits";
const _REPI = "RescoreExecutionPlanId";
const _REPS = "RescoreExecutionPlanSummary";
const _REPSL = "RescoreExecutionPlanSummaryList";
const _RI = "RescoreId";
const _RIe = "ResultItems";
const _RNFE = "ResourceNotFoundException";
const _RR = "RescoreRequest";
const _RRI = "RescoreResultItem";
const _RRIL = "RescoreResultItemList";
const _RRe = "RescoreResult";
const _RUE = "ResourceUnavailableException";
const _S = "Status";
const _SI = "SummaryItems";
const _SQ = "SearchQuery";
const _SQEE = "ServiceQuotaExceededException";
const _Sc = "Score";
const _T = "Tags";
const _TB = "TokenizedBody";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TT = "TokenizedTitle";
const _Ta = "Tag";
const _Ti = "Title";
const _UA = "UpdatedAt";
const _UR = "UntagResource";
const _UREP = "UpdateRescoreExecutionPlan";
const _UREPR = "UpdateRescoreExecutionPlanRequest";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.kendraranking";
const n0 = "com.amazonaws.kendraranking";

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
} from "../models/errors";
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
