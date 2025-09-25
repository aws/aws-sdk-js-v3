// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _aTI, _ATS, _CAT, _CATR, _CATRr, _DAT, _DATR, _DATRe, _eT, _ht, _i, _n, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessTokenSecret = sim(n0, _ATS, 0, 8);
export var CreateAccessTokenRequest = struct(n0, _CATR, 0, [_n, _eT], [0, 5]);
export var CreateAccessTokenResponse = struct(
  n0,
  _CATRr,
  0,
  [_s, _n, _eT, _aTI],
  [[() => AccessTokenSecret, 0], 0, 5, 0]
);
export var DeleteAccessTokenRequest = struct(n0, _DATR, 0, [_i], [[0, 1]]);
export var DeleteAccessTokenResponse = struct(n0, _DATRe, 0, [], []);
export var CreateAccessToken = op(
  n0,
  _CAT,
  {
    [_ht]: ["PUT", "/v1/accessTokens", 201],
  },
  () => CreateAccessTokenRequest,
  () => CreateAccessTokenResponse
);
export var DeleteAccessToken = op(
  n0,
  _DAT,
  {
    [_ht]: ["DELETE", "/v1/accessTokens/{id}", 200],
  },
  () => DeleteAccessTokenRequest,
  () => DeleteAccessTokenResponse
);
