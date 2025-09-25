// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { KMSFault as __KMSFault } from "../models/index";
import {
  _APs,
  _ARN,
  _c,
  _Ca,
  _CRTAR,
  _CRTARM,
  _CRTARR,
  _CSP,
  _CSPd,
  _CST,
  _DNPDA,
  _DPat,
  _DRes,
  _DRM,
  _DRRes,
  _DRTAR,
  _DRTARes,
  _DRTARM,
  _DRTARMes,
  _DRTARR,
  _DRTARRes,
  _e,
  _Er,
  _ETM,
  _Ex,
  _F,
  _Fa,
  _FLFD,
  _FLPP,
  _FLSD,
  _FM,
  _FOAF,
  _FSD,
  _IAC,
  _IACC,
  _ILTAR,
  _INPA,
  _IO,
  _KMSF,
  _LFM,
  _m,
  _Ma,
  _MR,
  _Pa,
  _PARA,
  _PARCD,
  _PAS,
  _PASL,
  _PASr,
  _PASre,
  _PCU,
  _PD,
  _PS,
  _RCA,
  _RCec,
  _RCI,
  _RCT,
  _RDT,
  _REM,
  _Rep,
  _Repl,
  _RFNPD,
  _RKKA,
  _RLB,
  _RLe,
  _RLF,
  _RLST,
  _RSepl,
  _RSes,
  _RT,
  _RTA,
  _RTAR,
  _RTARA,
  _RTARCD,
  _RTARep,
  _RTARLe,
  _RTARP,
  _RTARRS,
  _RUT,
  _S,
  _SARA,
  _SDt,
  _SDto,
  _SEA,
  _Sk,
  _SRM,
  _SRMt,
  _SRRt,
  _SRRto,
  _SRT,
  _SRt,
  _SRtar,
  _SRTARM,
  _SRTARR,
  _SRTARt,
  _SRto,
  _T,
  _TE,
  _TEA,
  _TL,
  _TLa,
  _TQ,
  _W,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelReplicationTaskAssessmentRunMessage = struct(n0, _CRTARM, 0, [_RTARA], [0]);
export var CancelReplicationTaskAssessmentRunResponse = struct(
  n0,
  _CRTARR,
  0,
  [_RTAR],
  [() => ReplicationTaskAssessmentRun]
);
export var DeleteReplicationTaskAssessmentRunMessage = struct(n0, _DRTARM, 0, [_RTARA], [0]);
export var DeleteReplicationTaskAssessmentRunResponse = struct(
  n0,
  _DRTARR,
  0,
  [_RTAR],
  [() => ReplicationTaskAssessmentRun]
);
export var DescribeReplicationsMessage = struct(n0, _DRM, 0, [_F, _MR, _Ma], [[() => FilterList, 0], 1, 0]);
export var DescribeReplicationsResponse = struct(n0, _DRRes, 0, [_Ma, _Rep], [0, [() => ReplicationList, 0]]);
export var DescribeReplicationTaskAssessmentRunsMessage = struct(
  n0,
  _DRTARMes,
  0,
  [_F, _MR, _Ma],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeReplicationTaskAssessmentRunsResponse = struct(
  n0,
  _DRTARRes,
  0,
  [_Ma, _RTARep],
  [0, () => ReplicationTaskAssessmentRunList]
);
export var KMSFault = error(
  n0,
  _KMSF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KMSFault
);
export var PremigrationAssessmentStatus = struct(
  n0,
  _PAS,
  0,
  [_PARA, _FOAF, _S, _PARCD, _APs, _LFM, _RLB, _RLF, _REM, _RKKA, _RSes],
  [
    0,
    2,
    0,
    4,
    () => ReplicationTaskAssessmentRunProgress,
    0,
    0,
    0,
    0,
    0,
    () => ReplicationTaskAssessmentRunResultStatistic,
  ]
);
export var ProvisionData = struct(n0, _PD, 0, [_PS, _PCU, _DPat, _INPA, _DNPDA, _RFNPD], [0, 1, 4, 2, 4, 0]);
export var Replication = struct(
  n0,
  _Repl,
  0,
  [
    _RCI,
    _RCA,
    _SEA,
    _TEA,
    _RT,
    _S,
    _PD,
    _PASr,
    _SRt,
    _FM,
    _RSepl,
    _SRT,
    _CST,
    _CSP,
    _CSPd,
    _RCec,
    _RCT,
    _RUT,
    _RLST,
    _RDT,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => ProvisionData,
    () => PremigrationAssessmentStatusList,
    0,
    64 | 0,
    () => ReplicationStats,
    0,
    4,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
  ]
);
export var ReplicationStats = struct(
  n0,
  _RSepl,
  0,
  [_FLPP, _ETM, _TL, _TLa, _TQ, _TE, _FSD, _SDt, _SDto, _FLSD, _FLFD],
  [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4]
);
export var ReplicationTaskAssessmentRun = struct(
  n0,
  _RTAR,
  0,
  [_RTARA, _RTA, _S, _RTARCD, _APs, _LFM, _SARA, _RLB, _RLF, _REM, _RKKA, _ARN, _ILTAR, _RSes],
  [
    0,
    0,
    0,
    4,
    () => ReplicationTaskAssessmentRunProgress,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    () => ReplicationTaskAssessmentRunResultStatistic,
  ]
);
export var ReplicationTaskAssessmentRunProgress = struct(n0, _RTARP, 0, [_IAC, _IACC], [1, 1]);
export var ReplicationTaskAssessmentRunResultStatistic = struct(
  n0,
  _RTARRS,
  0,
  [_Pa, _Fa, _Er, _W, _Ca, _Sk],
  [1, 1, 1, 1, 1, 1]
);
export var StartReplicationMessage = struct(n0, _SRM, 0, [_RCA, _SRT, _PASre, _CST, _CSP, _CSPd], [0, 0, 0, 4, 0, 0]);
export var StartReplicationResponse = struct(n0, _SRRt, 0, [_Repl], [() => Replication]);
export var StartReplicationTaskAssessmentRunMessage = struct(
  n0,
  _SRTARM,
  0,
  [_RTA, _SARA, _RLB, _RLF, _REM, _RKKA, _ARN, _IO, _Ex, _T],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, [() => TagList, 0]]
);
export var StartReplicationTaskAssessmentRunResponse = struct(
  n0,
  _SRTARR,
  0,
  [_RTAR],
  [() => ReplicationTaskAssessmentRun]
);
export var StopReplicationMessage = struct(n0, _SRMt, 0, [_RCA], [0]);
export var StopReplicationResponse = struct(n0, _SRRto, 0, [_Repl], [() => Replication]);
export var ExcludeTestList = 64 | 0;

export var IncludeTestList = 64 | 0;

export var PremigrationAssessmentStatusList = list(n0, _PASL, 0, () => PremigrationAssessmentStatus);
export var ReplicationList = list(n0, _RLe, 0, [
  () => Replication,
  {
    [_xN]: _Repl,
  },
]);
export var ReplicationTaskAssessmentRunList = list(n0, _RTARLe, 0, () => ReplicationTaskAssessmentRun);
export var CancelReplicationTaskAssessmentRun = op(
  n0,
  _CRTAR,
  0,
  () => CancelReplicationTaskAssessmentRunMessage,
  () => CancelReplicationTaskAssessmentRunResponse
);
export var DeleteReplicationTaskAssessmentRun = op(
  n0,
  _DRTAR,
  0,
  () => DeleteReplicationTaskAssessmentRunMessage,
  () => DeleteReplicationTaskAssessmentRunResponse
);
export var DescribeReplications = op(
  n0,
  _DRes,
  0,
  () => DescribeReplicationsMessage,
  () => DescribeReplicationsResponse
);
export var DescribeReplicationTaskAssessmentRuns = op(
  n0,
  _DRTARes,
  0,
  () => DescribeReplicationTaskAssessmentRunsMessage,
  () => DescribeReplicationTaskAssessmentRunsResponse
);
export var StartReplication = op(
  n0,
  _SRtar,
  0,
  () => StartReplicationMessage,
  () => StartReplicationResponse
);
export var StartReplicationTaskAssessmentRun = op(
  n0,
  _SRTARt,
  0,
  () => StartReplicationTaskAssessmentRunMessage,
  () => StartReplicationTaskAssessmentRunResponse
);
export var StopReplication = op(
  n0,
  _SRto,
  0,
  () => StopReplicationMessage,
  () => StopReplicationResponse
);
