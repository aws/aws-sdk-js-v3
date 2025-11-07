export const _ADE = "AccessDeniedException";
export const _CAUQ = "CostAndUsageQuery";
export const _CCV = "CostCategoryValues";
export const _CD = "CreateDashboard";
export const _CDR = "CreateDashboardRequest";
export const _CDRr = "CreateDashboardResponse";
export const _DC = "DisplayConfig";
export const _DD = "DeleteDashboard";
export const _DDR = "DeleteDashboardRequest";
export const _DDRe = "DeleteDashboardResponse";
export const _DR = "DashboardReference";
export const _DRL = "DashboardReferenceList";
export const _DTR = "DateTimeRange";
export const _DTV = "DateTimeValue";
export const _DV = "DimensionValues";
export const _E = "Expression";
export const _Ex = "Expressions";
export const _GD = "GroupDefinition";
export const _GDC = "GraphDisplayConfig";
export const _GDCM = "GraphDisplayConfigMap";
export const _GDR = "GetDashboardRequest";
export const _GDRe = "GetDashboardResponse";
export const _GDe = "GetDashboard";
export const _GDr = "GroupDefinitions";
export const _GRP = "GetResourcePolicy";
export const _GRPR = "GetResourcePolicyRequest";
export const _GRPRe = "GetResourcePolicyResponse";
export const _ISE = "InternalServerException";
export const _LD = "ListDashboards";
export const _LDR = "ListDashboardsRequest";
export const _LDRi = "ListDashboardsResponse";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _QP = "QueryParameters";
export const _RCQ = "ReservationCoverageQuery";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceTag";
export const _RTL = "ResourceTagList";
export const _RUQ = "ReservationUtilizationQuery";
export const _SPCQ = "SavingsPlansCoverageQuery";
export const _SPUQ = "SavingsPlansUtilizationQuery";
export const _SQEE = "ServiceQuotaExceededException";
export const _TDCS = "TableDisplayConfigStruct";
export const _TE = "ThrottlingException";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TV = "TagValues";
export const _UD = "UpdateDashboard";
export const _UDR = "UpdateDashboardRequest";
export const _UDRp = "UpdateDashboardResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VE = "ValidationException";
export const _W = "Widget";
export const _WC = "WidgetConfig";
export const _WCL = "WidgetConfigList";
export const _WL = "WidgetList";
export const _a = "arn";
export const _an = "and";
export const _c = "client";
export const _cA = "createdAt";
export const _cAU = "costAndUsage";
export const _cC = "costCategories";
export const _co = "configs";
export const _d = "description";
export const _dC = "displayConfig";
export const _da = "dashboards";
export const _di = "dimensions";
export const _e = "error";
export const _eT = "endTime";
export const _f = "filter";
export const _g = "granularity";
export const _gB = "groupBy";
export const _gr = "graph";
export const _h = "height";
export const _hE = "httpError";
export const _hO = "horizontalOffset";
export const _k = "key";
export const _m = "message";
export const _mO = "matchOptions";
export const _mR = "maxResults";
export const _me = "metrics";
export const _n = "name";
export const _nT = "nextToken";
export const _no = "not";
export const _o = "or";
export const _pD = "policyDocument";
export const _qP = "queryParameters";
export const _rA = "resourceArn";
export const _rC = "reservationCoverage";
export const _rT = "resourceTags";
export const _rTK = "resourceTagKeys";
export const _rU = "reservationUtilization";
export const _s = "server";
export const _sPC = "savingsPlansCoverage";
export const _sPU = "savingsPlansUtilization";
export const _sT = "startTime";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bcmdashboards";
export const _t = "type";
export const _tR = "timeRange";
export const _ta = "tags";
export const _tab = "table";
export const _ti = "title";
export const _uA = "updatedAt";
export const _v = "values";
export const _vT = "visualType";
export const _va = "value";
export const _w = "widgets";
export const _wi = "width";
export const n0 = "com.amazonaws.bcmdashboards";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { BCMDashboardsServiceException as __BCMDashboardsServiceException } from "../models/BCMDashboardsServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var CostAndUsageQuery: StaticStructureSchema = [
  3,
  n0,
  _CAUQ,
  0,
  [_me, _tR, _g, _gB, _f],
  [64 | 0, () => DateTimeRange, 0, () => GroupDefinitions, () => Expression],
];
export var CostCategoryValues: StaticStructureSchema = [3, n0, _CCV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]];
export var CreateDashboardRequest: StaticStructureSchema = [
  3,
  n0,
  _CDR,
  0,
  [_n, _d, _w, _rT],
  [0, 0, () => WidgetList, () => ResourceTagList],
];
export var CreateDashboardResponse: StaticStructureSchema = [3, n0, _CDRr, 0, [_a], [0]];
export var DashboardReference: StaticStructureSchema = [3, n0, _DR, 0, [_a, _n, _d, _t, _cA, _uA], [0, 0, 0, 0, 4, 4]];
export var DateTimeRange: StaticStructureSchema = [
  3,
  n0,
  _DTR,
  0,
  [_sT, _eT],
  [() => DateTimeValue, () => DateTimeValue],
];
export var DateTimeValue: StaticStructureSchema = [3, n0, _DTV, 0, [_t, _va], [0, 0]];
export var DeleteDashboardRequest: StaticStructureSchema = [3, n0, _DDR, 0, [_a], [0]];
export var DeleteDashboardResponse: StaticStructureSchema = [3, n0, _DDRe, 0, [_a], [0]];
export var DimensionValues: StaticStructureSchema = [3, n0, _DV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]];
export var Expression: StaticStructureSchema = [
  3,
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
  ],
];
export var GetDashboardRequest: StaticStructureSchema = [3, n0, _GDR, 0, [_a], [0]];
export var GetDashboardResponse: StaticStructureSchema = [
  3,
  n0,
  _GDRe,
  0,
  [_a, _n, _d, _t, _w, _cA, _uA],
  [0, 0, 0, 0, () => WidgetList, 4, 4],
];
export var GetResourcePolicyRequest: StaticStructureSchema = [3, n0, _GRPR, 0, [_rA], [0]];
export var GetResourcePolicyResponse: StaticStructureSchema = [3, n0, _GRPRe, 0, [_rA, _pD], [0, 0]];
export var GraphDisplayConfig: StaticStructureSchema = [3, n0, _GDC, 0, [_vT], [0]];
export var GroupDefinition: StaticStructureSchema = [3, n0, _GD, 0, [_k, _t], [0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListDashboardsRequest: StaticStructureSchema = [3, n0, _LDR, 0, [_mR, _nT], [1, 0]];
export var ListDashboardsResponse: StaticStructureSchema = [
  3,
  n0,
  _LDRi,
  0,
  [_da, _nT],
  [() => DashboardReferenceList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_rT], [() => ResourceTagList]];
export var ReservationCoverageQuery: StaticStructureSchema = [
  3,
  n0,
  _RCQ,
  0,
  [_tR, _gB, _g, _f, _me],
  [() => DateTimeRange, () => GroupDefinitions, 0, () => Expression, 64 | 0],
];
export var ReservationUtilizationQuery: StaticStructureSchema = [
  3,
  n0,
  _RUQ,
  0,
  [_tR, _gB, _g, _f],
  [() => DateTimeRange, () => GroupDefinitions, 0, () => Expression],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceTag: StaticStructureSchema = [3, n0, _RT, 0, [_k, _va], [0, 0]];
export var SavingsPlansCoverageQuery: StaticStructureSchema = [
  3,
  n0,
  _SPCQ,
  0,
  [_tR, _me, _g, _gB, _f],
  [() => DateTimeRange, 64 | 0, 0, () => GroupDefinitions, () => Expression],
];
export var SavingsPlansUtilizationQuery: StaticStructureSchema = [
  3,
  n0,
  _SPUQ,
  0,
  [_tR, _g, _f],
  [() => DateTimeRange, 0, () => Expression],
];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var TableDisplayConfigStruct: StaticStructureSchema = [3, n0, _TDCS, 0, [], []];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _rT], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TagValues: StaticStructureSchema = [3, n0, _TV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_rA, _rTK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateDashboardRequest: StaticStructureSchema = [
  3,
  n0,
  _UDR,
  0,
  [_a, _n, _d, _w],
  [0, 0, 0, () => WidgetList],
];
export var UpdateDashboardResponse: StaticStructureSchema = [3, n0, _UDRp, 0, [_a], [0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var Widget: StaticStructureSchema = [
  3,
  n0,
  _W,
  0,
  [_ti, _d, _wi, _h, _hO, _co],
  [0, 0, 1, 1, 1, () => WidgetConfigList],
];
export var WidgetConfig: StaticStructureSchema = [
  3,
  n0,
  _WC,
  0,
  [_qP, _dC],
  [() => QueryParameters, () => DisplayConfig],
];
export var __Unit = "unit" as const;

export var BCMDashboardsServiceException: StaticErrorSchema = [-3, _sm, "BCMDashboardsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(BCMDashboardsServiceException, __BCMDashboardsServiceException);

export var DashboardReferenceList: StaticListSchema = [1, n0, _DRL, 0, () => DashboardReference];
export var Expressions: StaticListSchema = [1, n0, _Ex, 0, () => Expression];
export var GroupDefinitions: StaticListSchema = [1, n0, _GDr, 0, () => GroupDefinition];
export var MatchOptions = 64 | 0;

export var MetricNames = 64 | 0;

export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var StringList = 64 | 0;

export var WidgetConfigList: StaticListSchema = [1, n0, _WCL, 0, () => WidgetConfig];
export var WidgetList: StaticListSchema = [1, n0, _WL, 0, () => Widget];
export var GraphDisplayConfigMap: StaticMapSchema = [2, n0, _GDCM, 0, 0, () => GraphDisplayConfig];
export var DisplayConfig: StaticStructureSchema = [
  3,
  n0,
  _DC,
  0,
  [_gr, _tab],
  [() => GraphDisplayConfigMap, () => TableDisplayConfigStruct],
];
export var QueryParameters: StaticStructureSchema = [
  3,
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
  ],
];
export var CreateDashboard: StaticOperationSchema = [
  9,
  n0,
  _CD,
  0,
  () => CreateDashboardRequest,
  () => CreateDashboardResponse,
];
export var DeleteDashboard: StaticOperationSchema = [
  9,
  n0,
  _DD,
  0,
  () => DeleteDashboardRequest,
  () => DeleteDashboardResponse,
];
export var GetDashboard: StaticOperationSchema = [
  9,
  n0,
  _GDe,
  0,
  () => GetDashboardRequest,
  () => GetDashboardResponse,
];
export var GetResourcePolicy: StaticOperationSchema = [
  9,
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse,
];
export var ListDashboards: StaticOperationSchema = [
  9,
  n0,
  _LD,
  0,
  () => ListDashboardsRequest,
  () => ListDashboardsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
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
export var UpdateDashboard: StaticOperationSchema = [
  9,
  n0,
  _UD,
  0,
  () => UpdateDashboardRequest,
  () => UpdateDashboardResponse,
];
