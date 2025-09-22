// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _eA,
  _h,
  _hQ,
  _i,
  _lUA,
  _LWSAT,
  _LWSATR,
  _LWSATRi,
  _mR,
  _n,
  _nT,
  _sAI,
  _sATe,
  _SATL,
  _SATS,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkspaceServiceAccountTokensRequest = struct(
  n0,
  _LWSATR,
  0,
  [_mR, _nT, _sAI, _wI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListWorkspaceServiceAccountTokensResponse = struct(
  n0,
  _LWSATRi,
  0,
  [_nT, _sATe, _sAI, _wI],
  [0, () => ServiceAccountTokenList, 0, 0]
);
export var ServiceAccountTokenSummary = struct(n0, _SATS, 0, [_i, _n, _cA, _eA, _lUA], [0, 0, 4, 4, 4]);
export var ServiceAccountTokenList = list(n0, _SATL, 0, () => ServiceAccountTokenSummary);
export var ListWorkspaceServiceAccountTokens = op(
  n0,
  _LWSAT,
  {
    [_h]: ["GET", "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens", 200],
  },
  () => ListWorkspaceServiceAccountTokensRequest,
  () => ListWorkspaceServiceAccountTokensResponse
);
