// smithy-typescript generated code
import { error, list, map, op, struct, struct as uni } from "@smithy/core/schema";

import { OutputTypeNotFoundException as __OutputTypeNotFoundException } from "../models/index";
import {
  _AItt,
  _AN,
  _ATb,
  _Atta,
  _Attr,
  _BOC,
  _C,
  _c,
  _Cate,
  _CE,
  _CI,
  _Co,
  _COh,
  _CTo,
  _DIe,
  _DN,
  _e,
  _EOC,
  _ETv,
  _Eve,
  _FC,
  _h,
  _hE,
  _I,
  _ICI,
  _IDs,
  _II,
  _Is,
  _LRCASV,
  _LRCASVR,
  _LRCASVRi,
  _M,
  _MD,
  _MRa,
  _NCC,
  _NSD,
  _NT,
  _OT,
  _OTNFE,
  _PCS,
  _PD,
  _PI,
  _POI,
  _PR,
  _RCAS,
  _RCASe,
  _Red,
  _RTCAA,
  _RTCAAe,
  _RTCACD,
  _RTCACI,
  _RTCACIe,
  _RTCAID,
  _RTCAIDe,
  _RTCAMD,
  _RTCAPOI,
  _RTCAPOIe,
  _RTCASA,
  _RTCASC,
  _RTCASE,
  _RTCASI,
  _RTCASPCS,
  _RTCAST,
  _RTCATD,
  _RTCATIR,
  _RTCATIWC,
  _RTCATIWCe,
  _RTCATIWCO,
  _RTCATIWCOe,
  _SCIE,
  _SCIER,
  _SCIERe,
  _SCtr,
  _Se,
  _Sen,
  _SI,
  _SMCT,
  _St,
  _STeg,
  _Sub,
  _T,
  _Tim,
  _TIr,
  _Tr,
  n0,
} from "./schemas_0";
import { ChatStreamingConfiguration } from "./schemas_95_";

/* eslint no-var: 0 */

