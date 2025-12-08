const _ADE = "AccessDeniedException";
const _CAUQ = "CostAndUsageQuery";
const _CCV = "CostCategoryValues";
const _CD = "CreateDashboard";
const _CDR = "CreateDashboardRequest";
const _CDRr = "CreateDashboardResponse";
const _DC = "DisplayConfig";
const _DD = "DeleteDashboard";
const _DDR = "DeleteDashboardRequest";
const _DDRe = "DeleteDashboardResponse";
const _DR = "DashboardReference";
const _DRL = "DashboardReferenceList";
const _DTR = "DateTimeRange";
const _DTV = "DateTimeValue";
const _DV = "DimensionValues";
const _E = "Expression";
const _Ex = "Expressions";
const _GD = "GroupDefinition";
const _GDC = "GraphDisplayConfig";
const _GDCM = "GraphDisplayConfigMap";
const _GDR = "GetDashboardRequest";
const _GDRe = "GetDashboardResponse";
const _GDe = "GetDashboard";
const _GDr = "GroupDefinitions";
const _GRP = "GetResourcePolicy";
const _GRPR = "GetResourcePolicyRequest";
const _GRPRe = "GetResourcePolicyResponse";
const _ISE = "InternalServerException";
const _LD = "ListDashboards";
const _LDR = "ListDashboardsRequest";
const _LDRi = "ListDashboardsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _QP = "QueryParameters";
const _RCQ = "ReservationCoverageQuery";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTag";
const _RTL = "ResourceTagList";
const _RUQ = "ReservationUtilizationQuery";
const _SPCQ = "SavingsPlansCoverageQuery";
const _SPUQ = "SavingsPlansUtilizationQuery";
const _SQEE = "ServiceQuotaExceededException";
const _TDCS = "TableDisplayConfigStruct";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TV = "TagValues";
const _UD = "UpdateDashboard";
const _UDR = "UpdateDashboardRequest";
const _UDRp = "UpdateDashboardResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _W = "Widget";
const _WC = "WidgetConfig";
const _WCL = "WidgetConfigList";
const _WL = "WidgetList";
const _a = "arn";
const _an = "and";
const _c = "client";
const _cA = "createdAt";
const _cAU = "costAndUsage";
const _cC = "costCategories";
const _co = "configs";
const _d = "description";
const _dC = "displayConfig";
const _da = "dashboards";
const _di = "dimensions";
const _e = "error";
const _eT = "endTime";
const _f = "filter";
const _g = "granularity";
const _gB = "groupBy";
const _gr = "graph";
const _h = "height";
const _hE = "httpError";
const _hO = "horizontalOffset";
const _k = "key";
const _m = "message";
const _mO = "matchOptions";
const _mR = "maxResults";
const _me = "metrics";
const _n = "name";
const _nT = "nextToken";
const _no = "not";
const _o = "or";
const _pD = "policyDocument";
const _qP = "queryParameters";
const _rA = "resourceArn";
const _rC = "reservationCoverage";
const _rT = "resourceTags";
const _rTK = "resourceTagKeys";
const _rU = "reservationUtilization";
const _s = "server";
const _sPC = "savingsPlansCoverage";
const _sPU = "savingsPlansUtilization";
const _sT = "startTime";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bcmdashboards";
const _t = "type";
const _tR = "timeRange";
const _ta = "tags";
const _tab = "table";
const _ti = "title";
const _uA = "updatedAt";
const _v = "values";
const _vT = "visualType";
const _va = "value";
const _w = "widgets";
const _wi = "width";
const n0 = "com.amazonaws.bcmdashboards";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
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
} from "../models/errors";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
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
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_m], [0]];
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
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
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
export var ServiceQuotaExceededException: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var TableDisplayConfigStruct: StaticStructureSchema = [3, n0, _TDCS, 0, [], []];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _rT], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TagValues: StaticStructureSchema = [3, n0, _TV, 0, [_k, _v, _mO], [0, 64 | 0, 64 | 0]];
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
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
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
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
