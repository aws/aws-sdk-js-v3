// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DI, _h, _Ot, _RIef, _Vali, _VOTPM, _VOTPMR, _VOTPMRe, _VOTPMRP, _VR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var VerificationResponse = struct(n0, _VR, 0, [_Vali], [2]);
export var VerifyOTPMessageRequest = struct(
  n0,
  _VOTPMR,
  0,
  [_AI, _VOTPMRP],
  [
    [0, 1],
    [() => VerifyOTPMessageRequestParameters, 16],
  ]
);
export var VerifyOTPMessageRequestParameters = struct(n0, _VOTPMRP, 0, [_DI, _Ot, _RIef], [0, 0, 0]);
export var VerifyOTPMessageResponse = struct(n0, _VOTPMRe, 0, [_VR], [[() => VerificationResponse, 16]]);
export var VerifyOTPMessage = op(
  n0,
  _VOTPM,
  {
    [_h]: ["POST", "/v1/apps/{ApplicationId}/verify-otp", 200],
  },
  () => VerifyOTPMessageRequest,
  () => VerifyOTPMessageResponse
);
