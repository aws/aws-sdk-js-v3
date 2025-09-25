// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CS,
  _DN,
  _GM,
  _GMR,
  _GMRe,
  _GSP,
  _GSPR,
  _GSPRe,
  _h,
  _hQ,
  _Matc,
  _MGD,
  _MI,
  _MIat,
  _ML,
  _MR,
  _mr,
  _MT,
  _NT,
  _nt,
  _PIr,
  _PM,
  _RL,
  _SK,
  _SV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMatchesRequest = struct(
  n0,
  _GMR,
  0,
  [_NT, _MR, _DN],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
  ]
);
export var GetMatchesResponse = struct(n0, _GMRe, 0, [_NT, _MGD, _PM, _Matc], [0, 4, 1, () => MatchesList]);
export var GetSimilarProfilesRequest = struct(
  n0,
  _GSPR,
  0,
  [_NT, _MR, _DN, _MT, _SK, _SV],
  [
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    0,
    0,
    0,
  ]
);
export var GetSimilarProfilesResponse = struct(n0, _GSPRe, 0, [_PIr, _MI, _MT, _RL, _CS, _NT], [64 | 0, 0, 0, 1, 1, 0]);
export var MatchItem = struct(n0, _MIat, 0, [_MI, _PIr, _CS], [0, 64 | 0, 1]);
export var MatchesList = list(n0, _ML, 0, () => MatchItem);
export var ProfileIdList = 64 | 0;

export var GetMatches = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/domains/{DomainName}/matches", 200],
  },
  () => GetMatchesRequest,
  () => GetMatchesResponse
);
export var GetSimilarProfiles = op(
  n0,
  _GSP,
  {
    [_h]: ["POST", "/domains/{DomainName}/matches", 200],
  },
  () => GetSimilarProfilesRequest,
  () => GetSimilarProfilesResponse
);
