// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _aT,
  _cI,
  _cod,
  _ECFT,
  _ECFTR,
  _ECFTRB,
  _ECFTRx,
  _eI,
  _h,
  _prov,
  _req,
  _RT,
  _rT,
  _rTB,
  _RTR,
  _RTRB,
  _RTRe,
  _rU,
  _SS,
  _to,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var ExchangeCodeForTokenRequest = struct(
  n0,
  _ECFTR,
  0,
  [_prov, _req],
  [
    [0, 1],
    [() => ExchangeCodeForTokenRequestBody, 16],
  ]
);
export var ExchangeCodeForTokenRequestBody = struct(
  n0,
  _ECFTRB,
  0,
  [_cod, _rU, _cI],
  [[() => SensitiveString, 0], 0, [() => SensitiveString, 0]]
);
export var ExchangeCodeForTokenResponse = struct(
  n0,
  _ECFTRx,
  0,
  [_aT, _eI, _rT],
  [[() => SensitiveString, 0], 1, [() => SensitiveString, 0]]
);
export var RefreshTokenRequest = struct(
  n0,
  _RTR,
  0,
  [_prov, _rTB],
  [
    [0, 1],
    [() => RefreshTokenRequestBody, 16],
  ]
);
export var RefreshTokenRequestBody = struct(
  n0,
  _RTRB,
  0,
  [_to, _cI],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var RefreshTokenResponse = struct(n0, _RTRe, 0, [_aT, _eI], [[() => SensitiveString, 0], 1]);
export var ExchangeCodeForToken = op(
  n0,
  _ECFT,
  {
    [_h]: ["POST", "/tokens/{provider}", 200],
  },
  () => ExchangeCodeForTokenRequest,
  () => ExchangeCodeForTokenResponse
);
export var RefreshToken = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/tokens/{provider}/refresh", 200],
  },
  () => RefreshTokenRequest,
  () => RefreshTokenResponse
);
