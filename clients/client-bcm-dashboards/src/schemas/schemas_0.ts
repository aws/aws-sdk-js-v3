const _ADE = "AccessDeniedException";
const _CAUQ = "CostAndUsageQuery";
const _CCV = "CostCategoryValues";
const _CD = "CreateDashboard";
const _CDR = "CreateDashboardRequest";
const _CDRr = "CreateDashboardResponse";
const _CE = "ConflictException";
const _CSR = "CreateScheduledReport";
const _CSRR = "CreateScheduledReportRequest";
const _CSRRr = "CreateScheduledReportResponse";
const _DC = "DisplayConfig";
const _DD = "DeleteDashboard";
const _DDR = "DeleteDashboardRequest";
const _DDRe = "DeleteDashboardResponse";
const _DR = "DashboardReference";
const _DRL = "DashboardReferenceList";
const _DSR = "DeleteScheduledReport";
const _DSRR = "DeleteScheduledReportRequest";
const _DSRRe = "DeleteScheduledReportResponse";
const _DTR = "DateTimeRange";
const _DTV = "DateTimeValue";
const _DV = "DimensionValues";
const _E = "Expression";
const _ESR = "ExecuteScheduledReport";
const _ESRR = "ExecuteScheduledReportRequest";
const _ESRRx = "ExecuteScheduledReportResponse";
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
const _GSR = "GetScheduledReport";
const _GSRR = "GetScheduledReportRequest";
const _GSRRe = "GetScheduledReportResponse";
const _HS = "HealthStatus";
const _ISE = "InternalServerException";
const _LD = "ListDashboards";
const _LDR = "ListDashboardsRequest";
const _LDRi = "ListDashboardsResponse";
const _LSR = "ListScheduledReports";
const _LSRR = "ListScheduledReportsRequest";
const _LSRRi = "ListScheduledReportsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _QP = "QueryParameters";
const _RCQ = "ReservationCoverageQuery";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTag";
const _RTL = "ResourceTagList";
const _RUQ = "ReservationUtilizationQuery";
const _SC = "ScheduleConfig";
const _SP = "SchedulePeriod";
const _SPCQ = "SavingsPlansCoverageQuery";
const _SPUQ = "SavingsPlansUtilizationQuery";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "ScheduledReport";
const _SRI = "ScheduledReportInput";
const _SRS = "ScheduledReportSummary";
const _SRSL = "ScheduledReportSummaryList";
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
const _USR = "UpdateScheduledReport";
const _USRR = "UpdateScheduledReportRequest";
const _USRRp = "UpdateScheduledReportResponse";
const _VE = "ValidationException";
const _W = "Widget";
const _WC = "WidgetConfig";
const _WCL = "WidgetConfigList";
const _WL = "WidgetList";
const _XACT = "X-Amzn-Client-Token";
const _a = "arn";
const _an = "and";
const _c = "client";
const _cA = "createdAt";
const _cAU = "costAndUsage";
const _cC = "costCategories";
const _cT = "clientToken";
const _cWDRO = "clearWidgetDateRangeOverride";
const _cWI = "clearWidgetIds";
const _co = "configs";
const _d = "description";
const _dA = "dashboardArn";
const _dC = "displayConfig";
const _dR = "dryRun";
const _da = "dashboards";
const _di = "dimensions";
const _e = "error";
const _eT = "endTime";
const _eTx = "executionTriggered";
const _f = "filter";
const _g = "granularity";
const _gB = "groupBy";
const _gr = "graph";
const _h = "height";
const _hE = "httpError";
const _hH = "httpHeader";
const _hO = "horizontalOffset";
const _hS = "healthStatus";
const _i = "id";
const _iT = "idempotencyToken";
const _k = "key";
const _lEA = "lastExecutionAt";
const _lRA = "lastRefreshedAt";
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
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.bcmdashboards";
const _sC = "statusCode";
const _sCc = "scheduleConfig";
const _sE = "scheduleExpression";
const _sETZ = "scheduleExpressionTimeZone";
const _sP = "schedulePeriod";
const _sPC = "savingsPlansCoverage";
const _sPU = "savingsPlansUtilization";
const _sR = "scheduledReport";
const _sRERA = "scheduledReportExecutionRoleArn";
const _sRc = "scheduledReports";
const _sRt = "statusReasons";
const _sT = "startTime";
const _se = "server";
const _st = "state";
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
const _wDRO = "widgetDateRangeOverride";
const _wI = "widgetIds";
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
  StaticUnionSchema,
} from "@smithy/types";

