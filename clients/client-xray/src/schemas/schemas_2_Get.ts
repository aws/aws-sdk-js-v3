// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _AI,
  _BC,
  _BCE,
  _BR,
  _BRTTL,
  _CID,
  _CRC,
  _ECII,
  _ECr,
  _Ed,
  _ET,
  _FR,
  _GIIG,
  _GIIGR,
  _GIIGRe,
  _GST,
  _GSTR,
  _GSTRe,
  _h,
  _Ho,
  _HTTPCXXC,
  _HTTPCXXCo,
  _II,
  _IIGE,
  _IIGEL,
  _IIGS,
  _IIGSL,
  _Int,
  _LRM,
  _M,
  _N,
  _Na,
  _NT,
  _OC,
  _PTR,
  _PTRR,
  _PTRRu,
  _RARNe,
  _RC,
  _RI,
  _RN,
  _RQ,
  _RQTTL,
  _SAC,
  _SB,
  _SBSD,
  _SBSDa,
  _SBSDL,
  _SC,
  _Se,
  _SGET,
  _SGST,
  _SN,
  _SRC,
  _SRCe,
  _SSC,
  _SSCe,
  _SSD,
  _SSDa,
  _SSDL,
  _ST,
  _STD,
  _STDa,
  _STDL,
  _T,
  _TC,
  _TCo,
  _Ti,
  _TR,
  _TRe,
  _TRL,
  _UBS,
  _UHC,
  _US,
  _USL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackendConnectionErrors = struct(
  n0,
  _BCE,
  0,
  [_TC, _CRC, _HTTPCXXC, _HTTPCXXCo, _UHC, _OC],
  [1, 1, 1, 1, 1, 1]
);
export var GetInsightImpactGraphRequest = struct(n0, _GIIGR, 0, [_II, _ST, _ET, _NT], [0, 4, 4, 0]);
export var GetInsightImpactGraphResult = struct(
  n0,
  _GIIGRe,
  0,
  [_II, _ST, _ET, _SGST, _SGET, _Se, _NT],
  [0, 4, 4, 4, 4, () => InsightImpactGraphServiceList, 0]
);
export var GetSamplingTargetsRequest = struct(
  n0,
  _GSTR,
  0,
  [_SSD, _SBSD],
  [() => SamplingStatisticsDocumentList, () => SamplingBoostStatisticsDocumentList]
);
export var GetSamplingTargetsResult = struct(
  n0,
  _GSTRe,
  0,
  [_STD, _LRM, _US, _UBS],
  [() => SamplingTargetDocumentList, 4, () => UnprocessedStatisticsList, () => UnprocessedStatisticsList]
);
export var InsightImpactGraphEdge = struct(n0, _IIGE, 0, [_RI], [1]);
export var InsightImpactGraphService = struct(
  n0,
  _IIGS,
  0,
  [_RI, _T, _N, _Na, _AI, _Ed],
  [1, 0, 0, 64 | 0, 0, () => InsightImpactGraphEdgeList]
);
export var PutTelemetryRecordsRequest = struct(
  n0,
  _PTRR,
  0,
  [_TR, _ECII, _Ho, _RARNe],
  [() => TelemetryRecordList, 0, 0, 0]
);
export var PutTelemetryRecordsResult = struct(n0, _PTRRu, 0, [], []);
export var SamplingBoost = struct(n0, _SB, 0, [_BR, _BRTTL], [1, 4]);
export var SamplingBoostStatisticsDocument = struct(
  n0,
  _SBSDa,
  0,
  [_RN, _SN, _Ti, _AC, _TCo, _SAC],
  [0, 0, 4, 1, 1, 1]
);
export var SamplingStatisticsDocument = struct(n0, _SSDa, 0, [_RN, _CID, _Ti, _RC, _SC, _BC], [0, 0, 4, 1, 1, 1]);
export var SamplingTargetDocument = struct(
  n0,
  _STDa,
  0,
  [_RN, _FR, _RQ, _RQTTL, _Int, _SB],
  [0, 1, 1, 4, 1, () => SamplingBoost]
);
export var TelemetryRecord = struct(
  n0,
  _TRe,
  0,
  [_Ti, _SRC, _SSC, _SSCe, _SRCe, _BCE],
  [4, 1, 1, 1, 1, () => BackendConnectionErrors]
);
export var UnprocessedStatistics = struct(n0, _US, 0, [_RN, _ECr, _M], [0, 0, 0]);
export var InsightImpactGraphEdgeList = list(n0, _IIGEL, 0, () => InsightImpactGraphEdge);
export var InsightImpactGraphServiceList = list(n0, _IIGSL, 0, () => InsightImpactGraphService);
export var SamplingBoostStatisticsDocumentList = list(n0, _SBSDL, 0, () => SamplingBoostStatisticsDocument);
export var SamplingStatisticsDocumentList = list(n0, _SSDL, 0, () => SamplingStatisticsDocument);
export var SamplingTargetDocumentList = list(n0, _STDL, 0, () => SamplingTargetDocument);
export var TelemetryRecordList = list(n0, _TRL, 0, () => TelemetryRecord);
export var UnprocessedStatisticsList = list(n0, _USL, 0, () => UnprocessedStatistics);
export var GetInsightImpactGraph = op(
  n0,
  _GIIG,
  {
    [_h]: ["POST", "/InsightImpactGraph", 200],
  },
  () => GetInsightImpactGraphRequest,
  () => GetInsightImpactGraphResult
);
export var GetSamplingTargets = op(
  n0,
  _GST,
  {
    [_h]: ["POST", "/SamplingTargets", 200],
  },
  () => GetSamplingTargetsRequest,
  () => GetSamplingTargetsResult
);
export var PutTelemetryRecords = op(
  n0,
  _PTR,
  {
    [_h]: ["POST", "/TelemetryRecords", 200],
  },
  () => PutTelemetryRecordsRequest,
  () => PutTelemetryRecordsResult
);
