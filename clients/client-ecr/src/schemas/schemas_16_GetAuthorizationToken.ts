// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AD, _aD, _ADL, _aT, _eA, _GAT, _GATR, _GATRe, _pE, _rIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationData = struct(n0, _AD, 0, [_aT, _eA, _pE], [0, 4, 0]);
export var GetAuthorizationTokenRequest = struct(n0, _GATR, 0, [_rIe], [64 | 0]);
export var GetAuthorizationTokenResponse = struct(n0, _GATRe, 0, [_aD], [() => AuthorizationDataList]);
export var AuthorizationDataList = list(n0, _ADL, 0, () => AuthorizationData);
export var GetAuthorizationTokenRegistryIdList = 64 | 0;

export var GetAuthorizationToken = op(
  n0,
  _GAT,
  0,
  () => GetAuthorizationTokenRequest,
  () => GetAuthorizationTokenResponse
);
