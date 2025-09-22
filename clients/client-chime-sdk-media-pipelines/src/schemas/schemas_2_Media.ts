// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAC,
  _AC,
  _ACC,
  _ACCu,
  _ACu,
  _AI,
  _AKEC,
  _AKKI,
  _ASOC,
  _ASP,
  _ASR,
  _Au,
  _BC,
  _BT,
  _C,
  _CAC,
  _CCC,
  _CMCP,
  _CMCPR,
  _CMCPr,
  _CMCPRr,
  _CMCPRre,
  _CMCPRrea,
  _CMLCP,
  _CMLCPR,
  _CMLCPRr,
  _CMSP,
  _CMSPR,
  _CMSPRr,
  _CO,
  _CR,
  _CRT,
  _CS,
  _CSL,
  _CSLo,
  _CSLon,
  _CSMC,
  _CSMCC,
  _CSMLCC,
  _CSo,
  _CT,
  _CV,
  _CVAC,
  _CVCC,
  _DC,
  _DCCC,
  _De,
  _EUI,
  _EUIL,
  _EUIT,
  _GMCP,
  _GMCPR,
  _GMCPRe,
  _GMP,
  _GMPR,
  _GMPRe,
  _GVC,
  _h,
  _HC,
  _HLC,
  _hQ,
  _L,
  _LCRTMPC,
  _LCSC,
  _LCSCi,
  _LCSL,
  _LCSLi,
  _LMCP,
  _LMCPR,
  _LMCPRi,
  _LMP,
  _LMPR,
  _LMPRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MCP,
  _MCPe,
  _MCPed,
  _MCPS,
  _MCPSC,
  _MCPSL,
  _ME,
  _MECC,
  _MIP,
  _MLCP,
  _MP,
  _MPA,
  _MPe,
  _MPI,
  _MPL,
  _MPS,
  _MR,
  _mr,
  _MSP,
  _MSS,
  _MSSe,
  _MSSL,
  _MSSLe,
  _MST,
  _MT,
  _NT,
  _nt,
  _POC,
  _PP,
  _R,
  _RARN,
  _RSC,
  _RTMPC,
  _S,
  _SA,
  _SAi,
  _SAKMP,
  _SBSC,
  _SC,
  _Si,
  _SIRA,
  _So,
  _SS,
  _ST,
  _Sta,
  _STi,
  _SVS,
  _T,
  _Ta,
  _TAR,
  _TC,
  _TK,
  _TM,
  _TMCC,
  _TO,
  _TP,
  _TRa,
  _TRR,
  _TRRa,
  _U,
  _UR,
  _URR,
  _URRn,
  _UT,
  _V,
  _VA,
  _VAC,
  _VCC,
  _VLC,
  Arn,
  n0,
} from "./schemas_0";
import { MediaInsightsPipeline } from "./schemas_3_Media";
import { TagList } from "./schemas_8_Media";
import { ClientRequestToken } from "./schemas_9_Media";

/* eslint no-var: 0 */

