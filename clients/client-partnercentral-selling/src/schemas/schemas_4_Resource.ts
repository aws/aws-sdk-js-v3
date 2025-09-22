// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ASw,
  _C,
  _CA,
  _CRSJ,
  _CRSJR,
  _CRSJRr,
  _CT,
  _DRSJ,
  _DRSJR,
  _EI,
  _EII,
  _EIIn,
  _EIn,
  _GRSJ,
  _GRSJR,
  _GRSJRe,
  _h,
  _I,
  _Id,
  _IT,
  _LEBAIT,
  _LEBAITR,
  _LEBAITRi,
  _LEBAITS,
  _LEBAITSi,
  _LEFOT,
  _LEFOTR,
  _LEFOTRi,
  _LEFOTS,
  _LEFOTSi,
  _LF,
  _LRSJ,
  _LRSJR,
  _LRSJRi,
  _LSED,
  _LTSB,
  _M,
  _MR,
  _NT,
  _OIp,
  _OIpp,
  _RA,
  _RCe,
  _RI,
  _RIe,
  _RSJI,
  _RSJIe,
  _RSJS,
  _RSJSe,
  _RSJSL,
  _RSTI,
  _RSTN,
  _RT,
  _SB,
  _SEBAIT,
  _SEBAITR,
  _SEBAITRt,
  _SEFOT,
  _SEFOTR,
  _SEFOTRt,
  _SO,
  _SOo,
  _Sor,
  _SRSJ,
  _SRSJR,
  _SRSJRt,
  _SRSJt,
  _ST,
  _St,
  _TA,
  _Ta,
  _TI,
  _TIa,
  _TS,
  _TSa,
  _V,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Resource";

/* eslint no-var: 0 */

