// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AD, _aD, _aT, _eA, _GAT, _GATR, _GATRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationData = struct(n0, _AD, 0, [_aT, _eA], [0, 4]);
export var GetAuthorizationTokenRequest = struct(n0, _GATR, 0, [], []);
export var GetAuthorizationTokenResponse = struct(n0, _GATRe, 0, [_aD], [() => AuthorizationData]);
export var GetAuthorizationToken = op(
  n0,
  _GAT,
  0,
  () => GetAuthorizationTokenRequest,
  () => GetAuthorizationTokenResponse
);
