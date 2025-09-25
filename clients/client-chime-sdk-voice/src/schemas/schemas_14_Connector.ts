// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _GVCO,
  _GVCOR,
  _GVCORe,
  _H,
  _h,
  _O,
  _OR,
  _ORL,
  _Po,
  _Pri,
  _Pro,
  _PVCO,
  _PVCOR,
  _PVCORu,
  _R,
  _VCI,
  _W,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorOriginationRequest = struct(n0, _GVCOR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorOriginationResponse = struct(n0, _GVCORe, 0, [_O], [() => Origination]);
export var Origination = struct(n0, _O, 0, [_R, _D], [() => OriginationRouteList, 2]);
export var OriginationRoute = struct(n0, _OR, 0, [_H, _Po, _Pro, _Pri, _W], [0, 1, 0, 1, 1]);
export var PutVoiceConnectorOriginationRequest = struct(n0, _PVCOR, 0, [_VCI, _O], [[0, 1], () => Origination]);
export var PutVoiceConnectorOriginationResponse = struct(n0, _PVCORu, 0, [_O], [() => Origination]);
export var OriginationRouteList = list(n0, _ORL, 0, () => OriginationRoute);
export var GetVoiceConnectorOrigination = op(
  n0,
  _GVCO,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/origination", 200],
  },
  () => GetVoiceConnectorOriginationRequest,
  () => GetVoiceConnectorOriginationResponse
);
export var PutVoiceConnectorOrigination = op(
  n0,
  _PVCO,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/origination", 200],
  },
  () => PutVoiceConnectorOriginationRequest,
  () => PutVoiceConnectorOriginationResponse
);
