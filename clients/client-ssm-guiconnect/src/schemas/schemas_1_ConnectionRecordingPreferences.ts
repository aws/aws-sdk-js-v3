// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _BN,
  _BO,
  _c,
  _CE,
  _CRP,
  _CT,
  _DCRP,
  _DCRPR,
  _DCRPRe,
  _e,
  _GCRP,
  _GCRPR,
  _h,
  _hE,
  _ISE,
  _KMSKA,
  _m,
  _RD,
  _RNFE,
  _s,
  _SB,
  _SBu,
  _SQEE,
  _TE,
  _UCRP,
  _UCRPR,
  _UCRPRp,
  _VE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var ConnectionRecordingPreferences = struct(n0, _CRP, 0, [_RD, _KMSKA], [() => RecordingDestinations, 0]);
export var DeleteConnectionRecordingPreferencesRequest = struct(n0, _DCRPR, 0, [_CT], [[0, 4]]);
export var DeleteConnectionRecordingPreferencesResponse = struct(n0, _DCRPRe, 0, [_CT], [0]);
export var GetConnectionRecordingPreferencesResponse = struct(
  n0,
  _GCRPR,
  0,
  [_CT, _CRP],
  [0, () => ConnectionRecordingPreferences]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var RecordingDestinations = struct(n0, _RD, 0, [_SB], [() => S3Buckets]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var S3Bucket = struct(n0, _SBu, 0, [_BO, _BN], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
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
export var UpdateConnectionRecordingPreferencesRequest = struct(
  n0,
  _UCRPR,
  0,
  [_CRP, _CT],
  [() => ConnectionRecordingPreferences, [0, 4]]
);
export var UpdateConnectionRecordingPreferencesResponse = struct(
  n0,
  _UCRPRp,
  0,
  [_CT, _CRP],
  [0, () => ConnectionRecordingPreferences]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var S3Buckets = list(n0, _SB, 0, () => S3Bucket);
export var DeleteConnectionRecordingPreferences = op(
  n0,
  _DCRP,
  {
    [_h]: ["POST", "/DeleteConnectionRecordingPreferences", 200],
  },
  () => DeleteConnectionRecordingPreferencesRequest,
  () => DeleteConnectionRecordingPreferencesResponse
);
export var GetConnectionRecordingPreferences = op(
  n0,
  _GCRP,
  {
    [_h]: ["POST", "/GetConnectionRecordingPreferences", 200],
  },
  () => Unit,
  () => GetConnectionRecordingPreferencesResponse
);
export var UpdateConnectionRecordingPreferences = op(
  n0,
  _UCRP,
  {
    [_h]: ["POST", "/UpdateConnectionRecordingPreferences", 200],
  },
  () => UpdateConnectionRecordingPreferencesRequest,
  () => UpdateConnectionRecordingPreferencesResponse
);
