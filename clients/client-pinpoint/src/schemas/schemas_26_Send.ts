// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _Ad,
  _AI,
  _BN,
  _Cha,
  _CLo,
  _DI,
  _DSel,
  _EI,
  _EMR,
  _ERndp,
  _h,
  _Lan,
  _MI,
  _MOEMR,
  _MOMR,
  _MRe,
  _MRes,
  _OI,
  _R,
  _RIe,
  _RIef,
  _SC,
  _SM,
  _SOTPM,
  _SOTPMR,
  _SOTPMRe,
  _SOTPMRP,
  _TIem,
  _UT,
  _VP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EndpointMessageResult = struct(n0, _EMR, 0, [_Ad, _DSel, _MI, _SC, _SM, _UT], [0, 0, 0, 1, 0, 0]);
export var MessageResponse = struct(
  n0,
  _MRe,
  0,
  [_AI, _ERndp, _RIe, _R],
  [0, () => MapOfEndpointMessageResult, 0, () => MapOfMessageResult]
);
export var MessageResult = struct(n0, _MRes, 0, [_DSel, _MI, _SC, _SM, _UT], [0, 0, 1, 0, 0]);
export var SendOTPMessageRequest = struct(
  n0,
  _SOTPMR,
  0,
  [_AI, _SOTPMRP],
  [
    [0, 1],
    [() => SendOTPMessageRequestParameters, 16],
  ]
);
export var SendOTPMessageRequestParameters = struct(
  n0,
  _SOTPMRP,
  0,
  [_AA, _BN, _Cha, _CLo, _DI, _EI, _Lan, _OI, _RIef, _TIem, _VP],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1]
);
export var SendOTPMessageResponse = struct(n0, _SOTPMRe, 0, [_MRe], [[() => MessageResponse, 16]]);
export var MapOfEndpointMessageResult = map(n0, _MOEMR, 0, 0, () => EndpointMessageResult);
export var MapOfMessageResult = map(n0, _MOMR, 0, 0, () => MessageResult);
export var SendOTPMessage = op(
  n0,
  _SOTPM,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/otp", 200],
  },
  () => SendOTPMessageRequest,
  () => SendOTPMessageResponse
);
