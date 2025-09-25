// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CAL,
  _CLp,
  _CR,
  _D,
  _DPN,
  _DSEM,
  _FBPN,
  _GVCP,
  _GVCPR,
  _GVCPRe,
  _GVCT,
  _GVCTR,
  _GVCTRe,
  _h,
  _PNC,
  _Pr,
  _PVCT,
  _PVCTR,
  _PVCTRu,
  _Te,
  _VCI,
  E164PhoneNumber,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorProxyRequest = struct(n0, _GVCPR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorProxyResponse = struct(n0, _GVCPRe, 0, [_Pr], [[() => Proxy, 0]]);
export var GetVoiceConnectorTerminationRequest = struct(n0, _GVCTR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorTerminationResponse = struct(n0, _GVCTRe, 0, [_Te], [[() => Termination, 0]]);
export var Proxy = struct(n0, _Pr, 0, [_DSEM, _D, _FBPN, _PNC], [1, 2, [() => E164PhoneNumber, 0], 64 | 0]);
export var PutVoiceConnectorTerminationRequest = struct(
  n0,
  _PVCTR,
  0,
  [_VCI, _Te],
  [
    [0, 1],
    [() => Termination, 0],
  ]
);
export var PutVoiceConnectorTerminationResponse = struct(n0, _PVCTRu, 0, [_Te], [[() => Termination, 0]]);
export var Termination = struct(
  n0,
  _Te,
  0,
  [_CLp, _DPN, _CR, _CAL, _D],
  [1, [() => E164PhoneNumber, 0], 64 | 0, 64 | 0, 2]
);
export var CallingRegionList = 64 | 0;

export var StringList = 64 | 0;

export var GetVoiceConnectorProxy = op(
  n0,
  _GVCP,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", 200],
  },
  () => GetVoiceConnectorProxyRequest,
  () => GetVoiceConnectorProxyResponse
);
export var GetVoiceConnectorTermination = op(
  n0,
  _GVCT,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/termination", 200],
  },
  () => GetVoiceConnectorTerminationRequest,
  () => GetVoiceConnectorTerminationResponse
);
export var PutVoiceConnectorTermination = op(
  n0,
  _PVCT,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/termination", 200],
  },
  () => PutVoiceConnectorTerminationRequest,
  () => PutVoiceConnectorTerminationResponse
);
