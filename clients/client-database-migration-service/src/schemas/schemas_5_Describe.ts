// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _ADp,
  _AIp,
  _AUp,
  _CLC,
  _CLo,
  _CN,
  _Col,
  _Com,
  _CRI,
  _CSIR,
  _CSo,
  _Da,
  _Dd,
  _DE,
  _Del,
  _DFADe,
  _DFADRes,
  _DFADResc,
  _DFAS,
  _DFASOS,
  _DFASOSR,
  _DFASOSRe,
  _DFASR,
  _DFASRe,
  _DI,
  _DIA,
  _DIat,
  _DISDR,
  _DL,
  _DN,
  _DR,
  _DRTS,
  _DRTSM,
  _DRTSR,
  _DSIR,
  _DTSe,
  _DTSM,
  _DTSR,
  _E,
  _EEn,
  _EV,
  _F,
  _FAS,
  _FASL,
  _FASO,
  _FASOL,
  _FASOR,
  _FLCCFR,
  _FLER,
  _FLET,
  _FLR,
  _FLRu,
  _FLST,
  _IA,
  _In,
  _LUT,
  _Ma,
  _MR,
  _NOO,
  _NOS,
  _NTe,
  _OA,
  _OSr,
  _OT,
  _RCA,
  _RP,
  _RRA,
  _RRF,
  _RRS,
  _RSesy,
  _RTA,
  _RTSe,
  _RTSL,
  _SD,
  _Ser,
  _Si,
  _SIc,
  _SIe,
  _SL,
  _SN,
  _SNc,
  _SP,
  _SRc,
  _SSIR,
  _SSIRe,
  _TN,
  _To,
  _TSa,
  _TSab,
  _TSL,
  _Up,
  _VFR,
  _VPR,
  _VSa,
  _VSD,
  _VSR,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollectorShortInfoResponse = struct(n0, _CSIR, 0, [_CRI, _CN], [0, 0]);
