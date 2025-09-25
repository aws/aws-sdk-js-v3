// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AR,
  _CT,
  _GVC,
  _GVCR,
  _GVCRe,
  _h,
  _IT,
  _LAVCR,
  _LAVCRR,
  _N,
  _OHN,
  _RE,
  _UT,
  _UVC,
  _UVCR,
  _UVCRp,
  _VC,
  _VCA,
  _VCI,
  _VCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorRequest = struct(n0, _GVCR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorResponse = struct(n0, _GVCRe, 0, [_VC], [() => VoiceConnector]);
export var ListAvailableVoiceConnectorRegionsResponse = struct(n0, _LAVCRR, 0, [_VCR], [64 | 0]);
export var UpdateVoiceConnectorRequest = struct(n0, _UVCR, 0, [_VCI, _N, _RE], [[0, 1], 0, 2]);
export var UpdateVoiceConnectorResponse = struct(n0, _UVCRp, 0, [_VC], [() => VoiceConnector]);
export var VoiceConnector = struct(
  n0,
  _VC,
  0,
  [_VCI, _AR, _N, _OHN, _RE, _CT, _UT, _VCA, _IT],
  [0, 0, 0, 0, 2, 5, 5, 0, 0]
);
export var VoiceConnectorAwsRegionList = 64 | 0;

export var GetVoiceConnector = op(
  n0,
  _GVC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}", 200],
  },
  () => GetVoiceConnectorRequest,
  () => GetVoiceConnectorResponse
);
export var ListAvailableVoiceConnectorRegions = op(
  n0,
  _LAVCR,
  {
    [_h]: ["GET", "/voice-connector-regions", 200],
  },
  () => Unit,
  () => ListAvailableVoiceConnectorRegionsResponse
);
export var UpdateVoiceConnector = op(
  n0,
  _UVC,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}", 200],
  },
  () => UpdateVoiceConnectorRequest,
  () => UpdateVoiceConnectorResponse
);
