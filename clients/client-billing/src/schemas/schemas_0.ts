export const _ADE = "AccessDeniedException";
export const _ASV = "AssociateSourceViews";
export const _ASVR = "AssociateSourceViewsRequest";
export const _ASVRs = "AssociateSourceViewsResponse";
export const _ATR = "ActiveTimeRange";
export const _BVD = "BillingViewDescription";
export const _BVE = "BillingViewElement";
export const _BVHS = "BillingViewHealthStatus";
export const _BVHSE = "BillingViewHealthStatusException";
export const _BVL = "BillingViewList";
export const _BVLE = "BillingViewListElement";
export const _BVN = "BillingViewName";
export const _CBV = "CreateBillingView";
export const _CBVR = "CreateBillingViewRequest";
export const _CBVRr = "CreateBillingViewResponse";
export const _CE = "ConflictException";
export const _DBV = "DeleteBillingView";
export const _DBVR = "DeleteBillingViewRequest";
export const _DBVRe = "DeleteBillingViewResponse";
export const _DSV = "DisassociateSourceViews";
export const _DSVR = "DisassociateSourceViewsRequest";
export const _DSVRi = "DisassociateSourceViewsResponse";
export const _DV = "DimensionValues";
export const _E = "Expression";
export const _GBV = "GetBillingView";
export const _GBVR = "GetBillingViewRequest";
export const _GBVRe = "GetBillingViewResponse";
export const _GRP = "GetResourcePolicy";
export const _GRPR = "GetResourcePolicyRequest";
export const _GRPRe = "GetResourcePolicyResponse";
export const _ISE = "InternalServerException";
export const _LBV = "ListBillingViews";
export const _LBVR = "ListBillingViewsRequest";
export const _LBVRi = "ListBillingViewsResponse";
export const _LSVFBV = "ListSourceViewsForBillingView";
export const _LSVFBVR = "ListSourceViewsForBillingViewRequest";
export const _LSVFBVRi = "ListSourceViewsForBillingViewResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceTag";
export const _RTL = "ResourceTagList";
export const _SQEE = "ServiceQuotaExceededException";
export const _TE = "ThrottlingException";
export const _TR = "TimeRange";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TRa = "TagResource";
export const _TV = "TagValues";
export const _UBV = "UpdateBillingView";
export const _UBVR = "UpdateBillingViewRequest";
export const _UBVRp = "UpdateBillingViewResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _XACT = "X-Amzn-Client-Token";
export const _a = "arn";
export const _aAI = "activeAfterInclusive";
export const _aBI = "activeBeforeInclusive";
export const _aQE = "awsQueryError";
export const _aTR = "activeTimeRange";
export const _ar = "arns";
export const _bDI = "beginDateInclusive";
export const _bV = "billingView";
export const _bVT = "billingViewType";
export const _bVTi = "billingViewTypes";
export const _bVi = "billingViews";
export const _c = "client";
export const _cA = "createdAt";
export const _cT = "clientToken";
export const _d = "description";
export const _dFE = "dataFilterExpression";
export const _dVC = "derivedViewCount";
export const _di = "dimensions";
export const _e = "error";
export const _eDI = "endDateInclusive";
export const _f = "force";
export const _fL = "fieldList";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hS = "healthStatus";
export const _iT = "idempotencyToken";
export const _k = "key";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _oAI = "ownerAccountId";
export const _p = "policy";
export const _qC = "quotaCode";
export const _r = "reason";
export const _rA = "resourceArn";
export const _rI = "resourceId";
export const _rT = "resourceType";
export const _rTK = "resourceTagKeys";
export const _rTe = "resourceTags";
export const _s = "server";
export const _sAI = "sourceAccountId";
export const _sC = "statusCode";
export const _sCe = "serviceCode";
export const _sR = "statusReasons";
export const _sV = "sourceViews";
export const _sVC = "sourceViewCount";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.billing";
export const _t = "tags";
export const _tR = "timeRange";
export const _uA = "updatedAt";
export const _v = "values";
export const _vDLUA = "viewDefinitionLastUpdatedAt";
export const _va = "value";
export const n0 = "com.amazonaws.billing";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { BillingServiceException as __BillingServiceException } from "../models/BillingServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  BillingViewHealthStatusException as __BillingViewHealthStatusException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var BillingViewDescription: StaticSimpleSchema = [0, n0, _BVD, 8, 0];
export var BillingViewName: StaticSimpleSchema = [0, n0, _BVN, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`BillingAccessDenied`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ActiveTimeRange: StaticStructureSchema = [3, n0, _ATR, 0, [_aAI, _aBI], [4, 4]];
export var AssociateSourceViewsRequest: StaticStructureSchema = [3, n0, _ASVR, 0, [_a, _sV], [0, 64 | 0]];
export var AssociateSourceViewsResponse: StaticStructureSchema = [3, n0, _ASVRs, 0, [_a], [0]];
export var BillingViewElement: StaticStructureSchema = [
  3,
  n0,
  _BVE,
  0,
  [_a, _n, _d, _bVT, _oAI, _sAI, _dFE, _cA, _uA, _dVC, _sVC, _vDLUA, _hS],
  [
    0,
    [() => BillingViewName, 0],
    [() => BillingViewDescription, 0],
    0,
    0,
    0,
    () => Expression,
    4,
    4,
    1,
    1,
    4,
    () => BillingViewHealthStatus,
  ],
];
export var BillingViewHealthStatus: StaticStructureSchema = [3, n0, _BVHS, 0, [_sC, _sR], [0, 64 | 0]];
export var BillingViewHealthStatusException: StaticErrorSchema = [
  -3,
  n0,
  _BVHSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BillingViewHealthStatusException, __BillingViewHealthStatusException);

export var BillingViewListElement: StaticStructureSchema = [
  3,
  n0,
  _BVLE,
  0,
  [_a, _n, _d, _oAI, _sAI, _bVT, _hS],
  [0, [() => BillingViewName, 0], [() => BillingViewDescription, 0], 0, 0, 0, () => BillingViewHealthStatus],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`BillingConflict`, 409],
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateBillingViewRequest: StaticStructureSchema = [
  3,
  n0,
  _CBVR,
  0,
  [_n, _d, _sV, _dFE, _cT, _rTe],
  [
    [() => BillingViewName, 0],
    [() => BillingViewDescription, 0],
    64 | 0,
    () => Expression,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    () => ResourceTagList,
  ],
];
export var CreateBillingViewResponse: StaticStructureSchema = [3, n0, _CBVRr, 0, [_a, _cA], [0, 4]];
export var DeleteBillingViewRequest: StaticStructureSchema = [3, n0, _DBVR, 0, [_a, _f], [0, 2]];
export var DeleteBillingViewResponse: StaticStructureSchema = [3, n0, _DBVRe, 0, [_a], [0]];
export var DimensionValues: StaticStructureSchema = [3, n0, _DV, 0, [_k, _v], [0, 64 | 0]];
export var DisassociateSourceViewsRequest: StaticStructureSchema = [3, n0, _DSVR, 0, [_a, _sV], [0, 64 | 0]];
export var DisassociateSourceViewsResponse: StaticStructureSchema = [3, n0, _DSVRi, 0, [_a], [0]];
export var Expression: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_di, _t, _tR],
  [() => DimensionValues, () => TagValues, () => TimeRange],
];
export var GetBillingViewRequest: StaticStructureSchema = [3, n0, _GBVR, 0, [_a], [0]];
export var GetBillingViewResponse: StaticStructureSchema = [3, n0, _GBVRe, 0, [_bV], [[() => BillingViewElement, 0]]];
export var GetResourcePolicyRequest: StaticStructureSchema = [3, n0, _GRPR, 0, [_rA], [0]];
export var GetResourcePolicyResponse: StaticStructureSchema = [3, n0, _GRPRe, 0, [_rA, _p], [0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`BillingInternalServer`, 500],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListBillingViewsRequest: StaticStructureSchema = [
  3,
  n0,
  _LBVR,
  0,
  [_aTR, _ar, _bVTi, _oAI, _sAI, _mR, _nT],
  [() => ActiveTimeRange, 64 | 0, 64 | 0, 0, 0, 1, 0],
];
export var ListBillingViewsResponse: StaticStructureSchema = [
  3,
  n0,
  _LBVRi,
  0,
  [_bVi, _nT],
  [[() => BillingViewList, 0], 0],
];
export var ListSourceViewsForBillingViewRequest: StaticStructureSchema = [
  3,
  n0,
  _LSVFBVR,
  0,
  [_a, _mR, _nT],
  [0, 1, 0],
];
export var ListSourceViewsForBillingViewResponse: StaticStructureSchema = [
  3,
  n0,
  _LSVFBVRi,
  0,
  [_sV, _nT],
  [64 | 0, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_rTe], [() => ResourceTagList]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`BillingResourceNotFound`, 404],
  },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceTag: StaticStructureSchema = [3, n0, _RT, 0, [_k, _va], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`BillingServiceQuotaExceeded`, 402],
  },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _rTe], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TagValues: StaticStructureSchema = [3, n0, _TV, 0, [_k, _v], [0, 64 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`BillingThrottling`, 429],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TimeRange: StaticStructureSchema = [3, n0, _TR, 0, [_bDI, _eDI], [4, 4]];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rA, _rTK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateBillingViewRequest: StaticStructureSchema = [
  3,
  n0,
  _UBVR,
  0,
  [_a, _n, _d, _dFE],
  [0, [() => BillingViewName, 0], [() => BillingViewDescription, 0], () => Expression],
];
export var UpdateBillingViewResponse: StaticStructureSchema = [3, n0, _UBVRp, 0, [_a, _uA], [0, 4]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BillingValidation`, 400],
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;

export var BillingServiceException: StaticErrorSchema = [-3, _sm, "BillingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(BillingServiceException, __BillingServiceException);

export var BillingViewArnList = 64 | 0;

export var BillingViewList: StaticListSchema = [1, n0, _BVL, 0, [() => BillingViewListElement, 0]];
export var BillingViewSourceViewsList = 64 | 0;

export var BillingViewStatusReasons = 64 | 0;

export var BillingViewTypeList = 64 | 0;

export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var Values = 64 | 0;

export var AssociateSourceViews: StaticOperationSchema = [
  9,
  n0,
  _ASV,
  2,
  () => AssociateSourceViewsRequest,
  () => AssociateSourceViewsResponse,
];
export var CreateBillingView: StaticOperationSchema = [
  9,
  n0,
  _CBV,
  2,
  () => CreateBillingViewRequest,
  () => CreateBillingViewResponse,
];
export var DeleteBillingView: StaticOperationSchema = [
  9,
  n0,
  _DBV,
  2,
  () => DeleteBillingViewRequest,
  () => DeleteBillingViewResponse,
];
export var DisassociateSourceViews: StaticOperationSchema = [
  9,
  n0,
  _DSV,
  2,
  () => DisassociateSourceViewsRequest,
  () => DisassociateSourceViewsResponse,
];
export var GetBillingView: StaticOperationSchema = [
  9,
  n0,
  _GBV,
  0,
  () => GetBillingViewRequest,
  () => GetBillingViewResponse,
];
export var GetResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse,
];
export var ListBillingViews: StaticOperationSchema = [
  9,
  n0,
  _LBV,
  {
    [_h]: ["POST", "/", 200],
  },
  () => ListBillingViewsRequest,
  () => ListBillingViewsResponse,
];
export var ListSourceViewsForBillingView: StaticOperationSchema = [
  9,
  n0,
  _LSVFBV,
  0,
  () => ListSourceViewsForBillingViewRequest,
  () => ListSourceViewsForBillingViewResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TRa, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateBillingView: StaticOperationSchema = [
  9,
  n0,
  _UBV,
  2,
  () => UpdateBillingViewRequest,
  () => UpdateBillingViewResponse,
];
