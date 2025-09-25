// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AIl,
  _API,
  _APS,
  _APSL,
  _APu,
  _BI,
  _CTre,
  _D,
  _DAP,
  _DAPR,
  _DAPRe,
  _h,
  _hQ,
  _I,
  _ID,
  _II,
  _LAP,
  _LAPR,
  _LAPRi,
  _LMR,
  _LMT,
  _mR,
  _MRa,
  _MSD,
  _N,
  _NT,
  _nT,
  _PSD,
  _UAP,
  _UAPR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthenticationProfile = struct(
  n0,
  _APu,
  0,
  [_I, _A, _N, _D, _AIl, _BI, _ID, _CTre, _LMT, _LMR, _PSD, _MSD],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 2, 4, 4, 0, 1, 1]
);
export var AuthenticationProfileSummary = struct(n0, _APS, 0, [_I, _A, _N, _ID, _LMT, _LMR], [0, 0, 0, 2, 4, 0]);
export var DescribeAuthenticationProfileRequest = struct(
  n0,
  _DAPR,
  0,
  [_API, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAuthenticationProfileResponse = struct(n0, _DAPRe, 0, [_APu], [() => AuthenticationProfile]);
export var ListAuthenticationProfilesRequest = struct(
  n0,
  _LAPR,
  0,
  [_II, _MRa, _NT],
  [
    [0, 1],
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
  ]
);
export var ListAuthenticationProfilesResponse = struct(
  n0,
  _LAPRi,
  0,
  [_APSL, _NT],
  [() => AuthenticationProfileSummaryList, 0]
);
export var UpdateAuthenticationProfileRequest = struct(
  n0,
  _UAPR,
  0,
  [_API, _II, _N, _D, _AIl, _BI, _PSD],
  [[0, 1], [0, 1], 0, 0, 64 | 0, 64 | 0, 1]
);
export var AuthenticationProfileSummaryList = list(n0, _APSL, 0, () => AuthenticationProfileSummary);
export var IpCidrList = 64 | 0;

export var DescribeAuthenticationProfile = op(
  n0,
  _DAP,
  {
    [_h]: ["GET", "/authentication-profiles/{InstanceId}/{AuthenticationProfileId}", 200],
  },
  () => DescribeAuthenticationProfileRequest,
  () => DescribeAuthenticationProfileResponse
);
export var ListAuthenticationProfiles = op(
  n0,
  _LAP,
  {
    [_h]: ["GET", "/authentication-profiles-summary/{InstanceId}", 200],
  },
  () => ListAuthenticationProfilesRequest,
  () => ListAuthenticationProfilesResponse
);
export var UpdateAuthenticationProfile = op(
  n0,
  _UAP,
  {
    [_h]: ["POST", "/authentication-profiles/{InstanceId}/{AuthenticationProfileId}", 200],
  },
  () => UpdateAuthenticationProfileRequest,
  () => Unit
);