export var ChatEvent = struct(n0, _CE, 0, [_T, _CTo, _Co], [0, 0, 0]);
export var ListRealtimeContactAnalysisSegmentsV2Request = struct(
  n0,
  _LRCASVR,
  0,
  [_II, _CI, _MRa, _NT, _OT, _STeg],
  [[0, 1], [0, 1], 1, 0, 0, 64 | 0]
);
export var ListRealtimeContactAnalysisSegmentsV2Response = struct(
  n0,
  _LRCASVRi,
  0,
  [_C, _St, _Se, _NT],
  [0, 0, () => RealtimeContactAnalysisSegments, 0]
);
export var NewSessionDetails = struct(
  n0,
  _NSD,
  0,
  [_SMCT, _PD, _Attr, _SCtr],
  [64 | 0, () => ParticipantDetails, 128 | 0, () => ChatStreamingConfiguration]
);
export var OutputTypeNotFoundException = error(
  n0,
  _OTNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __OutputTypeNotFoundException
);
export var ParticipantDetails = struct(n0, _PD, 0, [_DN], [0]);
export var RealTimeContactAnalysisAttachment = struct(n0, _RTCAA, 0, [_AN, _CTo, _AItt, _St], [0, 0, 0, 0]);
export var RealTimeContactAnalysisCategoryDetails = struct(
  n0,
  _RTCACD,
  0,
  [_POI],
  [() => RealTimeContactAnalysisPointsOfInterest]
);
export var RealTimeContactAnalysisCharacterInterval = struct(n0, _RTCACI, 0, [_BOC, _EOC], [1, 1]);
export var RealTimeContactAnalysisIssueDetected = struct(
  n0,
  _RTCAID,
  0,
  [_TIr],
  [() => RealTimeContactAnalysisTranscriptItemsWithContent]
);
export var RealTimeContactAnalysisPointOfInterest = struct(
  n0,
  _RTCAPOI,
  0,
  [_TIr],
  [() => RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets]
);
export var RealTimeContactAnalysisSegmentAttachments = struct(
  n0,
  _RTCASA,
  0,
  [_I, _PI, _PR, _DN, _Atta, _Tim],
  [0, 0, 0, 0, () => RealTimeContactAnalysisAttachments, () => RealTimeContactAnalysisTimeData]
);
export var RealTimeContactAnalysisSegmentCategories = struct(
  n0,
  _RTCASC,
  0,
  [_MD],
  [() => RealTimeContactAnalysisMatchedDetails]
);
export var RealTimeContactAnalysisSegmentEvent = struct(
  n0,
  _RTCASE,
  0,
  [_I, _PI, _PR, _DN, _ETv, _Tim],
  [0, 0, 0, 0, 0, () => RealTimeContactAnalysisTimeData]
);
export var RealTimeContactAnalysisSegmentIssues = struct(
  n0,
  _RTCASI,
  0,
  [_IDs],
  [() => RealTimeContactAnalysisIssuesDetected]
);
export var RealTimeContactAnalysisSegmentPostContactSummary = struct(n0, _RTCASPCS, 0, [_Co, _St, _FC], [0, 0, 0]);
export var RealTimeContactAnalysisSegmentTranscript = struct(
  n0,
  _RTCAST,
  0,
  [_I, _PI, _PR, _DN, _Co, _CTo, _Tim, _Red, _Sen],
  [0, 0, 0, 0, 0, 0, () => RealTimeContactAnalysisTimeData, () => RealTimeContactAnalysisTranscriptItemRedaction, 0]
);
export var RealTimeContactAnalysisTranscriptItemRedaction = struct(
  n0,
  _RTCATIR,
  0,
  [_COh],
  [() => RealTimeContactAnalysisCharacterIntervals]
);
export var RealTimeContactAnalysisTranscriptItemWithCharacterOffsets = struct(
  n0,
  _RTCATIWCO,
  0,
  [_I, _COh],
  [0, () => RealTimeContactAnalysisCharacterInterval]
);
export var RealTimeContactAnalysisTranscriptItemWithContent = struct(
  n0,
  _RTCATIWC,
  0,
  [_Co, _I, _COh],
  [0, 0, () => RealTimeContactAnalysisCharacterInterval]
);
export var SendChatIntegrationEventRequest = struct(
  n0,
  _SCIER,
  0,
  [_SI, _DIe, _Sub, _Eve, _NSD],
  [0, 0, 0, () => ChatEvent, () => NewSessionDetails]
);
export var SendChatIntegrationEventResponse = struct(n0, _SCIERe, 0, [_ICI, _NCC], [0, 2]);
export var RealTimeContactAnalysisAttachments = list(n0, _RTCAAe, 0, () => RealTimeContactAnalysisAttachment);
export var RealTimeContactAnalysisCharacterIntervals = list(
  n0,
  _RTCACIe,
  0,
  () => RealTimeContactAnalysisCharacterInterval
);
export var RealTimeContactAnalysisIssuesDetected = list(n0, _RTCAIDe, 0, () => RealTimeContactAnalysisIssueDetected);
export var RealTimeContactAnalysisPointsOfInterest = list(
  n0,
  _RTCAPOIe,
  0,
  () => RealTimeContactAnalysisPointOfInterest
);
export var RealtimeContactAnalysisSegments = list(n0, _RCAS, 0, () => RealtimeContactAnalysisSegment);
export var RealTimeContactAnalysisSegmentTypes = 64 | 0;

export var RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets = list(
  n0,
  _RTCATIWCOe,
  0,
  () => RealTimeContactAnalysisTranscriptItemWithCharacterOffsets
);
export var RealTimeContactAnalysisTranscriptItemsWithContent = list(
  n0,
  _RTCATIWCe,
  0,
  () => RealTimeContactAnalysisTranscriptItemWithContent
);
export var SupportedMessagingContentTypes = 64 | 0;

export var RealTimeContactAnalysisMatchedDetails = map(n0, _RTCAMD, 0, 0, () => RealTimeContactAnalysisCategoryDetails);
export var RealtimeContactAnalysisSegment = uni(
  n0,
  _RCASe,
  0,
  [_Tr, _Cate, _Is, _Eve, _Atta, _PCS],
  [
    () => RealTimeContactAnalysisSegmentTranscript,
    () => RealTimeContactAnalysisSegmentCategories,
    () => RealTimeContactAnalysisSegmentIssues,
    () => RealTimeContactAnalysisSegmentEvent,
    () => RealTimeContactAnalysisSegmentAttachments,
    () => RealTimeContactAnalysisSegmentPostContactSummary,
  ]
);
export var RealTimeContactAnalysisTimeData = uni(n0, _RTCATD, 0, [_ATb], [5]);
export var ListRealtimeContactAnalysisSegmentsV2 = op(
  n0,
  _LRCASV,
  {
    [_h]: ["POST", "/contact/list-real-time-analysis-segments-v2/{InstanceId}/{ContactId}", 200],
  },
  () => ListRealtimeContactAnalysisSegmentsV2Request,
  () => ListRealtimeContactAnalysisSegmentsV2Response
);
export var SendChatIntegrationEvent = op(
  n0,
  _SCIE,
  {
    [_h]: ["POST", "/chat-integration-event", 200],
  },
  () => SendChatIntegrationEventRequest,
  () => SendChatIntegrationEventResponse
);
