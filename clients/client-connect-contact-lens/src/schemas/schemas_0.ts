const _ADE = "AccessDeniedException";
const _BOC = "BeginOffsetChar";
const _BOM = "BeginOffsetMillis";
const _C = "Categories";
const _CD = "CategoryDetails";
const _CI = "ContactId";
const _CO = "CharacterOffsets";
const _Co = "Content";
const _EOC = "EndOffsetChar";
const _EOM = "EndOffsetMillis";
const _FC = "FailureCode";
const _I = "Id";
const _ID = "IssueDetected";
const _IDs = "IssuesDetected";
const _II = "InstanceId";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServiceException";
const _LRCAS = "ListRealtimeContactAnalysisSegments";
const _LRCASR = "ListRealtimeContactAnalysisSegmentsRequest";
const _LRCASRi = "ListRealtimeContactAnalysisSegmentsResponse";
const _M = "Message";
const _MC = "MatchedCategories";
const _MD = "MatchedDetails";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PCS = "PostContactSummary";
const _PI = "ParticipantId";
const _POI = "PointsOfInterest";
const _POIo = "PointOfInterest";
const _PR = "ParticipantRole";
const _RCAS = "RealtimeContactAnalysisSegment";
const _RCASe = "RealtimeContactAnalysisSegments";
const _RNFE = "ResourceNotFoundException";
const _S = "Segments";
const _Se = "Sentiment";
const _St = "Status";
const _T = "Transcript";
const _TE = "ThrottlingException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.connectcontactlens";
const n0 = "com.amazonaws.connectcontactlens";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { ConnectContactLensServiceException as __ConnectContactLensServiceException } from "../models/ConnectContactLensServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServiceException as __InternalServiceException,
  InvalidRequestException as __InvalidRequestException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var Categories: StaticStructureSchema = [3, n0, _C, 0, [_MC, _MD], [64 | 0, () => MatchedDetails]];
export var CategoryDetails: StaticStructureSchema = [3, n0, _CD, 0, [_POI], [() => PointsOfInterest]];
export var CharacterOffsets: StaticStructureSchema = [3, n0, _CO, 0, [_BOC, _EOC], [1, 1]];
export var InternalServiceException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceException, __InternalServiceException);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var IssueDetected: StaticStructureSchema = [3, n0, _ID, 0, [_CO], [() => CharacterOffsets]];
export var ListRealtimeContactAnalysisSegmentsRequest: StaticStructureSchema = [
  3,
  n0,
  _LRCASR,
  0,
  [_II, _CI, _MR, _NT],
  [0, 0, 1, 0],
];
export var ListRealtimeContactAnalysisSegmentsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRCASRi,
  0,
  [_S, _NT],
  [() => RealtimeContactAnalysisSegments, 0],
];
export var PointOfInterest: StaticStructureSchema = [3, n0, _POIo, 0, [_BOM, _EOM], [1, 1]];
export var PostContactSummary: StaticStructureSchema = [3, n0, _PCS, 0, [_Co, _St, _FC], [0, 0, 0]];
export var RealtimeContactAnalysisSegment: StaticStructureSchema = [
  3,
  n0,
  _RCAS,
  0,
  [_T, _C, _PCS],
  [() => Transcript, () => Categories, () => PostContactSummary],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var Transcript: StaticStructureSchema = [
  3,
  n0,
  _T,
  0,
  [_I, _PI, _PR, _Co, _BOM, _EOM, _Se, _IDs],
  [0, 0, 0, 0, 1, 1, 0, () => IssuesDetected],
];
export var __Unit = "unit" as const;

export var ConnectContactLensServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ConnectContactLensServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(ConnectContactLensServiceException, __ConnectContactLensServiceException);

export var IssuesDetected: StaticListSchema = [1, n0, _IDs, 0, () => IssueDetected];
export var MatchedCategories = 64 | 0;

export var PointsOfInterest: StaticListSchema = [1, n0, _POI, 0, () => PointOfInterest];
export var RealtimeContactAnalysisSegments: StaticListSchema = [1, n0, _RCASe, 0, () => RealtimeContactAnalysisSegment];
export var MatchedDetails: StaticMapSchema = [2, n0, _MD, 0, 0, () => CategoryDetails];
export var ListRealtimeContactAnalysisSegments: StaticOperationSchema = [
  9,
  n0,
  _LRCAS,
  {
    [_h]: ["POST", "/realtime-contact-analysis/analysis-segments", 200],
  },
  () => ListRealtimeContactAnalysisSegmentsRequest,
  () => ListRealtimeContactAnalysisSegmentsResponse,
];
