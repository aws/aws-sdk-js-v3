// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _CRTM,
  _CRTR,
  _CSP,
  _CSPd,
  _CST,
  _DRT,
  _DRTe,
  _DRTM,
  _DRTMe,
  _DRTR,
  _DRTRe,
  _ETM,
  _F,
  _FLFD,
  _FLPP,
  _FLSD,
  _FSD,
  _LFM,
  _Ma,
  _MR,
  _MRT,
  _MRTM,
  _MRTMo,
  _MRTo,
  _MRTR,
  _MRTRo,
  _MT,
  _RCec,
  _RI,
  _RIA,
  _RTA,
  _RTCD,
  _RTe,
  _RTep,
  _RTI,
  _RTL,
  _RTS,
  _RTSD,
  _RTSep,
  _S,
  _SDt,
  _SDto,
  _SEA,
  _SRt,
  _SRTA,
  _SRTAM,
  _SRTAR,
  _SRTM,
  _SRTMt,
  _SRTR,
  _SRTRt,
  _SRTT,
  _SRTt,
  _SRTto,
  _T,
  _TD,
  _TE,
  _TEA,
  _TL,
  _TLa,
  _TM,
  _TQ,
  _TRIA,
  _WS,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateReplicationTaskMessage = struct(
  n0,
  _CRTM,
  0,
  [_RTI, _SEA, _TEA, _RIA, _MT, _TM, _RTS, _CST, _CSP, _CSPd, _T, _TD, _RI],
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, [() => TagList, 0], 0, 0]
);
export var CreateReplicationTaskResponse = struct(n0, _CRTR, 0, [_RTe], [() => ReplicationTask]);
export var DeleteReplicationTaskMessage = struct(n0, _DRTM, 0, [_RTA], [0]);
export var DeleteReplicationTaskResponse = struct(n0, _DRTR, 0, [_RTe], [() => ReplicationTask]);
export var DescribeReplicationTasksMessage = struct(
  n0,
  _DRTMe,
  0,
  [_F, _MR, _Ma, _WS],
  [[() => FilterList, 0], 1, 0, 2]
);
export var DescribeReplicationTasksResponse = struct(n0, _DRTRe, 0, [_Ma, _RTep], [0, [() => ReplicationTaskList, 0]]);
export var ModifyReplicationTaskMessage = struct(
  n0,
  _MRTM,
  0,
  [_RTA, _RTI, _MT, _TM, _RTS, _CST, _CSP, _CSPd, _TD],
  [0, 0, 0, 0, 0, 4, 0, 0, 0]
);
export var ModifyReplicationTaskResponse = struct(n0, _MRTR, 0, [_RTe], [() => ReplicationTask]);
export var MoveReplicationTaskMessage = struct(n0, _MRTMo, 0, [_RTA, _TRIA], [0, 0]);
export var MoveReplicationTaskResponse = struct(n0, _MRTRo, 0, [_RTe], [() => ReplicationTask]);
export var ReplicationTask = struct(
  n0,
  _RTe,
  0,
  [_RTI, _SEA, _TEA, _RIA, _MT, _TM, _RTS, _S, _LFM, _SRt, _RTCD, _RTSD, _CSP, _CSPd, _RCec, _RTA, _RTSep, _TD, _TRIA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, () => ReplicationTaskStats, 0, 0]
);
export var ReplicationTaskStats = struct(
  n0,
  _RTSep,
  0,
  [_FLPP, _ETM, _TL, _TLa, _TQ, _TE, _FSD, _SDt, _SDto, _FLSD, _FLFD],
  [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4]
);
export var StartReplicationTaskAssessmentMessage = struct(n0, _SRTAM, 0, [_RTA], [0]);
export var StartReplicationTaskAssessmentResponse = struct(n0, _SRTAR, 0, [_RTe], [() => ReplicationTask]);
export var StartReplicationTaskMessage = struct(n0, _SRTM, 0, [_RTA, _SRTT, _CST, _CSP, _CSPd], [0, 0, 4, 0, 0]);
export var StartReplicationTaskResponse = struct(n0, _SRTR, 0, [_RTe], [() => ReplicationTask]);
export var StopReplicationTaskMessage = struct(n0, _SRTMt, 0, [_RTA], [0]);
export var StopReplicationTaskResponse = struct(n0, _SRTRt, 0, [_RTe], [() => ReplicationTask]);
export var ReplicationTaskList = list(n0, _RTL, 0, [
  () => ReplicationTask,
  {
    [_xN]: _RTe,
  },
]);
export var CreateReplicationTask = op(
  n0,
  _CRT,
  0,
  () => CreateReplicationTaskMessage,
  () => CreateReplicationTaskResponse
);
export var DeleteReplicationTask = op(
  n0,
  _DRT,
  0,
  () => DeleteReplicationTaskMessage,
  () => DeleteReplicationTaskResponse
);
export var DescribeReplicationTasks = op(
  n0,
  _DRTe,
  0,
  () => DescribeReplicationTasksMessage,
  () => DescribeReplicationTasksResponse
);
export var ModifyReplicationTask = op(
  n0,
  _MRT,
  0,
  () => ModifyReplicationTaskMessage,
  () => ModifyReplicationTaskResponse
);
export var MoveReplicationTask = op(
  n0,
  _MRTo,
  0,
  () => MoveReplicationTaskMessage,
  () => MoveReplicationTaskResponse
);
export var StartReplicationTask = op(
  n0,
  _SRTt,
  0,
  () => StartReplicationTaskMessage,
  () => StartReplicationTaskResponse
);
export var StartReplicationTaskAssessment = op(
  n0,
  _SRTA,
  0,
  () => StartReplicationTaskAssessmentMessage,
  () => StartReplicationTaskAssessmentResponse
);
export var StopReplicationTask = op(
  n0,
  _SRTto,
  0,
  () => StopReplicationTaskMessage,
  () => StopReplicationTaskResponse
);
