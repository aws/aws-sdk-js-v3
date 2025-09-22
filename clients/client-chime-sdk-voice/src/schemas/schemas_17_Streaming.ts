// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAo,
  _D,
  _DRIH,
  _GVCSC,
  _GVCSCR,
  _GVCSCRe,
  _h,
  _MIC,
  _NTo,
  _PVCSC,
  _PVCSCR,
  _PVCSCRu,
  _SC,
  _SNT,
  _SNTL,
  _SNTt,
  _VCI,
  Arn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorStreamingConfigurationRequest = struct(n0, _GVCSCR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorStreamingConfigurationResponse = struct(
  n0,
  _GVCSCRe,
  0,
  [_SC],
  [[() => StreamingConfiguration, 0]]
);
export var MediaInsightsConfiguration = struct(n0, _MIC, 0, [_D, _CAo], [2, [() => Arn, 0]]);
export var PutVoiceConnectorStreamingConfigurationRequest = struct(
  n0,
  _PVCSCR,
  0,
  [_VCI, _SC],
  [
    [0, 1],
    [() => StreamingConfiguration, 0],
  ]
);
export var PutVoiceConnectorStreamingConfigurationResponse = struct(
  n0,
  _PVCSCRu,
  0,
  [_SC],
  [[() => StreamingConfiguration, 0]]
);
export var StreamingConfiguration = struct(
  n0,
  _SC,
  0,
  [_DRIH, _D, _SNT, _MIC],
  [1, 2, () => StreamingNotificationTargetList, [() => MediaInsightsConfiguration, 0]]
);
export var StreamingNotificationTarget = struct(n0, _SNTt, 0, [_NTo], [0]);
export var StreamingNotificationTargetList = list(n0, _SNTL, 0, () => StreamingNotificationTarget);
export var GetVoiceConnectorStreamingConfiguration = op(
  n0,
  _GVCSC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/streaming-configuration", 200],
  },
  () => GetVoiceConnectorStreamingConfigurationRequest,
  () => GetVoiceConnectorStreamingConfigurationResponse
);
export var PutVoiceConnectorStreamingConfiguration = op(
  n0,
  _PVCSC,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/streaming-configuration", 200],
  },
  () => PutVoiceConnectorStreamingConfigurationRequest,
  () => PutVoiceConnectorStreamingConfigurationResponse
);
