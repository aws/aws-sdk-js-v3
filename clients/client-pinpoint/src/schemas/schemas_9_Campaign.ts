// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ASJL,
  _ASR,
  _CH,
  _CL,
  _CWME,
  _Dai,
  _DC,
  _ETE,
  _GAS,
  _GASR,
  _GASRe,
  _h,
  _JL,
  _L,
  _LFN,
  _LMD,
  _MDa,
  _Mo,
  _MPS,
  _QT,
  _Se,
  _TC,
  _TCo,
  _To,
  _UAS,
  _UASR,
  _UASRp,
  _WASR,
  _WU,
  n0,
  QuietTime,
} from "./schemas_0";
import { JourneyTimeframeCap } from "./schemas_36_Journey";

/* eslint no-var: 0 */

export var ApplicationSettingsJourneyLimits = struct(n0, _ASJL, 0, [_DC, _TC, _TCo], [1, () => JourneyTimeframeCap, 1]);
export var ApplicationSettingsResource = struct(
  n0,
  _ASR,
  0,
  [_AI, _CH, _LMD, _L, _QT, _JL],
  [0, () => CampaignHook, 0, () => CampaignLimits, () => QuietTime, () => ApplicationSettingsJourneyLimits]
);
export var CampaignHook = struct(n0, _CH, 0, [_LFN, _Mo, _WU], [0, 0, 0]);
export var CampaignLimits = struct(n0, _CL, 0, [_Dai, _MDa, _MPS, _To, _Se], [1, 1, 1, 1, 1]);
export var GetApplicationSettingsRequest = struct(n0, _GASR, 0, [_AI], [[0, 1]]);
export var GetApplicationSettingsResponse = struct(n0, _GASRe, 0, [_ASR], [[() => ApplicationSettingsResource, 16]]);
export var UpdateApplicationSettingsRequest = struct(
  n0,
  _UASR,
  0,
  [_AI, _WASR],
  [
    [0, 1],
    [() => WriteApplicationSettingsRequest, 16],
  ]
);
export var UpdateApplicationSettingsResponse = struct(n0, _UASRp, 0, [_ASR], [[() => ApplicationSettingsResource, 16]]);
export var WriteApplicationSettingsRequest = struct(
  n0,
  _WASR,
  0,
  [_CH, _CWME, _ETE, _L, _QT, _JL],
  [() => CampaignHook, 2, 2, () => CampaignLimits, () => QuietTime, () => ApplicationSettingsJourneyLimits]
);
export var GetApplicationSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/settings", 200],
  },
  () => GetApplicationSettingsRequest,
  () => GetApplicationSettingsResponse
);
export var UpdateApplicationSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/settings", 200],
  },
  () => UpdateApplicationSettingsRequest,
  () => UpdateApplicationSettingsResponse
);
