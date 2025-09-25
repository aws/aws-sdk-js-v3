// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _AKT,
  _c,
  _CWAK,
  _CWAKR,
  _CWAKRr,
  _CWSAT,
  _CWSATR,
  _CWSATRr,
  _e,
  _h,
  _hE,
  _i,
  _k,
  _kN,
  _kR,
  _m,
  _n,
  _qC,
  _rI,
  _rT,
  _sAI,
  _sAT,
  _SATK,
  _SATSWK,
  _sC,
  _SQEE,
  _sTL,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKeyToken = sim(n0, _AKT, 0, 8);
export var ServiceAccountTokenKey = sim(n0, _SATK, 0, 8);
export var CreateWorkspaceApiKeyRequest = struct(n0, _CWAKR, 0, [_kN, _kR, _sTL, _wI], [0, 0, 1, [0, 1]]);
export var CreateWorkspaceApiKeyResponse = struct(n0, _CWAKRr, 0, [_kN, _k, _wI], [0, [() => ApiKeyToken, 0], 0]);
export var CreateWorkspaceServiceAccountTokenRequest = struct(
  n0,
  _CWSATR,
  0,
  [_n, _sTL, _sAI, _wI],
  [0, 1, [0, 1], [0, 1]]
);
export var CreateWorkspaceServiceAccountTokenResponse = struct(
  n0,
  _CWSATRr,
  0,
  [_sAT, _sAI, _wI],
  [[() => ServiceAccountTokenSummaryWithKey, 0], 0, 0]
);
export var ServiceAccountTokenSummaryWithKey = struct(
  n0,
  _SATSWK,
  0,
  [_i, _n, _k],
  [0, 0, [() => ServiceAccountTokenKey, 0]]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var CreateWorkspaceApiKey = op(
  n0,
  _CWAK,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/apikeys", 200],
  },
  () => CreateWorkspaceApiKeyRequest,
  () => CreateWorkspaceApiKeyResponse
);
export var CreateWorkspaceServiceAccountToken = op(
  n0,
  _CWSAT,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens", 200],
  },
  () => CreateWorkspaceServiceAccountTokenRequest,
  () => CreateWorkspaceServiceAccountTokenResponse
);
