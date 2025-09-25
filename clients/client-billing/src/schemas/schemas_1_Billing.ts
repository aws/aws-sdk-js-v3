// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _aAI,
  _aBI,
  _ADE,
  _aQE,
  _ar,
  _ATR,
  _aTR,
  _bV,
  _BVD,
  _BVE,
  _bVi,
  _BVL,
  _BVLE,
  _BVN,
  _bVT,
  _bVTi,
  _c,
  _cA,
  _CBV,
  _CBVR,
  _CBVRr,
  _CE,
  _cT,
  _d,
  _DBV,
  _DBVR,
  _DBVRe,
  _dFE,
  _di,
  _DV,
  _E,
  _e,
  _fL,
  _GBV,
  _GBVR,
  _GBVRe,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _hH,
  _ISE,
  _iT,
  _k,
  _LBV,
  _LBVR,
  _LBVRi,
  _LSVFBV,
  _LSVFBVR,
  _LSVFBVRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mR,
  _n,
  _nT,
  _oAI,
  _p,
  _qC,
  _r,
  _rA,
  _rI,
  _RNFE,
  _RT,
  _rT,
  _rTe,
  _rTK,
  _RTL,
  _s,
  _sC,
  _SQEE,
  _sV,
  _t,
  _TE,
  _TR,
  _TRR,
  _TRRa,
  _TV,
  _uA,
  _UBV,
  _UBVR,
  _UBVRp,
  _UR,
  _URR,
  _URRn,
  _v,
  _va,
  _VE,
  _VEF,
  _VEFL,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BillingViewDescription = sim(n0, _BVD, 0, 8);
export var BillingViewName = sim(n0, _BVN, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`BillingAccessDenied`, 403],
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ActiveTimeRange = struct(n0, _ATR, 0, [_aAI, _aBI], [4, 4]);
export var BillingViewElement = struct(
  n0,
  _BVE,
  0,
  [_a, _n, _d, _bVT, _oAI, _dFE, _cA, _uA],
  [0, [() => BillingViewName, 0], [() => BillingViewDescription, 0], 0, 0, () => Expression, 4, 4]
);
export var BillingViewListElement = struct(
  n0,
  _BVLE,
  0,
  [_a, _n, _d, _oAI, _bVT],
  [0, [() => BillingViewName, 0], [() => BillingViewDescription, 0], 0, 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`BillingConflict`, 409],
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateBillingViewRequest = struct(
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
  ]
);
export var CreateBillingViewResponse = struct(n0, _CBVRr, 0, [_a, _cA], [0, 4]);
export var DeleteBillingViewRequest = struct(n0, _DBVR, 0, [_a], [0]);
export var DeleteBillingViewResponse = struct(n0, _DBVRe, 0, [_a], [0]);
export var DimensionValues = struct(n0, _DV, 0, [_k, _v], [0, 64 | 0]);
export var Expression = struct(n0, _E, 0, [_di, _t], [() => DimensionValues, () => TagValues]);
export var GetBillingViewRequest = struct(n0, _GBVR, 0, [_a], [0]);
export var GetBillingViewResponse = struct(n0, _GBVRe, 0, [_bV], [[() => BillingViewElement, 0]]);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_rA], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_rA, _p], [0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`BillingInternalServer`, 500],
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListBillingViewsRequest = struct(
  n0,
  _LBVR,
  0,
  [_aTR, _ar, _bVTi, _oAI, _mR, _nT],
  [() => ActiveTimeRange, 64 | 0, 64 | 0, 0, 1, 0]
);
export var ListBillingViewsResponse = struct(n0, _LBVRi, 0, [_bVi, _nT], [[() => BillingViewList, 0], 0]);
export var ListSourceViewsForBillingViewRequest = struct(n0, _LSVFBVR, 0, [_a, _mR, _nT], [0, 1, 0]);
export var ListSourceViewsForBillingViewResponse = struct(n0, _LSVFBVRi, 0, [_sV, _nT], [64 | 0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_rTe], [() => ResourceTagList]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`BillingResourceNotFound`, 404],
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ResourceTag = struct(n0, _RT, 0, [_k, _va], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`BillingServiceQuotaExceeded`, 402],
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _rTe], [0, () => ResourceTagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagValues = struct(n0, _TV, 0, [_k, _v], [0, 64 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`BillingThrottling`, 429],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _rTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateBillingViewRequest = struct(
  n0,
  _UBVR,
  0,
  [_a, _n, _d, _dFE],
  [0, [() => BillingViewName, 0], [() => BillingViewDescription, 0], () => Expression]
);
export var UpdateBillingViewResponse = struct(n0, _UBVRp, 0, [_a, _uA], [0, 4]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BillingValidation`, 400],
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var BillingViewArnList = 64 | 0;

export var BillingViewList = list(n0, _BVL, 0, [() => BillingViewListElement, 0]);
export var BillingViewSourceViewsList = 64 | 0;

export var BillingViewTypeList = 64 | 0;

export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var Values = 64 | 0;

export var CreateBillingView = op(
  n0,
  _CBV,
  2,
  () => CreateBillingViewRequest,
  () => CreateBillingViewResponse
);
export var DeleteBillingView = op(
  n0,
  _DBV,
  2,
  () => DeleteBillingViewRequest,
  () => DeleteBillingViewResponse
);
export var GetBillingView = op(
  n0,
  _GBV,
  0,
  () => GetBillingViewRequest,
  () => GetBillingViewResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListBillingViews = op(
  n0,
  _LBV,
  {
    [_h]: ["POST", "/", 200],
  },
  () => ListBillingViewsRequest,
  () => ListBillingViewsResponse
);
export var ListSourceViewsForBillingView = op(
  n0,
  _LSVFBV,
  0,
  () => ListSourceViewsForBillingViewRequest,
  () => ListSourceViewsForBillingViewResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateBillingView = op(
  n0,
  _UBV,
  2,
  () => UpdateBillingViewRequest,
  () => UpdateBillingViewResponse
);
