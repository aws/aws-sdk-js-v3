// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import {
  _aAId,
  _c,
  _dAA,
  _e,
  _eFN,
  _fNi,
  _GEFUU,
  _GEFUUR,
  _GEFUURe,
  _h,
  _hE,
  _hQ,
  _kK,
  _m,
  _MELFN,
  _oI,
  _RA,
  _RAR,
  _RARe,
  _ROAA,
  _ROAAR,
  _ROAARe,
  _s,
  _TE,
  _uU,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ManualEvidenceLocalFileName = sim(n0, _MELFN, 0, 8);
export var GetEvidenceFileUploadUrlRequest = struct(
  n0,
  _GEFUUR,
  0,
  [_fNi],
  [
    [
      () => ManualEvidenceLocalFileName,
      {
        [_hQ]: _fNi,
      },
    ],
  ]
);
export var GetEvidenceFileUploadUrlResponse = struct(n0, _GEFUURe, 8, [_eFN, _uU], [0, 0]);
export var RegisterAccountRequest = struct(n0, _RAR, 0, [_kK, _dAA], [0, 0]);
export var RegisterAccountResponse = struct(n0, _RARe, 0, [_s], [0]);
export var RegisterOrganizationAdminAccountRequest = struct(n0, _ROAAR, 0, [_aAId], [0]);
export var RegisterOrganizationAdminAccountResponse = struct(n0, _ROAARe, 0, [_aAId, _oI], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var GetEvidenceFileUploadUrl = op(
  n0,
  _GEFUU,
  {
    [_h]: ["GET", "/evidenceFileUploadUrl", 200],
  },
  () => GetEvidenceFileUploadUrlRequest,
  () => GetEvidenceFileUploadUrlResponse
);
export var RegisterAccount = op(
  n0,
  _RA,
  {
    [_h]: ["POST", "/account/registerAccount", 200],
  },
  () => RegisterAccountRequest,
  () => RegisterAccountResponse
);
export var RegisterOrganizationAdminAccount = op(
  n0,
  _ROAA,
  {
    [_h]: ["POST", "/account/registerOrganizationAdminAccount", 200],
  },
  () => RegisterOrganizationAdminAccountRequest,
  () => RegisterOrganizationAdminAccountResponse
);
