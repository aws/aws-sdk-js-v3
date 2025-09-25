// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aCI,
  _AGRE,
  _AGREc,
  _ARGR,
  _ARGRR,
  _ARGRRc,
  _aV,
  _BURS,
  _BURSFE,
  _BURSFEa,
  _BURSR,
  _BURSRa,
  _BURSSE,
  _BURSSEa,
  _DDAVRIS,
  _DDAVRISR,
  _DDAVRISRe,
  _e,
  _ED,
  _eD,
  _EDL,
  _eI,
  _eM,
  _eR,
  _ex,
  _fE,
  _FGRE,
  _FGREa,
  _gRI,
  _h,
  _it,
  _rE,
  _RGRE,
  _RGREe,
  _rIe,
  _rIes,
  _rRej,
  _RRGR,
  _RRGRR,
  _RRGRRe,
  _sCT,
  _sE,
  _st,
  _tAI,
  _tRa,
  _URSI,
  _URSRE,
  _URSREp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptGroupingRecommendationEntry = struct(n0, _AGRE, 0, [_gRI], [0]);
export var AcceptResourceGroupingRecommendationsRequest = struct(
  n0,
  _ARGRR,
  0,
  [_aA, _e],
  [0, () => AcceptGroupingRecommendationEntries]
);
export var AcceptResourceGroupingRecommendationsResponse = struct(
  n0,
  _ARGRRc,
  0,
  [_aA, _fE],
  [0, () => FailedGroupingRecommendationEntries]
);
export var BatchUpdateRecommendationStatusFailedEntry = struct(n0, _BURSFE, 0, [_eI, _eM], [0, 0]);
export var BatchUpdateRecommendationStatusRequest = struct(
  n0,
  _BURSR,
  0,
  [_aA, _rE],
  [0, () => UpdateRecommendationStatusRequestEntries]
);
export var BatchUpdateRecommendationStatusResponse = struct(
  n0,
  _BURSRa,
  0,
  [_aA, _sE, _fE],
  [0, () => BatchUpdateRecommendationStatusSuccessfulEntries, () => BatchUpdateRecommendationStatusFailedEntries]
);
export var BatchUpdateRecommendationStatusSuccessfulEntry = struct(
  n0,
  _BURSSE,
  0,
  [_eI, _rIe, _it, _ex, _aCI, _eR],
  [0, 0, () => UpdateRecommendationStatusItem, 2, 0, 0]
);
export var DescribeDraftAppVersionResourcesImportStatusRequest = struct(n0, _DDAVRISR, 0, [_aA], [0]);
export var DescribeDraftAppVersionResourcesImportStatusResponse = struct(
  n0,
  _DDAVRISRe,
  0,
  [_aA, _aV, _st, _sCT, _eM, _eD],
  [0, 0, 0, 4, 0, () => ErrorDetailList]
);
export var ErrorDetail = struct(n0, _ED, 0, [_eM], [0]);
export var FailedGroupingRecommendationEntry = struct(n0, _FGRE, 0, [_gRI, _eM], [0, 0]);
export var RejectGroupingRecommendationEntry = struct(n0, _RGRE, 0, [_gRI, _rRej], [0, 0]);
export var RejectResourceGroupingRecommendationsRequest = struct(
  n0,
  _RRGRR,
  0,
  [_aA, _e],
  [0, () => RejectGroupingRecommendationEntries]
);
export var RejectResourceGroupingRecommendationsResponse = struct(
  n0,
  _RRGRRe,
  0,
  [_aA, _fE],
  [0, () => FailedGroupingRecommendationEntries]
);
export var UpdateRecommendationStatusItem = struct(n0, _URSI, 0, [_rIes, _tAI, _tRa], [0, 0, 0]);
export var UpdateRecommendationStatusRequestEntry = struct(
  n0,
  _URSRE,
  0,
  [_eI, _rIe, _it, _ex, _aCI, _eR],
  [0, 0, () => UpdateRecommendationStatusItem, 2, 0, 0]
);
export var AcceptGroupingRecommendationEntries = list(n0, _AGREc, 0, () => AcceptGroupingRecommendationEntry);
export var BatchUpdateRecommendationStatusFailedEntries = list(
  n0,
  _BURSFEa,
  0,
  () => BatchUpdateRecommendationStatusFailedEntry
);
export var BatchUpdateRecommendationStatusSuccessfulEntries = list(
  n0,
  _BURSSEa,
  0,
  () => BatchUpdateRecommendationStatusSuccessfulEntry
);
export var ErrorDetailList = list(n0, _EDL, 0, () => ErrorDetail);
export var FailedGroupingRecommendationEntries = list(n0, _FGREa, 0, () => FailedGroupingRecommendationEntry);
export var RejectGroupingRecommendationEntries = list(n0, _RGREe, 0, () => RejectGroupingRecommendationEntry);
export var UpdateRecommendationStatusRequestEntries = list(
  n0,
  _URSREp,
  0,
  () => UpdateRecommendationStatusRequestEntry
);
export var AcceptResourceGroupingRecommendations = op(
  n0,
  _ARGR,
  {
    [_h]: ["POST", "/accept-resource-grouping-recommendations", 200],
  },
  () => AcceptResourceGroupingRecommendationsRequest,
  () => AcceptResourceGroupingRecommendationsResponse
);
export var BatchUpdateRecommendationStatus = op(
  n0,
  _BURS,
  {
    [_h]: ["POST", "/batch-update-recommendation-status", 200],
  },
  () => BatchUpdateRecommendationStatusRequest,
  () => BatchUpdateRecommendationStatusResponse
);
export var DescribeDraftAppVersionResourcesImportStatus = op(
  n0,
  _DDAVRIS,
  {
    [_h]: ["POST", "/describe-draft-app-version-resources-import-status", 200],
  },
  () => DescribeDraftAppVersionResourcesImportStatusRequest,
  () => DescribeDraftAppVersionResourcesImportStatusResponse
);
export var RejectResourceGroupingRecommendations = op(
  n0,
  _RRGR,
  {
    [_h]: ["POST", "/reject-resource-grouping-recommendations", 200],
  },
  () => RejectResourceGroupingRecommendationsRequest,
  () => RejectResourceGroupingRecommendationsResponse
);