export var DatabaseInstanceSoftwareDetailsResponse = struct(
  n0,
  _DISDR,
  0,
  [_E, _EV, _EEn, _SP, _SL, _OA, _To],
  [0, 0, 0, 0, 0, 1, 0]
);
export var DatabaseResponse = struct(
  n0,
  _DR,
  0,
  [_DI, _DN, _IA, _NOS, _Ser, _SD, _Col],
  [0, 0, 0, 1, () => ServerShortInfoResponse, () => DatabaseInstanceSoftwareDetailsResponse, () => CollectorsList]
);
export var DatabaseShortInfoResponse = struct(n0, _DSIR, 0, [_DI, _DN, _DIA, _DE], [0, 0, 0, 0]);
export var DescribeFleetAdvisorDatabasesRequest = struct(
  n0,
  _DFADRes,
  0,
  [_F, _MR, _NTe],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeFleetAdvisorDatabasesResponse = struct(n0, _DFADResc, 0, [_Da, _NTe], [() => DatabaseList, 0]);
export var DescribeFleetAdvisorSchemaObjectSummaryRequest = struct(
  n0,
  _DFASOSR,
  0,
  [_F, _MR, _NTe],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeFleetAdvisorSchemaObjectSummaryResponse = struct(
  n0,
  _DFASOSRe,
  0,
  [_FASO, _NTe],
  [() => FleetAdvisorSchemaObjectList, 0]
);
export var DescribeFleetAdvisorSchemasRequest = struct(n0, _DFASR, 0, [_F, _MR, _NTe], [[() => FilterList, 0], 1, 0]);
export var DescribeFleetAdvisorSchemasResponse = struct(
  n0,
  _DFASRe,
  0,
  [_FAS, _NTe],
  [() => FleetAdvisorSchemaList, 0]
);
export var DescribeReplicationTableStatisticsMessage = struct(
  n0,
  _DRTSM,
  0,
  [_RCA, _MR, _Ma, _F],
  [0, 1, 0, [() => FilterList, 0]]
);
export var DescribeReplicationTableStatisticsResponse = struct(
  n0,
  _DRTSR,
  0,
  [_RCA, _Ma, _RTSe],
  [0, 0, () => ReplicationTableStatisticsList]
);
export var DescribeTableStatisticsMessage = struct(
  n0,
  _DTSM,
  0,
  [_RTA, _MR, _Ma, _F],
  [0, 1, 0, [() => FilterList, 0]]
);
export var DescribeTableStatisticsResponse = struct(n0, _DTSR, 0, [_RTA, _TSa, _Ma], [0, () => TableStatisticsList, 0]);
export var FleetAdvisorSchemaObjectResponse = struct(n0, _FASOR, 0, [_SIc, _OT, _NOO, _CLC, _CSo], [0, 0, 1, 1, 1]);
export var SchemaResponse = struct(
  n0,
  _SRc,
  0,
  [_CLC, _CSo, _Com, _Ser, _DIat, _SIc, _SNc, _OSr, _Si],
  [1, 1, 0, () => ServerShortInfoResponse, () => DatabaseShortInfoResponse, 0, 0, () => SchemaShortInfoResponse, 1]
);
export var SchemaShortInfoResponse = struct(n0, _SSIR, 0, [_SIc, _SNc, _DI, _DN, _DIA], [0, 0, 0, 0, 0]);
export var ServerShortInfoResponse = struct(n0, _SSIRe, 0, [_SIe, _IA, _SN], [0, 0, 0]);
export var TableStatistics = struct(
  n0,
  _TSa,
  0,
  [
    _SNc,
    _TN,
    _In,
    _Del,
    _Up,
    _Dd,
    _AIp,
    _AD,
    _AUp,
    _ADp,
    _FLR,
    _FLCCFR,
    _FLER,
    _FLST,
    _FLET,
    _FLRu,
    _LUT,
    _TSab,
    _VPR,
    _VFR,
    _VSR,
    _VSa,
    _VSD,
    _RSesy,
    _RRA,
    _RRS,
    _RRF,
    _RP,
  ],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 2, 4, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1]
);
export var CollectorsList = list(n0, _CLo, 0, () => CollectorShortInfoResponse);
export var DatabaseList = list(n0, _DL, 0, () => DatabaseResponse);
export var FleetAdvisorSchemaList = list(n0, _FASL, 0, () => SchemaResponse);
export var FleetAdvisorSchemaObjectList = list(n0, _FASOL, 0, () => FleetAdvisorSchemaObjectResponse);
export var ReplicationTableStatisticsList = list(n0, _RTSL, 0, () => TableStatistics);
export var TableStatisticsList = list(n0, _TSL, 0, () => TableStatistics);
export var DescribeFleetAdvisorDatabases = op(
  n0,
  _DFADe,
  0,
  () => DescribeFleetAdvisorDatabasesRequest,
  () => DescribeFleetAdvisorDatabasesResponse
);
export var DescribeFleetAdvisorSchemaObjectSummary = op(
  n0,
  _DFASOS,
  0,
  () => DescribeFleetAdvisorSchemaObjectSummaryRequest,
  () => DescribeFleetAdvisorSchemaObjectSummaryResponse
);
export var DescribeFleetAdvisorSchemas = op(
  n0,
  _DFAS,
  0,
  () => DescribeFleetAdvisorSchemasRequest,
  () => DescribeFleetAdvisorSchemasResponse
);
export var DescribeReplicationTableStatistics = op(
  n0,
  _DRTS,
  0,
  () => DescribeReplicationTableStatisticsMessage,
  () => DescribeReplicationTableStatisticsResponse
);
export var DescribeTableStatistics = op(
  n0,
  _DTSe,
  0,
  () => DescribeTableStatisticsMessage,
  () => DescribeTableStatisticsResponse
);
