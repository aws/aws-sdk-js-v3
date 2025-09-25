// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServiceException as __InternalServiceException,
  InvalidRequestException as __InvalidRequestException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _ADE,
  _BOC,
  _BOM,
  _C,
  _c,
  _CD,
  _CI,
  _CO,
  _Co,
  _e,
  _EOC,
  _EOM,
  _FC,
  _h,
  _hE,
  _I,
  _ID,
  _IDs,
  _II,
  _IRE,
  _ISE,
  _LRCAS,
  _LRCASR,
  _LRCASRi,
  _M,
  _MC,
  _MD,
  _MR,
  _NT,
  _PCS,
  _PI,
  _POI,
  _POIo,
  _PR,
  _RCAS,
  _RCASe,
  _RNFE,
  _S,
  _s,
  _Se,
  _St,
  _T,
  _TE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var Categories = struct(n0, _C, 0, [_MC, _MD], [64 | 0, () => MatchedDetails]);
export var CategoryDetails = struct(n0, _CD, 0, [_POI], [() => PointsOfInterest]);
export var CharacterOffsets = struct(n0, _CO, 0, [_BOC, _EOC], [1, 1]);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServiceException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRequestException
);
export var IssueDetected = struct(n0, _ID, 0, [_CO], [() => CharacterOffsets]);
export var ListRealtimeContactAnalysisSegmentsRequest = struct(n0, _LRCASR, 0, [_II, _CI, _MR, _NT], [0, 0, 1, 0]);
export var ListRealtimeContactAnalysisSegmentsResponse = struct(
  n0,
  _LRCASRi,
  0,
  [_S, _NT],
  [() => RealtimeContactAnalysisSegments, 0]
);
export var PointOfInterest = struct(n0, _POIo, 0, [_BOM, _EOM], [1, 1]);
export var PostContactSummary = struct(n0, _PCS, 0, [_Co, _St, _FC], [0, 0, 0]);
export var RealtimeContactAnalysisSegment = struct(
  n0,
  _RCAS,
  0,
  [_T, _C, _PCS],
  [() => Transcript, () => Categories, () => PostContactSummary]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var Transcript = struct(
  n0,
  _T,
  0,
  [_I, _PI, _PR, _Co, _BOM, _EOM, _Se, _IDs],
  [0, 0, 0, 0, 1, 1, 0, () => IssuesDetected]
);
export var Unit = "unit" as const;

export var IssuesDetected = list(n0, _IDs, 0, () => IssueDetected);
export var MatchedCategories = 64 | 0;

export var PointsOfInterest = list(n0, _POI, 0, () => PointOfInterest);
export var RealtimeContactAnalysisSegments = list(n0, _RCASe, 0, () => RealtimeContactAnalysisSegment);
export var MatchedDetails = map(n0, _MD, 0, 0, () => CategoryDetails);
export var ListRealtimeContactAnalysisSegments = op(
  n0,
  _LRCAS,
  {
    [_h]: ["POST", "/realtime-contact-analysis/analysis-segments", 200],
  },
  () => ListRealtimeContactAnalysisSegmentsRequest,
  () => ListRealtimeContactAnalysisSegmentsResponse
);
