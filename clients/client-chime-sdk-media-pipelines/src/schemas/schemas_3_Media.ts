// smithy-typescript generated code
import { list, map, struct } from "@smithy/core/schema";

import {
  _CD,
  _CDh,
  _CI,
  _CT,
  _De,
  _ES,
  _ET,
  _FN,
  _FS,
  _FST,
  _KVSRSRC,
  _KVSSRC,
  _MEe,
  _MIP,
  _MIPCA,
  _MIPES,
  _MIPESe,
  _MIRM,
  _MPA,
  _MPI,
  _MSR,
  _NOC,
  _PR,
  _RFF,
  _RSCe,
  _RSL,
  _SAt,
  _SCD,
  _SCt,
  _SRSRC,
  _St,
  _Sta,
  _STt,
  _T,
  _TR,
  Arn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelDefinition = struct(n0, _CD, 0, [_CI, _PR], [1, 0]);
export var FragmentSelector = struct(n0, _FS, 0, [_FST, _TR], [0, () => TimestampRange]);
export var KinesisVideoStreamRecordingSourceRuntimeConfiguration = struct(
  n0,
  _KVSRSRC,
  0,
  [_St, _FS],
  [() => RecordingStreamList, () => FragmentSelector]
);
export var KinesisVideoStreamSourceRuntimeConfiguration = struct(
  n0,
  _KVSSRC,
  0,
  [_St, _MEe, _MSR],
  [() => Streams, 0, 1]
);
export var MediaInsightsPipeline = struct(
  n0,
  _MIP,
  0,
  [_MPI, _MPA, _MIPCA, _Sta, _KVSSRC, _MIRM, _KVSRSRC, _SRSRC, _CT, _ES],
  [
    0,
    [() => Arn, 0],
    [() => Arn, 0],
    0,
    () => KinesisVideoStreamSourceRuntimeConfiguration,
    [() => MediaInsightsRuntimeMetadata, 0],
    () => KinesisVideoStreamRecordingSourceRuntimeConfiguration,
    [() => S3RecordingSinkRuntimeConfiguration, 0],
    5,
    () => MediaInsightsPipelineElementStatuses,
  ]
);
export var MediaInsightsPipelineElementStatus = struct(n0, _MIPES, 0, [_T, _Sta], [0, 0]);
export var RecordingStreamConfiguration = struct(n0, _RSCe, 0, [_SAt], [0]);
export var S3RecordingSinkRuntimeConfiguration = struct(n0, _SRSRC, 0, [_De, _RFF], [[() => Arn, 0], 0]);
export var StreamChannelDefinition = struct(n0, _SCD, 0, [_NOC, _CDh], [1, () => ChannelDefinitions]);
export var StreamConfiguration = struct(n0, _SCt, 0, [_SAt, _FN, _SCD], [0, 0, () => StreamChannelDefinition]);
export var TimestampRange = struct(n0, _TR, 0, [_STt, _ET], [4, 4]);
export var ChannelDefinitions = list(n0, _CDh, 0, () => ChannelDefinition);
export var MediaInsightsPipelineElementStatuses = list(n0, _MIPESe, 0, () => MediaInsightsPipelineElementStatus);
export var RecordingStreamList = list(n0, _RSL, 0, () => RecordingStreamConfiguration);
export var Streams = list(n0, _St, 0, () => StreamConfiguration);
export var MediaInsightsRuntimeMetadata = map(n0, _MIRM, 8, 0, 0);
