// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ReservedDBInstanceAlreadyExistsFault as __ReservedDBInstanceAlreadyExistsFault,
  ReservedDBInstanceNotFoundFault as __ReservedDBInstanceNotFoundFault,
  ReservedDBInstanceQuotaExceededFault as __ReservedDBInstanceQuotaExceededFault,
  ReservedDBInstancesOfferingNotFoundFault as __ReservedDBInstancesOfferingNotFoundFault,
} from "../models/index";
import {
  _AI,
  _AIc,
  _AMpp,
  _An,
  _aQE,
  _c,
  _CAL,
  _CAo,
  _CAon,
  _Cat,
  _CCu,
  _CTr,
  _D,
  _DBIC,
  _DBICn,
  _DBII,
  _DBR,
  _DBRe,
  _DBRL,
  _DBRM,
  _DBRMe,
  _DDBR,
  _DDBRM,
  _De,
  _Di,
  _DLL,
  _DLo,
  _DR,
  _DRDBI,
  _DRDBIM,
  _DRDBIO,
  _DRDBIOM,
  _DRL,
  _Du,
  _DVDBIM,
  _DVDBIMM,
  _DVDBIMR,
  _e,
  _ETn,
  _Fi,
  _FP,
  _Fr,
  _G,
  _GB,
  _hE,
  _IDs,
  _Imp,
  _ITSR,
  _K,
  _L,
  _LI,
  _Li,
  _Lo,
  _LUA,
  _LUB,
  _m,
  _Ma,
  _MAZ,
  _MDBR,
  _MDBRM,
  _Met,
  _Metr,
  _ML,
  _MQ,
  _MR,
  _MRe,
  _MRL,
  _N,
  _Ope,
  _OT,
  _Pa,
  _PD,
  _PI,
  _PID,
  _PIMDG,
  _PIMQ,
  _PRDBIO,
  _PRDBIOM,
  _PRDBIOR,
  _PST,
  _Ra,
  _RAe,
  _RAec,
  _RAeco,
  _RAL,
  _RAP,
  _RAPL,
  _RAU,
  _RAUe,
  _RAUL,
  _RC,
  _RCA,
  _RCe,
  _RCF,
  _RCL,
  _RD,
  _RDBI,
  _RDBIA,
  _RDBIAEF,
  _RDBIe,
  _RDBII,
  _RDBIL,
  _RDBIMe,
  _RDBINFF,
  _RDBIO,
  _RDBIOe,
  _RDBIOI,
  _RDBIOL,
  _RDBIOM,
  _RDBIONFF,
  _RDBIQEF,
  _Re,
  _Rea,
  _Ref,
  _RIe,
  _RL,
  _S,
  _SDLV,
  _SDta,
  _Se,
  _SRD,
  _SSA,
  _SSt,
  _ST,
  _St,
  _Sta,
  _Ste,
  _Sto,
  _STtar,
  _STTIR,
  _T,
  _TDy,
  _Te,
  _Tit,
  _TIy,
  _To,
  _TRy,
  _UP,
  _Ur,
  _UT,
  _V,
  _VDBIMM,
  _VPF,
  _VSO,
  _VSOL,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { AvailableProcessorFeatureList } from "./schemas_36_Describe";

/* eslint no-var: 0 */

export var ContextAttribute = struct(n0, _CAo, 0, [_K, _V], [0, 0]);
export var DBRecommendation = struct(
  n0,
  _DBR,
  0,
  [_RIe, _TIy, _Se, _RAe, _St, _CTr, _UT, _De, _Re, _D, _Rea, _RAec, _Cat, _S, _TDy, _TRy, _Imp, _AI, _L, _IDs],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    () => RecommendedActionList,
    0,
    0,
    0,
    0,
    0,
    0,
    () => DocLinkList,
    () => IssueDetails,
  ]
);
export var DBRecommendationMessage = struct(n0, _DBRM, 0, [_DBR], [() => DBRecommendation]);
export var DBRecommendationsMessage = struct(n0, _DBRMe, 0, [_DBRe, _Ma], [() => DBRecommendationList, 0]);
export var DescribeDBRecommendationsMessage = struct(
  n0,
  _DDBRM,
  0,
  [_LUA, _LUB, _Lo, _Fi, _MR, _Ma],
  [4, 4, 0, [() => FilterList, 0], 1, 0]
);
export var DescribeReservedDBInstancesMessage = struct(
  n0,
  _DRDBIM,
  0,
  [_RDBII, _RDBIOI, _DBIC, _Du, _PD, _OT, _MAZ, _LI, _Fi, _MR, _Ma],
  [0, 0, 0, 0, 0, 0, 2, 0, [() => FilterList, 0], 1, 0]
);
export var DescribeReservedDBInstancesOfferingsMessage = struct(
  n0,
  _DRDBIOM,
  0,
  [_RDBIOI, _DBIC, _Du, _PD, _OT, _MAZ, _Fi, _MR, _Ma],
  [0, 0, 0, 0, 0, 2, [() => FilterList, 0], 1, 0]
);
export var DescribeValidDBInstanceModificationsMessage = struct(n0, _DVDBIMM, 0, [_DBII], [0]);
export var DescribeValidDBInstanceModificationsResult = struct(
  n0,
  _DVDBIMR,
  0,
  [_VDBIMM],
  [[() => ValidDBInstanceModificationsMessage, 0]]
);
export var DocLink = struct(n0, _DLo, 0, [_Te, _Ur], [0, 0]);
export var DoubleRange = struct(n0, _DR, 0, [_Fr, _To], [1, 1]);
export var IssueDetails = struct(n0, _IDs, 0, [_PID], [() => PerformanceIssueDetails]);
export var Metric = struct(n0, _Met, 0, [_N, _Ref, _SDta, _MQ], [0, () => MetricReferenceList, 0, () => MetricQuery]);
export var MetricQuery = struct(n0, _MQ, 0, [_PIMQ], [() => PerformanceInsightsMetricQuery]);
export var MetricReference = struct(n0, _MRe, 0, [_N, _RD], [0, () => ReferenceDetails]);
export var ModifyDBRecommendationMessage = struct(
  n0,
  _MDBRM,
  0,
  [_RIe, _Lo, _St, _RAU],
  [0, 0, 0, () => RecommendedActionUpdateList]
);
export var PerformanceInsightsMetricDimensionGroup = struct(n0, _PIMDG, 0, [_Di, _G, _Li], [64 | 0, 0, 1]);
export var PerformanceInsightsMetricQuery = struct(
  n0,
  _PIMQ,
  0,
  [_GB, _Met],
  [() => PerformanceInsightsMetricDimensionGroup, 0]
);
export var PerformanceIssueDetails = struct(n0, _PID, 0, [_STtar, _ETn, _Metr, _An], [4, 4, () => MetricList, 0]);
export var PurchaseReservedDBInstancesOfferingMessage = struct(
  n0,
  _PRDBIOM,
  0,
  [_RDBIOI, _RDBII, _DBICn, _T],
  [0, 0, 1, [() => TagList, 0]]
);
export var PurchaseReservedDBInstancesOfferingResult = struct(
  n0,
  _PRDBIOR,
  0,
  [_RDBI],
  [[() => ReservedDBInstance, 0]]
);
export var Range = struct(n0, _Ra, 0, [_Fr, _To, _Ste], [1, 1, 1]);
export var RecommendedAction = struct(
  n0,
  _RAeco,
  0,
  [_AIc, _Tit, _D, _Ope, _Pa, _AMpp, _St, _IDs, _CAon],
  [0, 0, 0, 0, () => RecommendedActionParameterList, 64 | 0, 0, () => IssueDetails, () => ContextAttributeList]
);
export var RecommendedActionParameter = struct(n0, _RAP, 0, [_K, _V], [0, 0]);
export var RecommendedActionUpdate = struct(n0, _RAUe, 0, [_AIc, _St], [0, 0]);
export var RecurringCharge = struct(n0, _RC, 0, [_RCA, _RCF], [1, 0]);
export var ReferenceDetails = struct(n0, _RD, 0, [_SRD], [() => ScalarReferenceDetails]);
export var ReservedDBInstance = struct(
  n0,
  _RDBI,
  0,
  [_RDBII, _RDBIOI, _DBIC, _STtar, _Du, _FP, _UP, _CCu, _DBICn, _PD, _OT, _MAZ, _Sta, _RCe, _RDBIA, _LI],
  [0, 0, 0, 4, 1, 1, 1, 0, 1, 0, 0, 2, 0, [() => RecurringChargeList, 0], 0, 0]
);
export var ReservedDBInstanceAlreadyExistsFault = error(
  n0,
  _RDBIAEF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedDBInstanceAlreadyExists`, 404],
  },
  [_m],
  [0],

  __ReservedDBInstanceAlreadyExistsFault
);
export var ReservedDBInstanceMessage = struct(n0, _RDBIMe, 0, [_Ma, _RDBIe], [0, [() => ReservedDBInstanceList, 0]]);
export var ReservedDBInstanceNotFoundFault = error(
  n0,
  _RDBINFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedDBInstanceNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedDBInstanceNotFoundFault
);
export var ReservedDBInstanceQuotaExceededFault = error(
  n0,
  _RDBIQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReservedDBInstanceQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ReservedDBInstanceQuotaExceededFault
);
export var ReservedDBInstancesOffering = struct(
  n0,
  _RDBIO,
  0,
  [_RDBIOI, _DBIC, _Du, _FP, _UP, _CCu, _PD, _OT, _MAZ, _RCe],
  [0, 0, 1, 1, 1, 0, 0, 0, 2, [() => RecurringChargeList, 0]]
);
export var ReservedDBInstancesOfferingMessage = struct(
  n0,
  _RDBIOM,
  0,
  [_Ma, _RDBIOe],
  [0, [() => ReservedDBInstancesOfferingList, 0]]
);
export var ReservedDBInstancesOfferingNotFoundFault = error(
  n0,
  _RDBIONFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedDBInstancesOfferingNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedDBInstancesOfferingNotFoundFault
);
export var ScalarReferenceDetails = struct(n0, _SRD, 0, [_V], [1]);
export var ValidDBInstanceModificationsMessage = struct(
  n0,
  _VDBIMM,
  0,
  [_Sto, _VPF, _SDLV],
  [[() => ValidStorageOptionsList, 0], [() => AvailableProcessorFeatureList, 0], 2]
);
export var ValidStorageOptions = struct(
  n0,
  _VSO,
  0,
  [_ST, _SSt, _PI, _ITSR, _SSA, _PST, _STTIR],
  [
    0,
    [() => RangeList, 0],
    [() => RangeList, 0],
    [() => DoubleRangeList, 0],
    2,
    [() => RangeList, 0],
    [() => DoubleRangeList, 0],
  ]
);
export var ContextAttributeList = list(n0, _CAL, 0, () => ContextAttribute);
export var DBRecommendationList = list(n0, _DBRL, 0, () => DBRecommendation);
export var DocLinkList = list(n0, _DLL, 0, () => DocLink);
export var DoubleRangeList = list(n0, _DRL, 0, [
  () => DoubleRange,
  {
    [_xN]: _DR,
  },
]);
export var MetricList = list(n0, _ML, 0, () => Metric);
export var MetricReferenceList = list(n0, _MRL, 0, () => MetricReference);
export var RangeList = list(n0, _RL, 0, [
  () => Range,
  {
    [_xN]: _Ra,
  },
]);
export var RecommendedActionList = list(n0, _RAL, 0, () => RecommendedAction);
export var RecommendedActionParameterList = list(n0, _RAPL, 0, () => RecommendedActionParameter);
export var RecommendedActionUpdateList = list(n0, _RAUL, 0, () => RecommendedActionUpdate);
export var RecurringChargeList = list(n0, _RCL, 0, [
  () => RecurringCharge,
  {
    [_xN]: _RC,
  },
]);
export var ReservedDBInstanceList = list(n0, _RDBIL, 0, [
  () => ReservedDBInstance,
  {
    [_xN]: _RDBI,
  },
]);
export var ReservedDBInstancesOfferingList = list(n0, _RDBIOL, 0, [
  () => ReservedDBInstancesOffering,
  {
    [_xN]: _RDBIO,
  },
]);
export var ValidStorageOptionsList = list(n0, _VSOL, 0, [
  () => ValidStorageOptions,
  {
    [_xN]: _VSO,
  },
]);
export var DescribeDBRecommendations = op(
  n0,
  _DDBR,
  0,
  () => DescribeDBRecommendationsMessage,
  () => DBRecommendationsMessage
);
export var DescribeReservedDBInstances = op(
  n0,
  _DRDBI,
  0,
  () => DescribeReservedDBInstancesMessage,
  () => ReservedDBInstanceMessage
);
export var DescribeReservedDBInstancesOfferings = op(
  n0,
  _DRDBIO,
  0,
  () => DescribeReservedDBInstancesOfferingsMessage,
  () => ReservedDBInstancesOfferingMessage
);
export var DescribeValidDBInstanceModifications = op(
  n0,
  _DVDBIM,
  0,
  () => DescribeValidDBInstanceModificationsMessage,
  () => DescribeValidDBInstanceModificationsResult
);
export var ModifyDBRecommendation = op(
  n0,
  _MDBR,
  0,
  () => ModifyDBRecommendationMessage,
  () => DBRecommendationMessage
);
export var PurchaseReservedDBInstancesOffering = op(
  n0,
  _PRDBIO,
  0,
  () => PurchaseReservedDBInstancesOfferingMessage,
  () => PurchaseReservedDBInstancesOfferingResult
);
