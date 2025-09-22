// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _h,
  _hQ,
  _I,
  _II,
  _LMR,
  _LMT,
  _LSP,
  _LSPR,
  _LSPRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _SPS,
  _SPSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSecurityProfilesRequest = struct(
  n0,
  _LSPR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSecurityProfilesResponse = struct(n0, _LSPRi, 0, [_SPSL, _NT], [() => SecurityProfileSummaryList, 0]);
export var SecurityProfileSummary = struct(n0, _SPS, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var SecurityProfileSummaryList = list(n0, _SPSL, 0, () => SecurityProfileSummary);
export var ListSecurityProfiles = op(
  n0,
  _LSP,
  {
    [_h]: ["GET", "/security-profiles-summary/{InstanceId}", 200],
  },
  () => ListSecurityProfilesRequest,
  () => ListSecurityProfilesResponse
);