export var AwsSubmission = struct(n0, _ASw, 0, [_IT, _V], [0, 0]);
export var CreateResourceSnapshotJobRequest = struct(
  n0,
  _CRSJR,
  0,
  [_C, _CT, _EI, _RT, _RI, _RSTI, _Ta],
  [0, [0, 4], 0, 0, 0, 0, () => TagList]
);
export var CreateResourceSnapshotJobResponse = struct(n0, _CRSJRr, 0, [_Id, _Ar], [0, 0]);
export var DeleteResourceSnapshotJobRequest = struct(n0, _DRSJR, 0, [_C, _RSJI], [0, 0]);
export var GetResourceSnapshotJobRequest = struct(n0, _GRSJR, 0, [_C, _RSJI], [0, 0]);
export var GetResourceSnapshotJobResponse = struct(
  n0,
  _GRSJRe,
  0,
  [_C, _Id, _Ar, _EIn, _RT, _RIe, _RA, _RSTN, _CA, _St, _LSED, _LF],
  [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0]
);
export var ListEngagementByAcceptingInvitationTasksRequest = struct(
  n0,
  _LEBAITR,
  0,
  [_MR, _NT, _Sor, _C, _TS, _OIp, _EII, _TI],
  [1, 0, () => ListTasksSortBase, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ListEngagementByAcceptingInvitationTasksResponse = struct(
  n0,
  _LEBAITRi,
  0,
  [_TSa, _NT],
  [() => ListEngagementByAcceptingInvitationTaskSummaries, 0]
);
export var ListEngagementByAcceptingInvitationTaskSummary = struct(
  n0,
  _LEBAITS,
  0,
  [_TIa, _TA, _ST, _TS, _M, _RCe, _OIpp, _RSJIe, _EIIn],
  [0, 0, 5, 0, 0, 0, 0, 0, 0]
);
export var ListEngagementFromOpportunityTasksRequest = struct(
  n0,
  _LEFOTR,
  0,
  [_MR, _NT, _Sor, _C, _TS, _TI, _OIp, _EI],
  [1, 0, () => ListTasksSortBase, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ListEngagementFromOpportunityTasksResponse = struct(
  n0,
  _LEFOTRi,
  0,
  [_TSa, _NT],
  [() => ListEngagementFromOpportunityTaskSummaries, 0]
);
export var ListEngagementFromOpportunityTaskSummary = struct(
  n0,
  _LEFOTS,
  0,
  [_TIa, _TA, _ST, _TS, _M, _RCe, _OIpp, _RSJIe, _EIn, _EIIn],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0]
);
export var ListResourceSnapshotJobsRequest = struct(
  n0,
  _LRSJR,
  0,
  [_C, _MR, _NT, _EI, _St, _Sor],
  [0, 1, 0, 0, 0, () => SortObject]
);
export var ListResourceSnapshotJobsResponse = struct(
  n0,
  _LRSJRi,
  0,
  [_RSJS, _NT],
  [() => ResourceSnapshotJobSummaryList, 0]
);
export var ListTasksSortBase = struct(n0, _LTSB, 0, [_SO, _SB], [0, 0]);
export var ResourceSnapshotJobSummary = struct(n0, _RSJSe, 0, [_Id, _Ar, _EIn, _St], [0, 0, 0, 0]);
export var SortObject = struct(n0, _SOo, 0, [_SB, _SO], [0, 0]);
export var StartEngagementByAcceptingInvitationTaskRequest = struct(
  n0,
  _SEBAITR,
  0,
  [_C, _CT, _I, _Ta],
  [0, [0, 4], 0, () => TagList]
);
export var StartEngagementByAcceptingInvitationTaskResponse = struct(
  n0,
  _SEBAITRt,
  0,
  [_TIa, _TA, _ST, _TS, _M, _RCe, _OIpp, _RSJIe, _EIIn],
  [0, 0, 5, 0, 0, 0, 0, 0, 0]
);
export var StartEngagementFromOpportunityTaskRequest = struct(
  n0,
  _SEFOTR,
  0,
  [_C, _CT, _I, _ASw, _Ta],
  [0, [0, 4], 0, () => AwsSubmission, () => TagList]
);
export var StartEngagementFromOpportunityTaskResponse = struct(
  n0,
  _SEFOTRt,
  0,
  [_TIa, _TA, _ST, _TS, _M, _RCe, _OIpp, _RSJIe, _EIn, _EIIn],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0]
);
export var StartResourceSnapshotJobRequest = struct(n0, _SRSJR, 0, [_C, _RSJI], [0, 0]);
export var StopResourceSnapshotJobRequest = struct(n0, _SRSJRt, 0, [_C, _RSJI], [0, 0]);
export var EngagementInvitationIdentifiers = 64 | 0;

export var ListEngagementByAcceptingInvitationTaskSummaries = list(
  n0,
  _LEBAITSi,
  0,
  () => ListEngagementByAcceptingInvitationTaskSummary
);
export var ListEngagementFromOpportunityTaskSummaries = list(
  n0,
  _LEFOTSi,
  0,
  () => ListEngagementFromOpportunityTaskSummary
);
export var OpportunityIdentifiers = 64 | 0;

export var ResourceSnapshotJobSummaryList = list(n0, _RSJSL, 0, () => ResourceSnapshotJobSummary);
export var TaskIdentifiers = 64 | 0;

export var TaskStatuses = 64 | 0;

export var CreateResourceSnapshotJob = op(
  n0,
  _CRSJ,
  {
    [_h]: ["POST", "/CreateResourceSnapshotJob", 200],
  },
  () => CreateResourceSnapshotJobRequest,
  () => CreateResourceSnapshotJobResponse
);
export var DeleteResourceSnapshotJob = op(
  n0,
  _DRSJ,
  {
    [_h]: ["POST", "/DeleteResourceSnapshotJob", 204],
  },
  () => DeleteResourceSnapshotJobRequest,
  () => Unit
);
export var GetResourceSnapshotJob = op(
  n0,
  _GRSJ,
  {
    [_h]: ["POST", "/GetResourceSnapshotJob", 200],
  },
  () => GetResourceSnapshotJobRequest,
  () => GetResourceSnapshotJobResponse
);
export var ListEngagementByAcceptingInvitationTasks = op(
  n0,
  _LEBAIT,
  {
    [_h]: ["POST", "/ListEngagementByAcceptingInvitationTasks", 200],
  },
  () => ListEngagementByAcceptingInvitationTasksRequest,
  () => ListEngagementByAcceptingInvitationTasksResponse
);
export var ListEngagementFromOpportunityTasks = op(
  n0,
  _LEFOT,
  {
    [_h]: ["POST", "/ListEngagementFromOpportunityTasks", 200],
  },
  () => ListEngagementFromOpportunityTasksRequest,
  () => ListEngagementFromOpportunityTasksResponse
);
export var ListResourceSnapshotJobs = op(
  n0,
  _LRSJ,
  {
    [_h]: ["POST", "/ListResourceSnapshotJobs", 200],
  },
  () => ListResourceSnapshotJobsRequest,
  () => ListResourceSnapshotJobsResponse
);
export var StartEngagementByAcceptingInvitationTask = op(
  n0,
  _SEBAIT,
  {
    [_h]: ["POST", "/StartEngagementByAcceptingInvitationTask", 200],
  },
  () => StartEngagementByAcceptingInvitationTaskRequest,
  () => StartEngagementByAcceptingInvitationTaskResponse
);
export var StartEngagementFromOpportunityTask = op(
  n0,
  _SEFOT,
  {
    [_h]: ["POST", "/StartEngagementFromOpportunityTask", 200],
  },
  () => StartEngagementFromOpportunityTaskRequest,
  () => StartEngagementFromOpportunityTaskResponse
);
export var StartResourceSnapshotJob = op(
  n0,
  _SRSJ,
  {
    [_h]: ["POST", "/StartResourceSnapshotJob", 204],
  },
  () => StartResourceSnapshotJobRequest,
  () => Unit
);
export var StopResourceSnapshotJob = op(
  n0,
  _SRSJt,
  {
    [_h]: ["POST", "/StopResourceSnapshotJob", 204],
  },
  () => StopResourceSnapshotJobRequest,
  () => Unit
);
