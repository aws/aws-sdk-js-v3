const _ADE = "AccessDeniedException";
const _ASV = "AssociateSourceViews";
const _ASVR = "AssociateSourceViewsRequest";
const _ASVRs = "AssociateSourceViewsResponse";
const _ATR = "ActiveTimeRange";
const _BVD = "BillingViewDescription";
const _BVE = "BillingViewElement";
const _BVHS = "BillingViewHealthStatus";
const _BVHSE = "BillingViewHealthStatusException";
const _BVL = "BillingViewList";
const _BVLE = "BillingViewListElement";
const _BVN = "BillingViewName";
const _CBV = "CreateBillingView";
const _CBVR = "CreateBillingViewRequest";
const _CBVRr = "CreateBillingViewResponse";
const _CE = "ConflictException";
const _DBV = "DeleteBillingView";
const _DBVR = "DeleteBillingViewRequest";
const _DBVRe = "DeleteBillingViewResponse";
const _DSV = "DisassociateSourceViews";
const _DSVR = "DisassociateSourceViewsRequest";
const _DSVRi = "DisassociateSourceViewsResponse";
const _DV = "DimensionValues";
const _E = "Expression";
const _GBV = "GetBillingView";
const _GBVR = "GetBillingViewRequest";
const _GBVRe = "GetBillingViewResponse";
const _GRP = "GetResourcePolicy";
const _GRPR = "GetResourcePolicyRequest";
const _GRPRe = "GetResourcePolicyResponse";
const _ISE = "InternalServerException";
const _LBV = "ListBillingViews";
const _LBVR = "ListBillingViewsRequest";
const _LBVRi = "ListBillingViewsResponse";
const _LSVFBV = "ListSourceViewsForBillingView";
const _LSVFBVR = "ListSourceViewsForBillingViewRequest";
const _LSVFBVRi = "ListSourceViewsForBillingViewResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTag";
const _RTL = "ResourceTagList";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "StringSearch";
const _SSt = "StringSearches";
const _TE = "ThrottlingException";
const _TR = "TimeRange";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TRa = "TagResource";
const _TV = "TagValues";
const _UBV = "UpdateBillingView";
const _UBVR = "UpdateBillingViewRequest";
const _UBVRp = "UpdateBillingViewResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _XACT = "X-Amzn-Client-Token";
const _a = "arn";
const _aAI = "activeAfterInclusive";
const _aBI = "activeBeforeInclusive";
const _aQE = "awsQueryError";
const _aTR = "activeTimeRange";
const _ar = "arns";
const _bDI = "beginDateInclusive";
const _bV = "billingView";
const _bVT = "billingViewType";
const _bVTi = "billingViewTypes";
const _bVi = "billingViews";
const _c = "client";
const _cA = "createdAt";
const _cT = "clientToken";
const _d = "description";
const _dFE = "dataFilterExpression";
const _dVC = "derivedViewCount";
const _di = "dimensions";
const _e = "error";
const _eDI = "endDateInclusive";
const _f = "force";
const _fL = "fieldList";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hS = "healthStatus";
const _iT = "idempotencyToken";
const _k = "key";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _na = "names";
const _oAI = "ownerAccountId";
const _p = "policy";
const _qC = "quotaCode";
const _r = "reason";
const _rA = "resourceArn";
const _rI = "resourceId";
const _rT = "resourceType";
const _rTK = "resourceTagKeys";
const _rTe = "resourceTags";
const _s = "server";
const _sAI = "sourceAccountId";
const _sC = "statusCode";
const _sCe = "serviceCode";
const _sO = "searchOption";
const _sR = "statusReasons";
const _sV = "sourceViews";
const _sVC = "sourceViewCount";
const _sVe = "searchValue";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.billing";
const _t = "tags";
const _tR = "timeRange";
const _uA = "updatedAt";
const _v = "values";
const _vDLUA = "viewDefinitionLastUpdatedAt";
const _va = "value";
const n0 = "com.amazonaws.billing";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
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
} from "../models/errors";

/* eslint no-var: 0 */
export var BillingViewDescription: StaticSimpleSchema = [0, n0, _BVD, 8, 0];
export var BillingViewName: StaticSimpleSchema = [0, n0, _BVN, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  { [_e]: _c, [_hE]: 403, [_aQE]: [`BillingAccessDenied`, 403] },
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
export var BillingViewHealthStatusException: StaticErrorSchema = [-3, n0, _BVHSE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
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
  { [_e]: _c, [_hE]: 409, [_aQE]: [`BillingConflict`, 409] },
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
    [0, { [_hH]: _XACT, [_iT]: 1 }],
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
  { [_e]: _s, [_hE]: 500, [_aQE]: [`BillingInternalServer`, 500] },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListBillingViewsRequest: StaticStructureSchema = [
  3,
  n0,
  _LBVR,
  0,
  [_aTR, _ar, _bVTi, _na, _oAI, _sAI, _mR, _nT],
  [() => ActiveTimeRange, 64 | 0, 64 | 0, () => StringSearches, 0, 0, 1, 0],
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
  { [_e]: _c, [_hE]: 404, [_aQE]: [`BillingResourceNotFound`, 404] },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var ResourceTag: StaticStructureSchema = [3, n0, _RT, 0, [_k, _va], [0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402, [_aQE]: [`BillingServiceQuotaExceeded`, 402] },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var StringSearch: StaticStructureSchema = [3, n0, _SS, 0, [_sO, _sVe], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _rTe], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TagValues: StaticStructureSchema = [3, n0, _TV, 0, [_k, _v], [0, 64 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429, [_aQE]: [`BillingThrottling`, 429] },
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
  { [_e]: _c, [_hE]: 400, [_aQE]: [`BillingValidation`, 400] },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var BillingServiceException: StaticErrorSchema = [-3, _sm, "BillingServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(BillingServiceException, __BillingServiceException);
export var BillingViewArnList = 64 | 0;
export var BillingViewList: StaticListSchema = [1, n0, _BVL, 0, [() => BillingViewListElement, 0]];
export var BillingViewSourceViewsList = 64 | 0;
export var BillingViewStatusReasons = 64 | 0;
export var BillingViewTypeList = 64 | 0;
export var ResourceTagKeyList = 64 | 0;
export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var StringSearches: StaticListSchema = [1, n0, _SSt, 0, () => StringSearch];
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
  { [_h]: ["POST", "/", 200] },
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
