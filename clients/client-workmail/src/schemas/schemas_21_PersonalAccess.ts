// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DC,
  _DLU,
  _DPAT,
  _DPATR,
  _DPATRe,
  _ETx,
  _GPATM,
  _GPATMR,
  _GPATMRe,
  _LPAT,
  _LPATR,
  _LPATRi,
  _MRa,
  _N,
  _NT,
  _OI,
  _PATI,
  _PATS,
  _PATSe,
  _PATSL,
  _Sc,
  _UIs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePersonalAccessTokenRequest = struct(n0, _DPATR, 0, [_OI, _PATI], [0, 0]);
export var DeletePersonalAccessTokenResponse = struct(n0, _DPATRe, 0, [], []);
export var GetPersonalAccessTokenMetadataRequest = struct(n0, _GPATMR, 0, [_OI, _PATI], [0, 0]);
export var GetPersonalAccessTokenMetadataResponse = struct(
  n0,
  _GPATMRe,
  0,
  [_PATI, _UIs, _N, _DC, _DLU, _ETx, _Sc],
  [0, 0, 0, 4, 4, 4, 64 | 0]
);
export var ListPersonalAccessTokensRequest = struct(n0, _LPATR, 0, [_OI, _UIs, _NT, _MRa], [0, 0, 0, 1]);
export var ListPersonalAccessTokensResponse = struct(
  n0,
  _LPATRi,
  0,
  [_NT, _PATS],
  [0, () => PersonalAccessTokenSummaryList]
);
export var PersonalAccessTokenSummary = struct(
  n0,
  _PATSe,
  0,
  [_PATI, _UIs, _N, _DC, _DLU, _ETx, _Sc],
  [0, 0, 0, 4, 4, 4, 64 | 0]
);
export var PersonalAccessTokenScopeList = 64 | 0;

export var PersonalAccessTokenSummaryList = list(n0, _PATSL, 0, () => PersonalAccessTokenSummary);
export var DeletePersonalAccessToken = op(
  n0,
  _DPAT,
  2,
  () => DeletePersonalAccessTokenRequest,
  () => DeletePersonalAccessTokenResponse
);
export var GetPersonalAccessTokenMetadata = op(
  n0,
  _GPATM,
  2,
  () => GetPersonalAccessTokenMetadataRequest,
  () => GetPersonalAccessTokenMetadataResponse
);
export var ListPersonalAccessTokens = op(
  n0,
  _LPAT,
  2,
  () => ListPersonalAccessTokensRequest,
  () => ListPersonalAccessTokensResponse
);
