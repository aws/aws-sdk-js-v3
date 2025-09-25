// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAI, _aBI, _DAA, _DAAR, _DAARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppAuthorizationRequest = struct(
  n0,
  _DAAR,
  0,
  [_aBI, _aAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAppAuthorizationResponse = struct(n0, _DAARe, 0, [], []);
export var DeleteAppAuthorization = op(
  n0,
  _DAA,
  {
    [_h]: ["DELETE", "/appbundles/{appBundleIdentifier}/appauthorizations/{appAuthorizationIdentifier}", 204],
  },
  () => DeleteAppAuthorizationRequest,
  () => DeleteAppAuthorizationResponse
);
