// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _AAI,
  _AG,
  _AI,
  _AM,
  _At,
  _BCM,
  _BGSLOBR,
  _BGSLOBRI,
  _BGSLOBRO,
  _BRC,
  _BRCu,
  _BRR,
  _BS,
  _BSR,
  _c,
  _CE,
  _CI,
  _CO,
  _CSLO,
  _CSLOI,
  _CSLOO,
  _CT,
  _D,
  _DC,
  _De,
  _Di,
  _Dim,
  _DKA,
  _DKAe,
  _DON,
  _DONe,
  _DU,
  _E,
  _e,
  _EC,
  _EM,
  _ET,
  _ETv,
  _Ex,
  _G,
  _GCM,
  _GS,
  _GSI,
  _GSLO,
  _GSLOI,
  _GSLOO,
  _GSO,
  _h,
  _hE,
  _hQ,
  _I,
  _ILA,
  _In,
  _KA,
  _L,
  _LBWM,
  _LGR,
  _LS,
  _LSD,
  _LSDI,
  _LSDi,
  _LSDIi,
  _LSDO,
  _LSDOi,
  _LSI,
  _LSLO,
  _LSLOI,
  _LSLOO,
  _LSO,
  _LSOI,
  _LSOi,
  _LSOO,
  _LUT,
  _M,
  _MDQ,
  _MDQe,
  _Me,
  _MN,
  _MR,
  _MRCM,
  _MRCMDQ,
  _MRe,
  _MRet,
  _MS,
  _MST,
  _MSTe,
  _MT,
  _MTe,
  _N,
  _Na,
  _NT,
  _ON,
  _P,
  _PS,
  _R,
  _RBS,
  _RBSC,
  _RBSLI,
  _RBSLIC,
  _RBSLIM,
  _RBSLIMC,
  _RBSM,
  _RBSMC,
  _RD,
  _RIo,
  _S,
  _SC,
  _SD,
  _SDe,
  _SDer,
  _SDerv,
  _Se,
  _SI,
  _Sl,
  _SLI,
  _SLIC,
  _SLIM,
  _SLIMC,
  _SLO,
  _SLOBR,
  _SLOBRE,
  _SLOBRe,
  _SLOBREe,
  _SLOS,
  _SLOSe,
  _SM,
  _SMC,
  _SO,
  _SOAAI,
  _SOe,
  _SS,
  _SSe,
  _SSer,
  _ST,
  _St,
  _Sta,
  _T,
  _Ta,
  _TBR,
  _TBS,
  _TRCM,
  _U,
  _USLO,
  _USLOI,
  _USLOO,
  _V,
  _WT,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_6_Resource";

/* eslint no-var: 0 */