export var ExternalUserIdType = sim(n0, _EUIT, 0, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var ActiveSpeakerOnlyConfiguration = struct(n0, _ASOC, 0, [_ASP], [0]);
export var ArtifactsConcatenationConfiguration = struct(
  n0,
  _ACC,
  0,
  [_Au, _V, _C, _DC, _TM, _ME, _CV],
  [
    () => AudioConcatenationConfiguration,
    () => VideoConcatenationConfiguration,
    () => ContentConcatenationConfiguration,
    () => DataChannelConcatenationConfiguration,
    () => TranscriptionMessagesConcatenationConfiguration,
    () => MeetingEventsConcatenationConfiguration,
    () => CompositedVideoConcatenationConfiguration,
  ]
);
export var ArtifactsConfiguration = struct(
  n0,
  _AC,
  0,
  [_Au, _V, _C, _CV],
  [
    () => AudioArtifactsConfiguration,
    () => VideoArtifactsConfiguration,
    () => ContentArtifactsConfiguration,
    () => CompositedVideoArtifactsConfiguration,
  ]
);
export var AudioArtifactsConfiguration = struct(n0, _AAC, 0, [_MT], [0]);
export var AudioConcatenationConfiguration = struct(n0, _ACCu, 0, [_S], [0]);
export var ChimeSdkMeetingConcatenationConfiguration = struct(
  n0,
  _CSMCC,
  0,
  [_AC],
  [() => ArtifactsConcatenationConfiguration]
);
export var ChimeSdkMeetingConfiguration = struct(
  n0,
  _CSMC,
  0,
  [_SC, _AC],
  [[() => SourceConfiguration, 0], () => ArtifactsConfiguration]
);
export var ChimeSdkMeetingLiveConnectorConfiguration = struct(
  n0,
  _CSMLCC,
  0,
  [_A, _MT, _CV, _SC],
  [[() => Arn, 0], 0, () => CompositedVideoArtifactsConfiguration, [() => SourceConfiguration, 0]]
);
export var CompositedVideoArtifactsConfiguration = struct(
  n0,
  _CVAC,
  0,
  [_L, _R, _GVC],
  [0, 0, () => GridViewConfiguration]
);
export var CompositedVideoConcatenationConfiguration = struct(n0, _CVCC, 0, [_S], [0]);
export var ConcatenationSink = struct(n0, _CS, 0, [_T, _SBSC], [0, [() => S3BucketSinkConfiguration, 0]]);
export var ConcatenationSource = struct(
  n0,
  _CSo,
  0,
  [_T, _MCPSC],
  [0, [() => MediaCapturePipelineSourceConfiguration, 0]]
);
export var ContentArtifactsConfiguration = struct(n0, _CAC, 0, [_S, _MT], [0, 0]);
export var ContentConcatenationConfiguration = struct(n0, _CCC, 0, [_S], [0]);
export var CreateMediaCapturePipelineRequest = struct(
  n0,
  _CMCPR,
  0,
  [_ST, _SA, _STi, _SAi, _CRT, _CSMC, _SAKMP, _SIRA, _Ta],
  [
    0,
    [() => Arn, 0],
    0,
    [() => Arn, 0],
    [() => ClientRequestToken, 4],
    [() => ChimeSdkMeetingConfiguration, 0],
    () => SseAwsKeyManagementParams,
    [() => Arn, 0],
    () => TagList,
  ]
);
export var CreateMediaCapturePipelineResponse = struct(n0, _CMCPRr, 0, [_MCP], [[() => MediaCapturePipeline, 0]]);
export var CreateMediaConcatenationPipelineRequest = struct(
  n0,
  _CMCPRre,
  0,
  [_So, _Si, _CRT, _Ta],
  [[() => ConcatenationSourceList, 0], [() => ConcatenationSinkList, 0], [() => ClientRequestToken, 4], () => TagList]
);
export var CreateMediaConcatenationPipelineResponse = struct(
  n0,
  _CMCPRrea,
  0,
  [_MCPe],
  [[() => MediaConcatenationPipeline, 0]]
);
export var CreateMediaLiveConnectorPipelineRequest = struct(
  n0,
  _CMLCPR,
  0,
  [_So, _Si, _CRT, _Ta],
  [[() => LiveConnectorSourceList, 0], [() => LiveConnectorSinkList, 0], [() => ClientRequestToken, 4], () => TagList]
);
export var CreateMediaLiveConnectorPipelineResponse = struct(
  n0,
  _CMLCPRr,
  0,
  [_MLCP],
  [[() => MediaLiveConnectorPipeline, 0]]
);
export var CreateMediaStreamPipelineRequest = struct(
  n0,
  _CMSPR,
  0,
  [_So, _Si, _CRT, _Ta],
  [[() => MediaStreamSourceList, 0], [() => MediaStreamSinkList, 0], [() => ClientRequestToken, 4], () => TagList]
);
export var CreateMediaStreamPipelineResponse = struct(n0, _CMSPRr, 0, [_MSP], [[() => MediaStreamPipeline, 0]]);
export var DataChannelConcatenationConfiguration = struct(n0, _DCCC, 0, [_S], [0]);
export var GetMediaCapturePipelineRequest = struct(n0, _GMCPR, 0, [_MPI], [[0, 1]]);
export var GetMediaCapturePipelineResponse = struct(n0, _GMCPRe, 0, [_MCP], [[() => MediaCapturePipeline, 0]]);
export var GetMediaPipelineRequest = struct(n0, _GMPR, 0, [_MPI], [[0, 1]]);
export var GetMediaPipelineResponse = struct(n0, _GMPRe, 0, [_MP], [[() => MediaPipeline, 0]]);
export var GridViewConfiguration = struct(
  n0,
  _GVC,
  0,
  [_CSL, _POC, _ASOC, _HLC, _VLC, _VA, _CO],
  [
    0,
    () => PresenterOnlyConfiguration,
    () => ActiveSpeakerOnlyConfiguration,
    () => HorizontalLayoutConfiguration,
    () => VerticalLayoutConfiguration,
    () => VideoAttribute,
    0,
  ]
);
export var HorizontalLayoutConfiguration = struct(n0, _HLC, 0, [_TO, _TP, _TC, _TAR], [0, 0, 1, 0]);
export var ListMediaCapturePipelinesRequest = struct(
  n0,
  _LMCPR,
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
export var ListMediaCapturePipelinesResponse = struct(
  n0,
  _LMCPRi,
  0,
  [_MCPed, _NT],
  [() => MediaCapturePipelineSummaryList, 0]
);
export var ListMediaPipelinesRequest = struct(
  n0,
  _LMPR,
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
export var ListMediaPipelinesResponse = struct(n0, _LMPRi, 0, [_MPe, _NT], [() => MediaPipelineList, 0]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var LiveConnectorRTMPConfiguration = struct(
  n0,
  _LCRTMPC,
  0,
  [_U, _ACu, _ASR],
  [[() => SensitiveString, 0], 0, 0]
);
export var LiveConnectorSinkConfiguration = struct(
  n0,
  _LCSC,
  0,
  [_STi, _RTMPC],
  [0, [() => LiveConnectorRTMPConfiguration, 0]]
);
export var LiveConnectorSourceConfiguration = struct(
  n0,
  _LCSCi,
  0,
  [_ST, _CSMLCC],
  [0, [() => ChimeSdkMeetingLiveConnectorConfiguration, 0]]
);
export var MediaCapturePipeline = struct(
  n0,
  _MCP,
  0,
  [_MPI, _MPA, _ST, _SA, _Sta, _STi, _SAi, _CT, _UT, _CSMC, _SAKMP, _SIRA],
  [
    0,
    0,
    0,
    [() => Arn, 0],
    0,
    0,
    [() => Arn, 0],
    5,
    5,
    [() => ChimeSdkMeetingConfiguration, 0],
    () => SseAwsKeyManagementParams,
    [() => Arn, 0],
  ]
);
export var MediaCapturePipelineSourceConfiguration = struct(
  n0,
  _MCPSC,
  0,
  [_MPA, _CSMC],
  [[() => Arn, 0], () => ChimeSdkMeetingConcatenationConfiguration]
);
export var MediaCapturePipelineSummary = struct(n0, _MCPS, 0, [_MPI, _MPA], [0, 0]);
export var MediaConcatenationPipeline = struct(
  n0,
  _MCPe,
  0,
  [_MPI, _MPA, _So, _Si, _Sta, _CT, _UT],
  [0, 0, [() => ConcatenationSourceList, 0], [() => ConcatenationSinkList, 0], 0, 5, 5]
);
export var MediaLiveConnectorPipeline = struct(
  n0,
  _MLCP,
  0,
  [_So, _Si, _MPI, _MPA, _Sta, _CT, _UT],
  [[() => LiveConnectorSourceList, 0], [() => LiveConnectorSinkList, 0], 0, 0, 0, 5, 5]
);
export var MediaPipeline = struct(
  n0,
  _MP,
  0,
  [_MCP, _MLCP, _MCPe, _MIP, _MSP],
  [
    [() => MediaCapturePipeline, 0],
    [() => MediaLiveConnectorPipeline, 0],
    [() => MediaConcatenationPipeline, 0],
    [() => MediaInsightsPipeline, 0],
    [() => MediaStreamPipeline, 0],
  ]
);
export var MediaPipelineSummary = struct(n0, _MPS, 0, [_MPI, _MPA], [0, 0]);
export var MediaStreamPipeline = struct(
  n0,
  _MSP,
  0,
  [_MPI, _MPA, _CT, _UT, _Sta, _So, _Si],
  [0, 0, 5, 5, 0, [() => MediaStreamSourceList, 0], [() => MediaStreamSinkList, 0]]
);
export var MediaStreamSink = struct(n0, _MSS, 0, [_SAi, _STi, _RSC, _MST], [[() => Arn, 0], 0, 1, 0]);
export var MediaStreamSource = struct(n0, _MSSe, 0, [_ST, _SA], [0, [() => Arn, 0]]);
export var MeetingEventsConcatenationConfiguration = struct(n0, _MECC, 0, [_S], [0]);
export var PresenterOnlyConfiguration = struct(n0, _POC, 0, [_PP], [0]);
export var S3BucketSinkConfiguration = struct(n0, _SBSC, 0, [_De], [[() => Arn, 0]]);
export var SelectedVideoStreams = struct(n0, _SVS, 0, [_AI, _EUI], [64 | 0, [() => ExternalUserIdList, 0]]);
export var SourceConfiguration = struct(n0, _SC, 0, [_SVS], [[() => SelectedVideoStreams, 0]]);
export var SseAwsKeyManagementParams = struct(n0, _SAKMP, 0, [_AKKI, _AKEC], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TranscriptionMessagesConcatenationConfiguration = struct(n0, _TMCC, 0, [_S], [0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var VerticalLayoutConfiguration = struct(n0, _VLC, 0, [_TO, _TP, _TC, _TAR], [0, 0, 1, 0]);
export var VideoArtifactsConfiguration = struct(n0, _VAC, 0, [_S, _MT], [0, 0]);
export var VideoAttribute = struct(n0, _VA, 0, [_CR, _BC, _HC, _BT], [1, 0, 0, 1]);
export var VideoConcatenationConfiguration = struct(n0, _VCC, 0, [_S], [0]);
export var AttendeeIdList = 64 | 0;

export var ConcatenationSinkList = list(n0, _CSLo, 0, [() => ConcatenationSink, 0]);
export var ConcatenationSourceList = list(n0, _CSLon, 0, [() => ConcatenationSource, 0]);
export var ExternalUserIdList = list(n0, _EUIL, 0, [() => ExternalUserIdType, 0]);
export var LiveConnectorSinkList = list(n0, _LCSL, 0, [() => LiveConnectorSinkConfiguration, 0]);
export var LiveConnectorSourceList = list(n0, _LCSLi, 0, [() => LiveConnectorSourceConfiguration, 0]);
export var MediaCapturePipelineSummaryList = list(n0, _MCPSL, 0, () => MediaCapturePipelineSummary);
export var MediaPipelineList = list(n0, _MPL, 0, () => MediaPipelineSummary);
export var MediaStreamSinkList = list(n0, _MSSL, 0, [() => MediaStreamSink, 0]);
export var MediaStreamSourceList = list(n0, _MSSLe, 0, [() => MediaStreamSource, 0]);
export var TagKeyList = 64 | 0;

export var CreateMediaCapturePipeline = op(
  n0,
  _CMCP,
  {
    [_h]: ["POST", "/sdk-media-capture-pipelines", 201],
  },
  () => CreateMediaCapturePipelineRequest,
  () => CreateMediaCapturePipelineResponse
);
export var CreateMediaConcatenationPipeline = op(
  n0,
  _CMCPr,
  {
    [_h]: ["POST", "/sdk-media-concatenation-pipelines", 201],
  },
  () => CreateMediaConcatenationPipelineRequest,
  () => CreateMediaConcatenationPipelineResponse
);
export var CreateMediaLiveConnectorPipeline = op(
  n0,
  _CMLCP,
  {
    [_h]: ["POST", "/sdk-media-live-connector-pipelines", 201],
  },
  () => CreateMediaLiveConnectorPipelineRequest,
  () => CreateMediaLiveConnectorPipelineResponse
);
export var CreateMediaStreamPipeline = op(
  n0,
  _CMSP,
  {
    [_h]: ["POST", "/sdk-media-stream-pipelines", 201],
  },
  () => CreateMediaStreamPipelineRequest,
  () => CreateMediaStreamPipelineResponse
);
export var GetMediaCapturePipeline = op(
  n0,
  _GMCP,
  {
    [_h]: ["GET", "/sdk-media-capture-pipelines/{MediaPipelineId}", 200],
  },
  () => GetMediaCapturePipelineRequest,
  () => GetMediaCapturePipelineResponse
);
export var GetMediaPipeline = op(
  n0,
  _GMP,
  {
    [_h]: ["GET", "/sdk-media-pipelines/{MediaPipelineId}", 200],
  },
  () => GetMediaPipelineRequest,
  () => GetMediaPipelineResponse
);
export var ListMediaCapturePipelines = op(
  n0,
  _LMCP,
  {
    [_h]: ["GET", "/sdk-media-capture-pipelines", 200],
  },
  () => ListMediaCapturePipelinesRequest,
  () => ListMediaCapturePipelinesResponse
);
export var ListMediaPipelines = op(
  n0,
  _LMP,
  {
    [_h]: ["GET", "/sdk-media-pipelines", 200],
  },
  () => ListMediaPipelinesRequest,
  () => ListMediaPipelinesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags?operation=tag-resource", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
