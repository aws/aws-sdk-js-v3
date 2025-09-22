// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _CNP,
  _CNPR,
  _CNPRr,
  _d,
  _dBB,
  _dDM,
  _dJM,
  _dLP,
  _GNP,
  _GNPR,
  _GNPRe,
  _LNP,
  _LNPR,
  _LNPRi,
  _n,
  _NP,
  _nP,
  _NPe,
  _nPet,
  _nT,
  _pA,
  _t,
  _uBB,
  _uDM,
  _uJM,
  _uLP,
  _UNP,
  _UNPR,
  _UNPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNetworkProfileRequest = struct(
  n0,
  _CNPR,
  0,
  [_pA, _n, _d, _t, _uBB, _dBB, _uDM, _dDM, _uJM, _dJM, _uLP, _dLP],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var CreateNetworkProfileResult = struct(n0, _CNPRr, 0, [_nP], [() => NetworkProfile]);
export var GetNetworkProfileRequest = struct(n0, _GNPR, 0, [_a], [0]);
export var GetNetworkProfileResult = struct(n0, _GNPRe, 0, [_nP], [() => NetworkProfile]);
export var ListNetworkProfilesRequest = struct(n0, _LNPR, 0, [_a, _t, _nT], [0, 0, 0]);
export var ListNetworkProfilesResult = struct(n0, _LNPRi, 0, [_nPet, _nT], [() => NetworkProfiles, 0]);
export var NetworkProfile = struct(
  n0,
  _NP,
  0,
  [_a, _n, _d, _t, _uBB, _dBB, _uDM, _dDM, _uJM, _dJM, _uLP, _dLP],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var UpdateNetworkProfileRequest = struct(
  n0,
  _UNPR,
  0,
  [_a, _n, _d, _t, _uBB, _dBB, _uDM, _dDM, _uJM, _dJM, _uLP, _dLP],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var UpdateNetworkProfileResult = struct(n0, _UNPRp, 0, [_nP], [() => NetworkProfile]);
export var NetworkProfiles = list(n0, _NPe, 0, () => NetworkProfile);
export var CreateNetworkProfile = op(
  n0,
  _CNP,
  0,
  () => CreateNetworkProfileRequest,
  () => CreateNetworkProfileResult
);
export var GetNetworkProfile = op(
  n0,
  _GNP,
  0,
  () => GetNetworkProfileRequest,
  () => GetNetworkProfileResult
);
export var ListNetworkProfiles = op(
  n0,
  _LNP,
  0,
  () => ListNetworkProfilesRequest,
  () => ListNetworkProfilesResult
);
export var UpdateNetworkProfile = op(
  n0,
  _UNP,
  0,
  () => UpdateNetworkProfileRequest,
  () => UpdateNetworkProfileResult
);
