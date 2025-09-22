// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceLimitExceededException as __ResourceLimitExceededException } from "../models/index";
import {
  _c,
  _CMIP,
  _CMIPC,
  _CMIPCR,
  _CMIPCRr,
  _CMIPR,
  _CMIPRr,
  _Co,
  _CRT,
  _E,
  _e,
  _h,
  _hE,
  _hQ,
  _KVSP,
  _KVSPS,
  _KVSPSL,
  _KVSRSRC,
  _KVSSRC,
  _LMIPC,
  _LMIPCR,
  _LMIPCRi,
  _LMPKVSP,
  _LMPKVSPR,
  _LMPKVSPRi,
  _M,
  _MIP,
  _MIPC,
  _MIPCA,
  _MIPCe,
  _MIPCI,
  _MIPCN,
  _MIPCS,
  _MIPCSL,
  _MIRM,
  _MR,
  _mr,
  _NT,
  _nt,
  _PA,
  _PI,
  _PN,
  _RARA,
  _RI,
  _RLEE,
  _RTAC,
  _SRSRC,
  _Ta,
  Arn,
  n0,
} from "./schemas_0";
import {
  MediaInsightsPipelineConfiguration,
  MediaInsightsPipelineConfigurationElements,
  RealTimeAlertConfiguration,
} from "./schemas_1_Media";
import {
  KinesisVideoStreamRecordingSourceRuntimeConfiguration,
  KinesisVideoStreamSourceRuntimeConfiguration,
  MediaInsightsPipeline,
  MediaInsightsRuntimeMetadata,
  S3RecordingSinkRuntimeConfiguration,
} from "./schemas_3_Media";
import { TagList } from "./schemas_8_Media";
import { ClientRequestToken } from "./schemas_9_Media";

/* eslint no-var: 0 */

export var CreateMediaInsightsPipelineConfigurationRequest = struct(
  n0,
  _CMIPCR,
  0,
  [_MIPCN, _RARA, _RTAC, _E, _Ta, _CRT],
  [
    0,
    [() => Arn, 0],
    () => RealTimeAlertConfiguration,
    [() => MediaInsightsPipelineConfigurationElements, 0],
    () => TagList,
    [() => ClientRequestToken, 4],
  ]
);
export var CreateMediaInsightsPipelineConfigurationResponse = struct(
  n0,
  _CMIPCRr,
  0,
  [_MIPC],
  [[() => MediaInsightsPipelineConfiguration, 0]]
);
export var CreateMediaInsightsPipelineRequest = struct(
  n0,
  _CMIPR,
  0,
  [_MIPCA, _KVSSRC, _MIRM, _KVSRSRC, _SRSRC, _Ta, _CRT],
  [
    [() => Arn, 0],
    () => KinesisVideoStreamSourceRuntimeConfiguration,
    [() => MediaInsightsRuntimeMetadata, 0],
    () => KinesisVideoStreamRecordingSourceRuntimeConfiguration,
    [() => S3RecordingSinkRuntimeConfiguration, 0],
    () => TagList,
    [() => ClientRequestToken, 4],
  ]
);
export var CreateMediaInsightsPipelineResponse = struct(n0, _CMIPRr, 0, [_MIP], [[() => MediaInsightsPipeline, 0]]);
export var KinesisVideoStreamPoolSummary = struct(n0, _KVSPS, 0, [_PN, _PI, _PA], [0, 0, [() => Arn, 0]]);
export var ListMediaInsightsPipelineConfigurationsRequest = struct(
  n0,
  _LMIPCR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListMediaInsightsPipelineConfigurationsResponse = struct(
  n0,
  _LMIPCRi,
  0,
  [_MIPCe, _NT],
  [[() => MediaInsightsPipelineConfigurationSummaryList, 0], 0]
);
export var ListMediaPipelineKinesisVideoStreamPoolsRequest = struct(
  n0,
  _LMPKVSPR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListMediaPipelineKinesisVideoStreamPoolsResponse = struct(
  n0,
  _LMPKVSPRi,
  0,
  [_KVSP, _NT],
  [[() => KinesisVideoStreamPoolSummaryList, 0], 0]
);
export var MediaInsightsPipelineConfigurationSummary = struct(
  n0,
  _MIPCS,
  0,
  [_MIPCN, _MIPCI, _MIPCA],
  [0, 0, [() => Arn, 0]]
);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_Co, _M, _RI],
  [0, 0, 0],

  __ResourceLimitExceededException
);
export var KinesisVideoStreamPoolSummaryList = list(n0, _KVSPSL, 0, [() => KinesisVideoStreamPoolSummary, 0]);
export var MediaInsightsPipelineConfigurationSummaryList = list(n0, _MIPCSL, 0, [
  () => MediaInsightsPipelineConfigurationSummary,
  0,
]);
export var CreateMediaInsightsPipeline = op(
  n0,
  _CMIP,
  {
    [_h]: ["POST", "/media-insights-pipelines", 201],
  },
  () => CreateMediaInsightsPipelineRequest,
  () => CreateMediaInsightsPipelineResponse
);
export var CreateMediaInsightsPipelineConfiguration = op(
  n0,
  _CMIPC,
  {
    [_h]: ["POST", "/media-insights-pipeline-configurations", 201],
  },
  () => CreateMediaInsightsPipelineConfigurationRequest,
  () => CreateMediaInsightsPipelineConfigurationResponse
);
export var ListMediaInsightsPipelineConfigurations = op(
  n0,
  _LMIPC,
  {
    [_h]: ["GET", "/media-insights-pipeline-configurations", 200],
  },
  () => ListMediaInsightsPipelineConfigurationsRequest,
  () => ListMediaInsightsPipelineConfigurationsResponse
);
export var ListMediaPipelineKinesisVideoStreamPools = op(
  n0,
  _LMPKVSP,
  {
    [_h]: ["GET", "/media-pipeline-kinesis-video-stream-pools", 200],
  },
  () => ListMediaPipelineKinesisVideoStreamPoolsRequest,
  () => ListMediaPipelineKinesisVideoStreamPoolsResponse
);