import { BCMDashboardsServiceException } from "../models/BCMDashboardsServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var BCMDashboardsServiceException$: StaticErrorSchema = [-3, _s, "BCMDashboardsServiceException", 0, [], []];
_s_registry.registerError(BCMDashboardsServiceException$, BCMDashboardsServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var CostAndUsageQuery$: StaticStructureSchema = [3, n0, _CAUQ,
  0,
  [_me, _tR, _g, _gB, _f],
  [64 | 0, () => DateTimeRange$, 0, () => GroupDefinitions, () => Expression$], 3
];
export var CostCategoryValues$: StaticStructureSchema = [3, n0, _CCV,
  0,
  [_k, _v, _mO],
  [0, 64 | 0, 64 | 0]
];
export var CreateDashboardRequest$: StaticStructureSchema = [3, n0, _CDR,
  0,
  [_n, _w, _d, _rT],
  [0, () => WidgetList, 0, () => ResourceTagList], 2
];
export var CreateDashboardResponse$: StaticStructureSchema = [3, n0, _CDRr,
  0,
  [_a],
  [0], 1
];
export var CreateScheduledReportRequest$: StaticStructureSchema = [3, n0, _CSRR,
  0,
  [_sR, _rT, _cT],
  [() => ScheduledReportInput$, () => ResourceTagList, [0, { [_hH]: _XACT, [_iT]: 1 }]], 1
];
export var CreateScheduledReportResponse$: StaticStructureSchema = [3, n0, _CSRRr,
  0,
  [_a],
  [0], 1
];
export var DashboardReference$: StaticStructureSchema = [3, n0, _DR,
  0,
  [_a, _n, _t, _cA, _uA, _d],
  [0, 0, 0, 4, 4, 0], 5
];
export var DateTimeRange$: StaticStructureSchema = [3, n0, _DTR,
  0,
  [_sT, _eT],
  [() => DateTimeValue$, () => DateTimeValue$], 2
];
export var DateTimeValue$: StaticStructureSchema = [3, n0, _DTV,
  0,
  [_t, _va],
  [0, 0], 2
];
export var DeleteDashboardRequest$: StaticStructureSchema = [3, n0, _DDR,
  0,
  [_a],
  [0], 1
];
export var DeleteDashboardResponse$: StaticStructureSchema = [3, n0, _DDRe,
  0,
  [_a],
  [0], 1
];
export var DeleteScheduledReportRequest$: StaticStructureSchema = [3, n0, _DSRR,
  0,
  [_a],
  [0], 1
];
export var DeleteScheduledReportResponse$: StaticStructureSchema = [3, n0, _DSRRe,
  0,
  [_a],
  [0], 1
];
export var DimensionValues$: StaticStructureSchema = [3, n0, _DV,
  0,
  [_k, _v, _mO],
  [0, 64 | 0, 64 | 0], 2
];
export var ExecuteScheduledReportRequest$: StaticStructureSchema = [3, n0, _ESRR,
  0,
  [_a, _cT, _dR],
  [0, [0, { [_hH]: _XACT, [_iT]: 1 }], 2], 1
];
export var ExecuteScheduledReportResponse$: StaticStructureSchema = [3, n0, _ESRRx,
  0,
  [_hS, _eTx],
  [() => HealthStatus$, 2]
];
export var Expression$: StaticStructureSchema = [3, n0, _E,
  0,
  [_o, _an, _no, _di, _ta, _cC],
  [() => Expressions, () => Expressions, () => Expression$, () => DimensionValues$, () => TagValues$, () => CostCategoryValues$]
];
export var GetDashboardRequest$: StaticStructureSchema = [3, n0, _GDR,
  0,
  [_a],
  [0], 1
];
export var GetDashboardResponse$: StaticStructureSchema = [3, n0, _GDRe,
  0,
  [_a, _n, _t, _w, _cA, _uA, _d],
  [0, 0, 0, () => WidgetList, 4, 4, 0], 6
];
export var GetResourcePolicyRequest$: StaticStructureSchema = [3, n0, _GRPR,
  0,
  [_rA],
  [0], 1
];
export var GetResourcePolicyResponse$: StaticStructureSchema = [3, n0, _GRPRe,
  0,
  [_rA, _pD],
  [0, 0], 2
];
export var GetScheduledReportRequest$: StaticStructureSchema = [3, n0, _GSRR,
  0,
  [_a],
  [0], 1
];
export var GetScheduledReportResponse$: StaticStructureSchema = [3, n0, _GSRRe,
  0,
  [_sR],
  [() => ScheduledReport$], 1
];
export var GraphDisplayConfig$: StaticStructureSchema = [3, n0, _GDC,
  0,
  [_vT],
  [0], 1
];
export var GroupDefinition$: StaticStructureSchema = [3, n0, _GD,
  0,
  [_k, _t],
  [0, 0], 1
];
export var HealthStatus$: StaticStructureSchema = [3, n0, _HS,
  0,
  [_sC, _lRA, _sRt],
  [0, 4, 64 | 0], 1
];
export var ListDashboardsRequest$: StaticStructureSchema = [3, n0, _LDR,
  0,
  [_mR, _nT],
  [1, 0]
];
export var ListDashboardsResponse$: StaticStructureSchema = [3, n0, _LDRi,
  0,
  [_da, _nT],
  [() => DashboardReferenceList, 0], 1
];
export var ListScheduledReportsRequest$: StaticStructureSchema = [3, n0, _LSRR,
  0,
  [_nT, _mR],
  [0, 1]
];
export var ListScheduledReportsResponse$: StaticStructureSchema = [3, n0, _LSRRi,
  0,
  [_sRc, _nT],
  [() => ScheduledReportSummaryList, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [0], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_rT],
  [() => ResourceTagList]
];
export var ReservationCoverageQuery$: StaticStructureSchema = [3, n0, _RCQ,
  0,
  [_tR, _gB, _g, _f, _me],
  [() => DateTimeRange$, () => GroupDefinitions, 0, () => Expression$, 64 | 0], 1
];
export var ReservationUtilizationQuery$: StaticStructureSchema = [3, n0, _RUQ,
  0,
  [_tR, _gB, _g, _f],
  [() => DateTimeRange$, () => GroupDefinitions, 0, () => Expression$], 1
];
export var ResourceTag$: StaticStructureSchema = [3, n0, _RT,
  0,
  [_k, _va],
  [0, 0], 2
];
export var SavingsPlansCoverageQuery$: StaticStructureSchema = [3, n0, _SPCQ,
  0,
  [_tR, _me, _g, _gB, _f],
  [() => DateTimeRange$, 64 | 0, 0, () => GroupDefinitions, () => Expression$], 1
];
export var SavingsPlansUtilizationQuery$: StaticStructureSchema = [3, n0, _SPUQ,
  0,
  [_tR, _g, _f],
  [() => DateTimeRange$, 0, () => Expression$], 1
];
export var ScheduleConfig$: StaticStructureSchema = [3, n0, _SC,
  0,
  [_sE, _sETZ, _sP, _st],
  [0, 0, () => SchedulePeriod$, 0]
];
export var ScheduledReport$: StaticStructureSchema = [3, n0, _SR,
  0,
  [_n, _dA, _sRERA, _sCc, _a, _d, _wI, _wDRO, _cA, _uA, _lEA, _hS],
  [0, 0, 0, () => ScheduleConfig$, 0, 0, 64 | 0, () => DateTimeRange$, 4, 4, 4, () => HealthStatus$], 4
];
export var ScheduledReportInput$: StaticStructureSchema = [3, n0, _SRI,
  0,
  [_n, _dA, _sRERA, _sCc, _d, _wI, _wDRO],
  [0, 0, 0, () => ScheduleConfig$, 0, 64 | 0, () => DateTimeRange$], 4
];
export var ScheduledReportSummary$: StaticStructureSchema = [3, n0, _SRS,
  0,
  [_a, _n, _dA, _sE, _st, _hS, _sETZ, _wI],
  [0, 0, 0, 0, 0, () => HealthStatus$, 0, 64 | 0], 6
];
export var SchedulePeriod$: StaticStructureSchema = [3, n0, _SP,
  0,
  [_sT, _eT],
  [4, 4]
];
export var TableDisplayConfigStruct$: StaticStructureSchema = [3, n0, _TDCS,
  0,
  [],
  []
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _rT],
  [0, () => ResourceTagList], 2
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var TagValues$: StaticStructureSchema = [3, n0, _TV,
  0,
  [_k, _v, _mO],
  [0, 64 | 0, 64 | 0]
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _rTK],
  [0, 64 | 0], 2
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateDashboardRequest$: StaticStructureSchema = [3, n0, _UDR,
  0,
  [_a, _n, _d, _w],
  [0, 0, 0, () => WidgetList], 2
];
export var UpdateDashboardResponse$: StaticStructureSchema = [3, n0, _UDRp,
  0,
  [_a],
  [0], 1
];
export var UpdateScheduledReportRequest$: StaticStructureSchema = [3, n0, _USRR,
  0,
  [_a, _n, _d, _dA, _sRERA, _sCc, _wI, _wDRO, _cWI, _cWDRO],
  [0, 0, 0, 0, 0, () => ScheduleConfig$, 64 | 0, () => DateTimeRange$, 2, 2], 1
];
export var UpdateScheduledReportResponse$: StaticStructureSchema = [3, n0, _USRRp,
  0,
  [_a],
  [0], 1
];
export var Widget$: StaticStructureSchema = [3, n0, _W,
  0,
  [_ti, _co, _i, _d, _wi, _h, _hO],
  [0, () => WidgetConfigList, 0, 0, 1, 1, 1], 2
];
export var WidgetConfig$: StaticStructureSchema = [3, n0, _WC,
  0,
  [_qP, _dC],
  [() => QueryParameters$, () => DisplayConfig$], 2
];
var DashboardReferenceList: StaticListSchema = [1, n0, _DRL,
  0, () => DashboardReference$
];
var Expressions: StaticListSchema = [1, n0, _Ex,
  0, () => Expression$
];
var GroupDefinitions: StaticListSchema = [1, n0, _GDr,
  0, () => GroupDefinition$
];
var MatchOptions = 64 | 0;
var MetricNames = 64 | 0;
var ResourceTagKeyList = 64 | 0;
var ResourceTagList: StaticListSchema = [1, n0, _RTL,
  0, () => ResourceTag$
];
var ScheduledReportSummaryList: StaticListSchema = [1, n0, _SRSL,
  0, () => ScheduledReportSummary$
];
var StatusReasonList = 64 | 0;
var StringList = 64 | 0;
var WidgetConfigList: StaticListSchema = [1, n0, _WCL,
  0, () => WidgetConfig$
];
var WidgetIdList = 64 | 0;
var WidgetList: StaticListSchema = [1, n0, _WL,
  0, () => Widget$
];
var GraphDisplayConfigMap: StaticMapSchema = [2, n0, _GDCM,
  0, 0, () => GraphDisplayConfig$
];
export var DisplayConfig$: StaticUnionSchema = [4, n0, _DC,
  0,
  [_gr, _tab],
  [() => GraphDisplayConfigMap, () => TableDisplayConfigStruct$]
];
export var QueryParameters$: StaticUnionSchema = [4, n0, _QP,
  0,
  [_cAU, _sPC, _sPU, _rC, _rU],
  [() => CostAndUsageQuery$, () => SavingsPlansCoverageQuery$, () => SavingsPlansUtilizationQuery$, () => ReservationCoverageQuery$, () => ReservationUtilizationQuery$]
];
export var CreateDashboard$: StaticOperationSchema = [9, n0, _CD,
  0, () => CreateDashboardRequest$, () => CreateDashboardResponse$
];
export var CreateScheduledReport$: StaticOperationSchema = [9, n0, _CSR,
  0, () => CreateScheduledReportRequest$, () => CreateScheduledReportResponse$
];
export var DeleteDashboard$: StaticOperationSchema = [9, n0, _DD,
  0, () => DeleteDashboardRequest$, () => DeleteDashboardResponse$
];
export var DeleteScheduledReport$: StaticOperationSchema = [9, n0, _DSR,
  0, () => DeleteScheduledReportRequest$, () => DeleteScheduledReportResponse$
];
export var ExecuteScheduledReport$: StaticOperationSchema = [9, n0, _ESR,
  0, () => ExecuteScheduledReportRequest$, () => ExecuteScheduledReportResponse$
];
export var GetDashboard$: StaticOperationSchema = [9, n0, _GDe,
  0, () => GetDashboardRequest$, () => GetDashboardResponse$
];
export var GetResourcePolicy$: StaticOperationSchema = [9, n0, _GRP,
  0, () => GetResourcePolicyRequest$, () => GetResourcePolicyResponse$
];
export var GetScheduledReport$: StaticOperationSchema = [9, n0, _GSR,
  0, () => GetScheduledReportRequest$, () => GetScheduledReportResponse$
];
export var ListDashboards$: StaticOperationSchema = [9, n0, _LD,
  0, () => ListDashboardsRequest$, () => ListDashboardsResponse$
];
export var ListScheduledReports$: StaticOperationSchema = [9, n0, _LSR,
  0, () => ListScheduledReportsRequest$, () => ListScheduledReportsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  0, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  0, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  0, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateDashboard$: StaticOperationSchema = [9, n0, _UD,
  0, () => UpdateDashboardRequest$, () => UpdateDashboardResponse$
];
export var UpdateScheduledReport$: StaticOperationSchema = [9, n0, _USR,
  0, () => UpdateScheduledReportRequest$, () => UpdateScheduledReportResponse$
];
