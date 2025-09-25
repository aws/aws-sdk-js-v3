// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _CS, _GIPC, _GIPCR, _GIPCRe, _h, _IPI, _PS, _RA, _SN, _SS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CognitoStreams = struct(n0, _CS, 0, [_SN, _RA, _SS], [0, 0, 0]);
export var GetIdentityPoolConfigurationRequest = struct(n0, _GIPCR, 0, [_IPI], [[0, 1]]);
export var GetIdentityPoolConfigurationResponse = struct(
  n0,
  _GIPCRe,
  0,
  [_IPI, _PS, _CS],
  [0, () => PushSync, () => CognitoStreams]
);
export var PushSync = struct(n0, _PS, 0, [_AA, _RA], [64 | 0, 0]);
export var Unit = "unit" as const;

export var ApplicationArnList = 64 | 0;

export var GetIdentityPoolConfiguration = op(
  n0,
  _GIPC,
  {
    [_h]: ["GET", "/identitypools/{IdentityPoolId}/configuration", 200],
  },
  () => GetIdentityPoolConfigurationRequest,
  () => GetIdentityPoolConfigurationResponse
);
