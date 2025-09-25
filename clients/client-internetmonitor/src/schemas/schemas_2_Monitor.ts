// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _A,
  _ALHEC,
  _AM,
  _AP,
  _ASN,
  _ASNu,
  _AST,
  _Av,
  _BN,
  _BP,
  _C,
  _c,
  _CA,
  _CB,
  _CC,
  _CE,
  _Ci,
  _CM,
  _CMI,
  _CMO,
  _CT,
  _D,
  _DM,
  _DMI,
  _DMO,
  _e,
  _EA,
  _EAn,
  _EI,
  _ES,
  _ESv,
  _ETn,
  _F,
  _Fi,
  _FP,
  _FPi,
  _GHE,
  _GHEI,
  _GHEO,
  _GM,
  _GMI,
  _GMO,
  _GQR,
  _GQRI,
  _GQRO,
  _GQS,
  _GQSI,
  _GQSO,
  _h,
  _HE,
  _hE,
  _HEC,
  _HEe,
  _HEL,
  _hQ,
  _HST,
  _IH,
  _IL,
  _ILA,
  _ILL,
  _ILm,
  _IMLD,
  _IP,
  _IT,
  _L,
  _LAI,
  _LDS,
  _LEE,
  _LHE,
  _LHEC,
  _LHEI,
  _LHEO,
  _LM,
  _LMI,
  _LMO,
  _Lo,
  _LUA,
  _M,
  _m,
  _MA,
  _MAo,
  _MCNTM,
  _ML,
  _MN,
  _Mo,
  _Mon,
  _MR,
  _MS,
  _MTI,
  _N,
  _Na,
  _Ne,
  _NET,
  _NI,
  _NL,
  _NT,
  _O,
  _P,
  _P_,
  _P__,
  _P___,
  _PLHEC,
  _PM,
  _POCLI,
  _POTTI,
  _PS,
  _PSI,
  _PST,
  _QD,
  _QF,
  _QFu,
  _QI,
  _QT,
  _R,
  _RNFE,
  _RTA,
  _RTR,
  _RTT,
  _S,
  _SA,
  _SC,
  _SCo,
  _SL,
  _SQ,
  _SQI,
  _SQIt,
  _SQO,
  _SQOt,
  _SQt,
  _ST,
  _St,
  _T,
  _TPTM,
  _Ty,
  _UM,
  _UMI,
  _UMO,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityMeasurement = struct(n0, _AM, 0, [_ES, _POTTI, _POCLI], [1, 1, 1]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateMonitorInput = struct(
  n0,
  _CMI,
  0,
  [_MN, _R, _CT, _T, _MCNTM, _IMLD, _TPTM, _HEC],
  [0, 64 | 0, [0, 4], 128 | 0, 1, () => InternetMeasurementsLogDelivery, 1, () => HealthEventsConfig]
);
export var CreateMonitorOutput = struct(n0, _CMO, 0, [_A, _St], [0, 0]);
export var DeleteMonitorInput = struct(n0, _DMI, 0, [_MN], [[0, 1]]);
export var DeleteMonitorOutput = struct(n0, _DMO, 0, [], []);
export var FilterParameter = struct(n0, _FP, 0, [_F, _O, _V], [0, 0, 64 | 0]);
export var GetHealthEventInput = struct(
  n0,
  _GHEI,
  0,
  [_MN, _EI, _LAI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _LAI,
      },
    ],
  ]
);
export var GetHealthEventOutput = struct(
  n0,
  _GHEO,
  0,
  [_EA, _EI, _SA, _EAn, _CA, _LUA, _IL, _St, _POTTI, _IT, _HST],
  [0, 0, 5, 5, 5, 5, () => ImpactedLocationsList, 0, 1, 0, 1]
);
export var GetMonitorInput = struct(
  n0,
  _GMI,
  0,
  [_MN, _LAI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _LAI,
      },
    ],
  ]
);
export var GetMonitorOutput = struct(
  n0,
  _GMO,
  0,
  [_MN, _MA, _R, _St, _CA, _MAo, _PS, _PSI, _T, _MCNTM, _IMLD, _TPTM, _HEC],
  [0, 0, 64 | 0, 0, 5, 5, 0, 0, 128 | 0, 1, () => InternetMeasurementsLogDelivery, 1, () => HealthEventsConfig]
);
export var GetQueryResultsInput = struct(
  n0,
  _GQRI,
  0,
  [_MN, _QI, _NT, _MR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var GetQueryResultsOutput = struct(
  n0,
  _GQRO,
  0,
  [_Fi, _D, _NT],
  [() => QueryFields, list(n0, _QD, 0, 64 | 0), 0]
);
export var GetQueryStatusInput = struct(
  n0,
  _GQSI,
  0,
  [_MN, _QI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQueryStatusOutput = struct(n0, _GQSO, 0, [_St], [0]);
export var HealthEvent = struct(
  n0,
  _HE,
  0,
  [_EA, _EI, _SA, _EAn, _CA, _LUA, _IL, _St, _POTTI, _IT, _HST],
  [0, 0, 5, 5, 5, 5, () => ImpactedLocationsList, 0, 1, 0, 1]
);
export var HealthEventsConfig = struct(
  n0,
  _HEC,
  0,
  [_AST, _PST, _ALHEC, _PLHEC],
  [1, 1, () => LocalHealthEventsConfig, () => LocalHealthEventsConfig]
);
export var ImpactedLocation = struct(
  n0,
  _ILm,
  0,
  [_ASN, _ASNu, _C, _S, _M, _Ci, _L, _Lo, _CC, _SC, _SL, _St, _CB, _IH, _IP],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, () => NetworkImpairment, () => InternetHealth, 64 | 0]
);
export var InternetHealth = struct(
  n0,
  _IH,
  0,
  [_Av, _P],
  [() => AvailabilityMeasurement, () => PerformanceMeasurement]
);
export var InternetMeasurementsLogDelivery = struct(n0, _IMLD, 0, [_SCo], [() => S3Config]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListHealthEventsInput = struct(
  n0,
  _LHEI,
  0,
  [_MN, _ST, _ETn, _NT, _MR, _ESv, _LAI],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _ST,
      },
    ],
    [
      5,
      {
        [_hQ]: _ETn,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
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
        [_hQ]: _ESv,
      },
    ],
    [
      0,
      {
        [_hQ]: _LAI,
      },
    ],
  ]
);
export var ListHealthEventsOutput = struct(n0, _LHEO, 0, [_HEe, _NT], [() => HealthEventList, 0]);
export var ListMonitorsInput = struct(
  n0,
  _LMI,
  0,
  [_NT, _MR, _MS, _ILA],
  [
    [
      0,
      {
        [_hQ]: _NT,
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
        [_hQ]: _MS,
      },
    ],
    [
      2,
      {
        [_hQ]: _ILA,
      },
    ],
  ]
);
export var ListMonitorsOutput = struct(n0, _LMO, 0, [_Mo, _NT], [() => MonitorList, 0]);
export var LocalHealthEventsConfig = struct(n0, _LHEC, 0, [_St, _HST, _MTI], [0, 1, 1]);
export var Monitor = struct(n0, _Mon, 0, [_MN, _MA, _St, _PS], [0, 0, 0, 0]);
export var Network = struct(n0, _N, 0, [_ASN, _ASNu], [0, 1]);
export var NetworkImpairment = struct(n0, _NI, 0, [_Ne, _AP, _NET], [() => NetworkList, () => NetworkList, 0]);
export var PerformanceMeasurement = struct(n0, _PM, 0, [_ES, _POTTI, _POCLI, _RTT], [1, 1, 1, () => RoundTripTime]);
export var QueryField = struct(n0, _QF, 0, [_Na, _Ty], [0, 0]);
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
export var RoundTripTime = struct(n0, _RTT, 0, [_P_, _P__, _P___], [1, 1, 1]);
export var S3Config = struct(n0, _SCo, 0, [_BN, _BP, _LDS], [0, 0, 0]);
export var StartQueryInput = struct(
  n0,
  _SQI,
  0,
  [_MN, _ST, _ETn, _QT, _FPi, _LAI],
  [[0, 1], 5, 5, 0, () => FilterParameters, 0]
);
export var StartQueryOutput = struct(n0, _SQO, 0, [_QI], [0]);
export var StopQueryInput = struct(
  n0,
  _SQIt,
  0,
  [_MN, _QI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopQueryOutput = struct(n0, _SQOt, 0, [], []);
export var UpdateMonitorInput = struct(
  n0,
  _UMI,
  0,
  [_MN, _RTA, _RTR, _St, _CT, _MCNTM, _IMLD, _TPTM, _HEC],
  [[0, 1], 64 | 0, 64 | 0, 0, [0, 4], 1, () => InternetMeasurementsLogDelivery, 1, () => HealthEventsConfig]
);
export var UpdateMonitorOutput = struct(n0, _UMO, 0, [_MA, _St], [0, 0]);
export var FilterList = 64 | 0;

export var FilterParameters = list(n0, _FPi, 0, () => FilterParameter);
export var HealthEventList = list(n0, _HEL, 0, () => HealthEvent);
export var ImpactedLocationsList = list(n0, _ILL, 0, () => ImpactedLocation);
export var Ipv4PrefixList = 64 | 0;

export var MonitorList = list(n0, _ML, 0, () => Monitor);
export var NetworkList = list(n0, _NL, 0, () => Network);
export var QueryData = list(n0, _QD, 0, 64 | 0);
export var QueryFields = list(n0, _QFu, 0, () => QueryField);
export var QueryRow = 64 | 0;

export var SetOfARNs = 64 | 0;

export var CreateMonitor = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/v20210603/Monitors", 200],
  },
  () => CreateMonitorInput,
  () => CreateMonitorOutput
);
export var DeleteMonitor = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/v20210603/Monitors/{MonitorName}", 200],
  },
  () => DeleteMonitorInput,
  () => DeleteMonitorOutput
);
export var GetHealthEvent = op(
  n0,
  _GHE,
  {
    [_h]: ["GET", "/v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}", 200],
  },
  () => GetHealthEventInput,
  () => GetHealthEventOutput
);
export var GetMonitor = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/v20210603/Monitors/{MonitorName}", 200],
  },
  () => GetMonitorInput,
  () => GetMonitorOutput
);
export var GetQueryResults = op(
  n0,
  _GQR,
  {
    [_h]: ["GET", "/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Results", 200],
  },
  () => GetQueryResultsInput,
  () => GetQueryResultsOutput
);
export var GetQueryStatus = op(
  n0,
  _GQS,
  {
    [_h]: ["GET", "/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Status", 200],
  },
  () => GetQueryStatusInput,
  () => GetQueryStatusOutput
);
export var ListHealthEvents = op(
  n0,
  _LHE,
  {
    [_h]: ["GET", "/v20210603/Monitors/{MonitorName}/HealthEvents", 200],
  },
  () => ListHealthEventsInput,
  () => ListHealthEventsOutput
);
export var ListMonitors = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/v20210603/Monitors", 200],
  },
  () => ListMonitorsInput,
  () => ListMonitorsOutput
);
export var StartQuery = op(
  n0,
  _SQ,
  {
    [_h]: ["POST", "/v20210603/Monitors/{MonitorName}/Queries", 200],
  },
  () => StartQueryInput,
  () => StartQueryOutput
);
export var StopQuery = op(
  n0,
  _SQt,
  {
    [_h]: ["DELETE", "/v20210603/Monitors/{MonitorName}/Queries/{QueryId}", 200],
  },
  () => StopQueryInput,
  () => StopQueryOutput
);
export var UpdateMonitor = op(
  n0,
  _UM,
  {
    [_h]: ["PATCH", "/v20210603/Monitors/{MonitorName}", 200],
  },
  () => UpdateMonitorInput,
  () => UpdateMonitorOutput
);
