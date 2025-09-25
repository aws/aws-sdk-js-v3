// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _c,
  _CE,
  _CI,
  _CMPKVSP,
  _CMPKVSPR,
  _CMPKVSPRr,
  _Co,
  _CRT,
  _DMIPC,
  _DMIPCR,
  _DMP,
  _DMPKVSP,
  _DMPKVSPR,
  _DMPR,
  _DRIH,
  _E,
  _e,
  _FN,
  _h,
  _hE,
  _I,
  _KVSCU,
  _KVSPC,
  _KVSSTC,
  _LC,
  _M,
  _MIPC,
  _MPI,
  _PN,
  _RARA,
  _RI,
  _RTAC,
  _SAt,
  _SCt,
  _SSST,
  _SSSTR,
  _SSSTRt,
  _SSSTRto,
  _SSSTt,
  _SST,
  _SSTI,
  _SVTAT,
  _SVTATR,
  _SVTATRt,
  _SVTATRto,
  _SVTATt,
  _Ta,
  _UMIPC,
  _UMIPCR,
  _UMIPCRp,
  _UMIPS,
  _UMIPSR,
  _UMPKVSP,
  _UMPKVSPR,
  _UMPKVSPRp,
  _US,
  _VPDA,
  _VTAT,
  _VTATI,
  Arn,
  n0,
  Unit,
} from "./schemas_0";
import {
  MediaInsightsPipelineConfiguration,
  MediaInsightsPipelineConfigurationElements,
  RealTimeAlertConfiguration,
} from "./schemas_1_Media";
import { KinesisVideoStreamConfiguration, KinesisVideoStreamPoolConfiguration } from "./schemas_5_VideoStream";
import { SpeakerSearchTask, VoiceToneAnalysisTask } from "./schemas_6_Task";
import { TagList } from "./schemas_8_Media";
import { ClientRequestToken } from "./schemas_9_Media";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_Co, _M, _RI],
  [0, 0, 0],

  __ConflictException
);
export var CreateMediaPipelineKinesisVideoStreamPoolRequest = struct(
  n0,
  _CMPKVSPR,
  0,
  [_SCt, _PN, _CRT, _Ta],
  [() => KinesisVideoStreamConfiguration, 0, [() => ClientRequestToken, 4], () => TagList]
);
export var CreateMediaPipelineKinesisVideoStreamPoolResponse = struct(
  n0,
  _CMPKVSPRr,
  0,
  [_KVSPC],
  [[() => KinesisVideoStreamPoolConfiguration, 0]]
);
export var DeleteMediaInsightsPipelineConfigurationRequest = struct(n0, _DMIPCR, 0, [_I], [[0, 1]]);
export var DeleteMediaPipelineKinesisVideoStreamPoolRequest = struct(n0, _DMPKVSPR, 0, [_I], [[0, 1]]);
export var DeleteMediaPipelineRequest = struct(n0, _DMPR, 0, [_MPI], [[0, 1]]);
export var KinesisVideoStreamConfigurationUpdate = struct(n0, _KVSCU, 0, [_DRIH], [1]);
export var KinesisVideoStreamSourceTaskConfiguration = struct(n0, _KVSSTC, 0, [_SAt, _CI, _FN], [0, 1, 0]);
export var StartSpeakerSearchTaskRequest = struct(
  n0,
  _SSSTR,
  0,
  [_I, _VPDA, _KVSSTC, _CRT],
  [[0, 1], [() => Arn, 0], () => KinesisVideoStreamSourceTaskConfiguration, [() => ClientRequestToken, 4]]
);
export var StartSpeakerSearchTaskResponse = struct(n0, _SSSTRt, 0, [_SST], [() => SpeakerSearchTask]);
export var StartVoiceToneAnalysisTaskRequest = struct(
  n0,
  _SVTATR,
  0,
  [_I, _LC, _KVSSTC, _CRT],
  [[0, 1], 0, () => KinesisVideoStreamSourceTaskConfiguration, [() => ClientRequestToken, 4]]
);
export var StartVoiceToneAnalysisTaskResponse = struct(n0, _SVTATRt, 0, [_VTAT], [() => VoiceToneAnalysisTask]);
export var StopSpeakerSearchTaskRequest = struct(
  n0,
  _SSSTRto,
  0,
  [_I, _SSTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopVoiceToneAnalysisTaskRequest = struct(
  n0,
  _SVTATRto,
  0,
  [_I, _VTATI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var UpdateMediaInsightsPipelineConfigurationRequest = struct(
  n0,
  _UMIPCR,
  0,
  [_I, _RARA, _RTAC, _E],
  [[0, 1], [() => Arn, 0], () => RealTimeAlertConfiguration, [() => MediaInsightsPipelineConfigurationElements, 0]]
);
export var UpdateMediaInsightsPipelineConfigurationResponse = struct(
  n0,
  _UMIPCRp,
  0,
  [_MIPC],
  [[() => MediaInsightsPipelineConfiguration, 0]]
);
export var UpdateMediaInsightsPipelineStatusRequest = struct(n0, _UMIPSR, 0, [_I, _US], [[0, 1], 0]);
export var UpdateMediaPipelineKinesisVideoStreamPoolRequest = struct(
  n0,
  _UMPKVSPR,
  0,
  [_I, _SCt],
  [[0, 1], () => KinesisVideoStreamConfigurationUpdate]
);
export var UpdateMediaPipelineKinesisVideoStreamPoolResponse = struct(
  n0,
  _UMPKVSPRp,
  0,
  [_KVSPC],
  [[() => KinesisVideoStreamPoolConfiguration, 0]]
);
export var CreateMediaPipelineKinesisVideoStreamPool = op(
  n0,
  _CMPKVSP,
  {
    [_h]: ["POST", "/media-pipeline-kinesis-video-stream-pools", 201],
  },
  () => CreateMediaPipelineKinesisVideoStreamPoolRequest,
  () => CreateMediaPipelineKinesisVideoStreamPoolResponse
);
export var DeleteMediaInsightsPipelineConfiguration = op(
  n0,
  _DMIPC,
  {
    [_h]: ["DELETE", "/media-insights-pipeline-configurations/{Identifier}", 204],
  },
  () => DeleteMediaInsightsPipelineConfigurationRequest,
  () => Unit
);
export var DeleteMediaPipeline = op(
  n0,
  _DMP,
  {
    [_h]: ["DELETE", "/sdk-media-pipelines/{MediaPipelineId}", 204],
  },
  () => DeleteMediaPipelineRequest,
  () => Unit
);
export var DeleteMediaPipelineKinesisVideoStreamPool = op(
  n0,
  _DMPKVSP,
  {
    [_h]: ["DELETE", "/media-pipeline-kinesis-video-stream-pools/{Identifier}", 204],
  },
  () => DeleteMediaPipelineKinesisVideoStreamPoolRequest,
  () => Unit
);
export var StartSpeakerSearchTask = op(
  n0,
  _SSST,
  {
    [_h]: ["POST", "/media-insights-pipelines/{Identifier}/speaker-search-tasks?operation=start", 201],
  },
  () => StartSpeakerSearchTaskRequest,
  () => StartSpeakerSearchTaskResponse
);
export var StartVoiceToneAnalysisTask = op(
  n0,
  _SVTAT,
  {
    [_h]: ["POST", "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks?operation=start", 201],
  },
  () => StartVoiceToneAnalysisTaskRequest,
  () => StartVoiceToneAnalysisTaskResponse
);
export var StopSpeakerSearchTask = op(
  n0,
  _SSSTt,
  {
    [_h]: [
      "POST",
      "/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
      204,
    ],
  },
  () => StopSpeakerSearchTaskRequest,
  () => Unit
);
export var StopVoiceToneAnalysisTask = op(
  n0,
  _SVTATt,
  {
    [_h]: [
      "POST",
      "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
      204,
    ],
  },
  () => StopVoiceToneAnalysisTaskRequest,
  () => Unit
);
export var UpdateMediaInsightsPipelineConfiguration = op(
  n0,
  _UMIPC,
  {
    [_h]: ["PUT", "/media-insights-pipeline-configurations/{Identifier}", 200],
  },
  () => UpdateMediaInsightsPipelineConfigurationRequest,
  () => UpdateMediaInsightsPipelineConfigurationResponse
);
export var UpdateMediaInsightsPipelineStatus = op(
  n0,
  _UMIPS,
  {
    [_h]: ["PUT", "/media-insights-pipeline-status/{Identifier}", 200],
  },
  () => UpdateMediaInsightsPipelineStatusRequest,
  () => Unit
);
export var UpdateMediaPipelineKinesisVideoStreamPool = op(
  n0,
  _UMPKVSP,
  {
    [_h]: ["PUT", "/media-pipeline-kinesis-video-stream-pools/{Identifier}", 200],
  },
  () => UpdateMediaPipelineKinesisVideoStreamPoolRequest,
  () => UpdateMediaPipelineKinesisVideoStreamPoolResponse
);
