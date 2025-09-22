// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _DI,
  _DIE,
  _LMT,
  _LUP,
  _LUPR,
  _LUPRi,
  _MR,
  _NT,
  _SBo,
  _SO,
  _St,
  _UPD,
  _UPL,
  _UPN,
  _UPNC,
  _UPs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListUserProfilesRequest = struct(n0, _LUPR, 0, [_NT, _MR, _SO, _SBo, _DIE, _UPNC], [0, 1, 0, 0, 0, 0]);
export var ListUserProfilesResponse = struct(n0, _LUPRi, 0, [_UPs, _NT], [() => UserProfileList, 0]);
export var UserProfileDetails = struct(n0, _UPD, 0, [_DI, _UPN, _St, _CT, _LMT], [0, 0, 0, 4, 4]);
export var UserProfileList = list(n0, _UPL, 0, () => UserProfileDetails);
export var ListUserProfiles = op(
  n0,
  _LUP,
  0,
  () => ListUserProfilesRequest,
  () => ListUserProfilesResponse
);
