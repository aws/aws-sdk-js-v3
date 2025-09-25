// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ADE,
  _an,
  _c,
  _cA,
  _cAU,
  _CAUQ,
  _cC,
  _CCV,
  _CD,
  _CDR,
  _CDRr,
  _co,
  _d,
  _da,
  _DC,
  _dC,
  _DD,
  _DDR,
  _DDRe,
  _di,
  _DR,
  _DRL,
  _DTR,
  _DTV,
  _DV,
  _E,
  _e,
  _eT,
  _Ex,
  _f,
  _g,
  _gB,
  _GD,
  _GDC,
  _GDCM,
  _GDe,
  _GDR,
  _GDr,
  _GDRe,
  _gr,
  _GRP,
  _GRPR,
  _GRPRe,
  _h,
  _hE,
  _hO,
  _ISE,
  _k,
  _LD,
  _LDR,
  _LDRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _me,
  _mO,
  _mR,
  _n,
  _no,
  _nT,
  _o,
  _pD,
  _QP,
  _qP,
  _rA,
  _rC,
  _RCQ,
  _RNFE,
  _RT,
  _rT,
  _rTK,
  _RTL,
  _rU,
  _RUQ,
  _s,
  _sPC,
  _SPCQ,
  _sPU,
  _SPUQ,
  _SQEE,
  _sT,
  _t,
  _ta,
  _tab,
  _TDCS,
  _TE,
  _ti,
  _TR,
  _tR,
  _TRR,
  _TRRa,
  _TV,
  _uA,
  _UD,
  _UDR,
  _UDRp,
  _UR,
  _URR,
  _URRn,
  _v,
  _va,
  _VE,
  _vT,
  _W,
  _w,
  _WC,
  _WCL,
  _wi,
  _WL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var CostAndUsageQuery = struct(
  n0,
  _CAUQ,
  0,
  [_me, _tR, _g, _gB, _f],
  [64 | 0, () => DateTimeRange, 0, () => GroupDefinitions, () => Expression]
);
export var CostCategoryValues = struct(n0, _CCV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]);
export var CreateDashboardRequest = struct(
  n0,
  _CDR,
  0,
  [_n, _d, _w, _rT],
  [0, 0, () => WidgetList, () => ResourceTagList]
);
export var CreateDashboardResponse = struct(n0, _CDRr, 0, [_a], [0]);
export var DashboardReference = struct(n0, _DR, 0, [_a, _n, _d, _t, _cA, _uA], [0, 0, 0, 0, 4, 4]);
export var DateTimeRange = struct(n0, _DTR, 0, [_sT, _eT], [() => DateTimeValue, () => DateTimeValue]);
export var DateTimeValue = struct(n0, _DTV, 0, [_t, _va], [0, 0]);
export var DeleteDashboardRequest = struct(n0, _DDR, 0, [_a], [0]);
export var DeleteDashboardResponse = struct(n0, _DDRe, 0, [_a], [0]);
export var DimensionValues = struct(n0, _DV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]);
export var Expression = struct(
  n0,
  _E,
  0,
  [_o, _an, _no, _di, _ta, _cC],
  [
    () => Expressions,
    () => Expressions,
    () => Expression,
    () => DimensionValues,
    () => TagValues,
    () => CostCategoryValues,
  ]
);
export var GetDashboardRequest = struct(n0, _GDR, 0, [_a], [0]);
export var GetDashboardResponse = struct(
  n0,
  _GDRe,
  0,
  [_a, _n, _d, _t, _w, _cA, _uA],
  [0, 0, 0, 0, () => WidgetList, 4, 4]
);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_rA], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_rA, _pD], [0, 0]);
export var GraphDisplayConfig = struct(n0, _GDC, 0, [_vT], [0]);
export var GroupDefinition = struct(n0, _GD, 0, [_k, _t], [0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListDashboardsRequest = struct(n0, _LDR, 0, [_mR, _nT], [1, 0]);
export var ListDashboardsResponse = struct(n0, _LDRi, 0, [_da, _nT], [() => DashboardReferenceList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_rT], [() => ResourceTagList]);
export var ReservationCoverageQuery = struct(
  n0,
  _RCQ,
  0,
  [_tR, _gB, _g, _f, _me],
  [() => DateTimeRange, () => GroupDefinitions, 0, () => Expression, 64 | 0]
);
export var ReservationUtilizationQuery = struct(
  n0,
  _RUQ,
  0,
  [_tR, _gB, _g, _f],
  [() => DateTimeRange, () => GroupDefinitions, 0, () => Expression]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ResourceTag = struct(n0, _RT, 0, [_k, _va], [0, 0]);
export var SavingsPlansCoverageQuery = struct(
  n0,
  _SPCQ,
  0,
  [_tR, _me, _g, _gB, _f],
  [() => DateTimeRange, 64 | 0, 0, () => GroupDefinitions, () => Expression]
);
export var SavingsPlansUtilizationQuery = struct(
  n0,
  _SPUQ,
  0,
  [_tR, _g, _f],
  [() => DateTimeRange, 0, () => Expression]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TableDisplayConfigStruct = struct(n0, _TDCS, 0, [], []);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _rT], [0, () => ResourceTagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TagValues = struct(n0, _TV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _rTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateDashboardRequest = struct(n0, _UDR, 0, [_a, _n, _d, _w], [0, 0, 0, () => WidgetList]);
export var UpdateDashboardResponse = struct(n0, _UDRp, 0, [_a], [0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Widget = struct(n0, _W, 0, [_ti, _d, _wi, _h, _hO, _co], [0, 0, 1, 1, 1, () => WidgetConfigList]);
export var WidgetConfig = struct(n0, _WC, 0, [_qP, _dC], [() => QueryParameters, () => DisplayConfig]);
export var Unit = "unit" as const;

export var DashboardReferenceList = list(n0, _DRL, 0, () => DashboardReference);
export var Expressions = list(n0, _Ex, 0, () => Expression);
export var GroupDefinitions = list(n0, _GDr, 0, () => GroupDefinition);
export var MatchOptions = 64 | 0;

export var MetricNames = 64 | 0;

export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var StringList = 64 | 0;

export var WidgetConfigList = list(n0, _WCL, 0, () => WidgetConfig);
export var WidgetList = list(n0, _WL, 0, () => Widget);
export var GraphDisplayConfigMap = map(n0, _GDCM, 0, 0, () => GraphDisplayConfig);
export var DisplayConfig = uni(n0, _DC, 0, [_gr, _tab], [() => GraphDisplayConfigMap, () => TableDisplayConfigStruct]);
export var QueryParameters = uni(
  n0,
  _QP,
  0,
  [_cAU, _sPC, _sPU, _rC, _rU],
  [
    () => CostAndUsageQuery,
    () => SavingsPlansCoverageQuery,
    () => SavingsPlansUtilizationQuery,
    () => ReservationCoverageQuery,
    () => ReservationUtilizationQuery,
  ]
);
export var CreateDashboard = op(
  n0,
  _CD,
  0,
  () => CreateDashboardRequest,
  () => CreateDashboardResponse
);
export var DeleteDashboard = op(
  n0,
  _DD,
  0,
  () => DeleteDashboardRequest,
  () => DeleteDashboardResponse
);
export var GetDashboard = op(
  n0,
  _GDe,
  0,
  () => GetDashboardRequest,
  () => GetDashboardResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var ListDashboards = op(
  n0,
  _LD,
  0,
  () => ListDashboardsRequest,
  () => ListDashboardsResponse
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
export var UpdateDashboard = op(
  n0,
  _UD,
  0,
  () => UpdateDashboardRequest,
  () => UpdateDashboardResponse
);
