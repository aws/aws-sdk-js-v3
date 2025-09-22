// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _ar,
  _det,
  _dI,
  _dIo,
  _FNi,
  _fNi,
  _ht,
  _ia,
  _id,
  _it,
  _IUPD,
  _LN,
  _lN,
  _mRa,
  _nT,
  _pIri,
  _s,
  _ss,
  _sTe,
  _SUP,
  _SUPD,
  _SUPI,
  _SUPO,
  _ty,
  _UPD,
  _UPN,
  _UPS,
  _UPSs,
  _us,
  _UST,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FirstName = sim(n0, _FNi, 0, 8);
export var LastName = sim(n0, _LN, 0, 8);
export var UserProfileName = sim(n0, _UPN, 0, 8);
export var UserSearchText = sim(n0, _UST, 0, 8);
export var IamUserProfileDetails = struct(n0, _IUPD, 0, [_ar, _pIri], [0, 0]);
export var SearchUserProfilesInput = struct(
  n0,
  _SUPI,
  0,
  [_dI, _uT, _sTe, _mRa, _nT],
  [[0, 1], 0, [() => UserSearchText, 0], 1, 0]
);
export var SearchUserProfilesOutput = struct(n0, _SUPO, 0, [_it, _nT], [[() => UserProfileSummaries, 0], 0]);
export var SsoUserProfileDetails = struct(
  n0,
  _SUPD,
  0,
  [_us, _fNi, _lN],
  [
    [() => UserProfileName, 0],
    [() => FirstName, 0],
    [() => LastName, 0],
  ]
);
export var UserProfileSummary = struct(
  n0,
  _UPS,
  0,
  [_dIo, _id, _ty, _s, _det],
  [0, 0, 0, 0, [() => UserProfileDetails, 0]]
);
export var UserProfileSummaries = list(n0, _UPSs, 0, [() => UserProfileSummary, 0]);
export var UserProfileDetails = uni(
  n0,
  _UPD,
  0,
  [_ia, _ss],
  [() => IamUserProfileDetails, [() => SsoUserProfileDetails, 0]]
);
export var SearchUserProfiles = op(
  n0,
  _SUP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/search-user-profiles", 200],
  },
  () => SearchUserProfilesInput,
  () => SearchUserProfilesOutput
);