export var BatchGetServiceLevelObjectiveBudgetReportInput = struct(n0, _BGSLOBRI, 0, [_T, _SI], [4, 64 | 0]);
export var BatchGetServiceLevelObjectiveBudgetReportOutput = struct(
  n0,
  _BGSLOBRO,
  0,
  [_T, _R, _E],
  [4, () => ServiceLevelObjectiveBudgetReports, () => ServiceLevelObjectiveBudgetReportErrors]
);
export var BurnRateConfiguration = struct(n0, _BRC, 0, [_LBWM], [1]);
export var CalendarInterval = struct(n0, _CI, 0, [_ST, _DU, _D], [4, 0, 1]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateServiceLevelObjectiveInput = struct(
  n0,
  _CSLOI,
  0,
  [_N, _De, _SC, _RBSC, _G, _Ta, _BRCu],
  [
    0,
    0,
    () => ServiceLevelIndicatorConfig,
    () => RequestBasedServiceLevelIndicatorConfig,
    () => Goal,
    () => TagList,
    () => BurnRateConfigurations,
  ]
);
export var CreateServiceLevelObjectiveOutput = struct(n0, _CSLOO, 0, [_S], [() => ServiceLevelObjective]);
export var DependencyConfig = struct(n0, _DC, 0, [_DKA, _DON], [128 | 0, 0]);
export var Dimension = struct(n0, _Di, 0, [_N, _V], [0, 0]);
export var GetServiceInput = struct(
  n0,
  _GSI,
  0,
  [_ST, _ET, _KA],
  [
    [
      4,
      {
        [_hQ]: _ST,
      },
    ],
    [
      4,
      {
        [_hQ]: _ET,
      },
    ],
    128 | 0,
  ]
);
export var GetServiceLevelObjectiveInput = struct(n0, _GSLOI, 0, [_I], [[0, 1]]);
export var GetServiceLevelObjectiveOutput = struct(n0, _GSLOO, 0, [_S], [() => ServiceLevelObjective]);
export var GetServiceOutput = struct(
  n0,
  _GSO,
  0,
  [_Se, _ST, _ET, _LGR],
  [() => Service, 4, 4, list(n0, _LGR, 0, 128 | 0)]
);
export var Goal = struct(n0, _G, 0, [_In, _AG, _WT], [() => Interval, 1, 1]);
export var ListServiceDependenciesInput = struct(
  n0,
  _LSDI,
  0,
  [_ST, _ET, _KA, _MR, _NT],
  [
    [
      4,
      {
        [_hQ]: _ST,
      },
    ],
    [
      4,
      {
        [_hQ]: _ET,
      },
    ],
    128 | 0,
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListServiceDependenciesOutput = struct(
  n0,
  _LSDO,
  0,
  [_ST, _ET, _SD, _NT],
  [4, 4, () => ServiceDependencies, 0]
);
export var ListServiceDependentsInput = struct(
  n0,
  _LSDIi,
  0,
  [_ST, _ET, _KA, _MR, _NT],
  [
    [
      4,
      {
        [_hQ]: _ST,
      },
    ],
    [
      4,
      {
        [_hQ]: _ET,
      },
    ],
    128 | 0,
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListServiceDependentsOutput = struct(
  n0,
  _LSDOi,
  0,
  [_ST, _ET, _SDe, _NT],
  [4, 4, () => ServiceDependents, 0]
);
export var ListServiceLevelObjectivesInput = struct(
  n0,
  _LSLOI,
  0,
  [_KA, _ON, _DC, _MR, _NT, _MST, _ILA, _SOAAI],
  [
    128 | 0,
    [
      0,
      {
        [_hQ]: _ON,
      },
    ],
    () => DependencyConfig,
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    64 | 0,
    [
      2,
      {
        [_hQ]: _ILA,
      },
    ],
    [
      0,
      {
        [_hQ]: _SOAAI,
      },
    ],
  ]
);
export var ListServiceLevelObjectivesOutput = struct(
  n0,
  _LSLOO,
  0,
  [_SS, _NT],
  [() => ServiceLevelObjectiveSummaries, 0]
);
export var ListServiceOperationsInput = struct(
  n0,
  _LSOI,
  0,
  [_ST, _ET, _KA, _MR, _NT],
  [
    [
      4,
      {
        [_hQ]: _ST,
      },
    ],
    [
      4,
      {
        [_hQ]: _ET,
      },
    ],
    128 | 0,
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListServiceOperationsOutput = struct(n0, _LSOO, 0, [_ST, _ET, _SO, _NT], [4, 4, () => ServiceOperations, 0]);
export var ListServicesInput = struct(
  n0,
  _LSI,
  0,
  [_ST, _ET, _MR, _NT, _ILA, _AAI],
  [
    [
      4,
      {
        [_hQ]: _ST,
      },
    ],
    [
      4,
      {
        [_hQ]: _ET,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      2,
      {
        [_hQ]: _ILA,
      },
    ],
    [
      0,
      {
        [_hQ]: _AAI,
      },
    ],
  ]
);
export var ListServicesOutput = struct(n0, _LSO, 0, [_ST, _ET, _SSe, _NT], [4, 4, () => ServiceSummaries, 0]);
export var Metric = struct(n0, _Me, 0, [_Na, _MN, _Dim], [0, 0, () => Dimensions]);
export var MetricDataQuery = struct(
  n0,
  _MDQ,
  0,
  [_I, _MS, _Ex, _L, _RD, _P, _AI],
  [0, () => MetricStat, 0, 0, 2, 1, 0]
);
export var MetricReference = struct(n0, _MRe, 0, [_Na, _MT, _Dim, _MN, _AI], [0, 0, () => Dimensions, 0, 0]);
export var MetricStat = struct(n0, _MS, 0, [_Me, _P, _St, _U], [() => Metric, 1, 0, 0]);
export var RequestBasedServiceLevelIndicator = struct(
  n0,
  _RBSLI,
  0,
  [_RBSM, _MTe, _CO],
  [() => RequestBasedServiceLevelIndicatorMetric, 1, 0]
);
export var RequestBasedServiceLevelIndicatorConfig = struct(
  n0,
  _RBSLIC,
  0,
  [_RBSMC, _MTe, _CO],
  [() => RequestBasedServiceLevelIndicatorMetricConfig, 1, 0]
);
export var RequestBasedServiceLevelIndicatorMetric = struct(
  n0,
  _RBSLIM,
  0,
  [_KA, _ON, _MT, _TRCM, _MRCM, _DC],
  [128 | 0, 0, 0, () => MetricDataQueries, () => MonitoredRequestCountMetricDataQueries, () => DependencyConfig]
);
export var RequestBasedServiceLevelIndicatorMetricConfig = struct(
  n0,
  _RBSLIMC,
  0,
  [_KA, _ON, _MT, _TRCM, _MRCM, _DC],
  [128 | 0, 0, 0, () => MetricDataQueries, () => MonitoredRequestCountMetricDataQueries, () => DependencyConfig]
);
export var RollingInterval = struct(n0, _RIo, 0, [_DU, _D], [0, 1]);
export var Service = struct(
  n0,
  _Se,
  0,
  [_KA, _AM, _MRet, _LGR],
  [128 | 0, list(n0, _AM, 0, 128 | 0), () => MetricReferences, list(n0, _LGR, 0, 128 | 0)]
);
export var ServiceDependency = struct(n0, _SDer, 0, [_ON, _DKA, _DON, _MRet], [0, 128 | 0, 0, () => MetricReferences]);
export var ServiceDependent = struct(
  n0,
  _SDerv,
  0,
  [_ON, _DKAe, _DONe, _MRet],
  [0, 128 | 0, 0, () => MetricReferences]
);
export var ServiceLevelIndicator = struct(n0, _SLI, 0, [_SM, _MTe, _CO], [() => ServiceLevelIndicatorMetric, 1, 0]);
export var ServiceLevelIndicatorConfig = struct(
  n0,
  _SLIC,
  0,
  [_SMC, _MTe, _CO],
  [() => ServiceLevelIndicatorMetricConfig, 1, 0]
);
export var ServiceLevelIndicatorMetric = struct(
  n0,
  _SLIM,
  0,
  [_KA, _ON, _MT, _MDQe, _DC],
  [128 | 0, 0, 0, () => MetricDataQueries, () => DependencyConfig]
);
export var ServiceLevelIndicatorMetricConfig = struct(
  n0,
  _SLIMC,
  0,
  [_KA, _ON, _MT, _Sta, _PS, _MDQe, _DC],
  [128 | 0, 0, 0, 0, 1, () => MetricDataQueries, () => DependencyConfig]
);
export var ServiceLevelObjective = struct(
  n0,
  _SLO,
  0,
  [_A, _N, _De, _CT, _LUT, _Sl, _RBS, _ETv, _G, _BRCu, _MSTe],
  [
    0,
    0,
    0,
    4,
    4,
    () => ServiceLevelIndicator,
    () => RequestBasedServiceLevelIndicator,
    0,
    () => Goal,
    () => BurnRateConfigurations,
    0,
  ]
);
export var ServiceLevelObjectiveBudgetReport = struct(
  n0,
  _SLOBR,
  0,
  [_A, _N, _ETv, _BS, _At, _TBS, _BSR, _TBR, _BRR, _Sl, _RBS, _G],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, () => ServiceLevelIndicator, () => RequestBasedServiceLevelIndicator, () => Goal]
);
export var ServiceLevelObjectiveBudgetReportError = struct(n0, _SLOBRE, 0, [_N, _A, _EC, _EM], [0, 0, 0, 0]);
export var ServiceLevelObjectiveSummary = struct(
  n0,
  _SLOS,
  0,
  [_A, _N, _KA, _ON, _DC, _CT, _ETv, _MSTe],
  [0, 0, 128 | 0, 0, () => DependencyConfig, 4, 0, 0]
);
export var ServiceOperation = struct(n0, _SOe, 0, [_N, _MRet], [0, () => MetricReferences]);
export var ServiceSummary = struct(
  n0,
  _SSer,
  0,
  [_KA, _AM, _MRet],
  [128 | 0, list(n0, _AM, 0, 128 | 0), () => MetricReferences]
);
export var UpdateServiceLevelObjectiveInput = struct(
  n0,
  _USLOI,
  0,
  [_I, _De, _SC, _RBSC, _G, _BRCu],
  [
    [0, 1],
    0,
    () => ServiceLevelIndicatorConfig,
    () => RequestBasedServiceLevelIndicatorConfig,
    () => Goal,
    () => BurnRateConfigurations,
  ]
);
export var UpdateServiceLevelObjectiveOutput = struct(n0, _USLOO, 0, [_S], [() => ServiceLevelObjective]);
export var AttributeMaps = list(n0, _AM, 0, 128 | 0);
export var BurnRateConfigurations = list(n0, _BRCu, 0, () => BurnRateConfiguration);
export var Dimensions = list(n0, _Dim, 0, () => Dimension);
export var LogGroupReferences = list(n0, _LGR, 0, 128 | 0);
export var MetricDataQueries = list(n0, _MDQe, 0, () => MetricDataQuery);
export var MetricReferences = list(n0, _MRet, 0, () => MetricReference);
export var MetricSourceTypes = 64 | 0;

export var ServiceDependencies = list(n0, _SD, 0, () => ServiceDependency);
export var ServiceDependents = list(n0, _SDe, 0, () => ServiceDependent);
export var ServiceLevelObjectiveBudgetReportErrors = list(
  n0,
  _SLOBREe,
  0,
  () => ServiceLevelObjectiveBudgetReportError
);
export var ServiceLevelObjectiveBudgetReports = list(n0, _SLOBRe, 0, () => ServiceLevelObjectiveBudgetReport);
export var ServiceLevelObjectiveSummaries = list(n0, _SLOSe, 0, () => ServiceLevelObjectiveSummary);
export var ServiceOperations = list(n0, _SO, 0, () => ServiceOperation);
export var ServiceSummaries = list(n0, _SSe, 0, () => ServiceSummary);
export var AttributeMap = 128 | 0;

export var Attributes = 128 | 0;

export var Interval = uni(n0, _In, 0, [_RIo, _CI], [() => RollingInterval, () => CalendarInterval]);
export var MonitoredRequestCountMetricDataQueries = uni(
  n0,
  _MRCMDQ,
  0,
  [_GCM, _BCM],
  [() => MetricDataQueries, () => MetricDataQueries]
);
export var BatchGetServiceLevelObjectiveBudgetReport = op(
  n0,
  _BGSLOBR,
  {
    [_h]: ["POST", "/budget-report", 200],
  },
  () => BatchGetServiceLevelObjectiveBudgetReportInput,
  () => BatchGetServiceLevelObjectiveBudgetReportOutput
);
export var CreateServiceLevelObjective = op(
  n0,
  _CSLO,
  {
    [_h]: ["POST", "/slo", 200],
  },
  () => CreateServiceLevelObjectiveInput,
  () => CreateServiceLevelObjectiveOutput
);
export var GetService = op(
  n0,
  _GS,
  {
    [_h]: ["POST", "/service", 200],
  },
  () => GetServiceInput,
  () => GetServiceOutput
);
export var GetServiceLevelObjective = op(
  n0,
  _GSLO,
  {
    [_h]: ["GET", "/slo/{Id}", 200],
  },
  () => GetServiceLevelObjectiveInput,
  () => GetServiceLevelObjectiveOutput
);
export var ListServiceDependencies = op(
  n0,
  _LSD,
  {
    [_h]: ["POST", "/service-dependencies", 200],
  },
  () => ListServiceDependenciesInput,
  () => ListServiceDependenciesOutput
);
export var ListServiceDependents = op(
  n0,
  _LSDi,
  {
    [_h]: ["POST", "/service-dependents", 200],
  },
  () => ListServiceDependentsInput,
  () => ListServiceDependentsOutput
);
export var ListServiceLevelObjectives = op(
  n0,
  _LSLO,
  {
    [_h]: ["POST", "/slos", 200],
  },
  () => ListServiceLevelObjectivesInput,
  () => ListServiceLevelObjectivesOutput
);
export var ListServiceOperations = op(
  n0,
  _LSOi,
  {
    [_h]: ["POST", "/service-operations", 200],
  },
  () => ListServiceOperationsInput,
  () => ListServiceOperationsOutput
);
export var ListServices = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/services", 200],
  },
  () => ListServicesInput,
  () => ListServicesOutput
);
export var UpdateServiceLevelObjective = op(
  n0,
  _USLO,
  {
    [_h]: ["PATCH", "/slo/{Id}", 200],
  },
  () => UpdateServiceLevelObjectiveInput,
  () => UpdateServiceLevelObjectiveOutput
);
