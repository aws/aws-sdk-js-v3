// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  FieldLevelEncryptionConfigAlreadyExists as __FieldLevelEncryptionConfigAlreadyExists,
  FieldLevelEncryptionProfileInUse as __FieldLevelEncryptionProfileInUse,
  NoSuchFieldLevelEncryptionProfile as __NoSuchFieldLevelEncryptionProfile,
  QueryArgProfileEmpty as __QueryArgProfileEmpty,
  TooManyFieldLevelEncryptionConfigs as __TooManyFieldLevelEncryptionConfigs,
  TooManyFieldLevelEncryptionContentTypeProfiles as __TooManyFieldLevelEncryptionContentTypeProfiles,
  TooManyFieldLevelEncryptionQueryArgProfiles as __TooManyFieldLevelEncryptionQueryArgProfiles,
} from "../models/index";
import {
  _c,
  _CFLEC,
  _CFLECR,
  _CFLECRr,
  _DFLEP,
  _DFLEPR,
  _e,
  _ET,
  _FLE,
  _FLEC,
  _FLECAE,
  _FLEP,
  _FLEPC,
  _FLEPIU,
  _GFLEP,
  _GFLEPC,
  _GFLEPCR,
  _GFLEPCRe,
  _GFLEPR,
  _GFLEPRe,
  _h,
  _hE,
  _hH,
  _hP,
  _Id,
  _IM,
  _IM_,
  _L,
  _M,
  _NSFLEP,
  _QAPE,
  _TMFLEC,
  _TMFLECTP,
  _TMFLEQAP,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { FieldLevelEncryptionProfile, FieldLevelEncryptionProfileConfig } from "./schemas_3_LevelEncryption";
import { FieldLevelEncryption, FieldLevelEncryptionConfig } from "./schemas_17_LevelEncryption";

/* eslint no-var: 0 */

export var CreateFieldLevelEncryptionConfigRequest = struct(
  n0,
  _CFLECR,
  0,
  [_FLEC],
  [
    [
      () => FieldLevelEncryptionConfig,
      {
        [_xN]: _FLEC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateFieldLevelEncryptionConfigResult = struct(
  n0,
  _CFLECRr,
  0,
  [_FLE, _L, _ET],
  [
    [() => FieldLevelEncryption, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DeleteFieldLevelEncryptionProfileRequest = struct(
  n0,
  _DFLEPR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var FieldLevelEncryptionConfigAlreadyExists = error(
  n0,
  _FLECAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FieldLevelEncryptionConfigAlreadyExists
);
export var FieldLevelEncryptionProfileInUse = error(
  n0,
  _FLEPIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FieldLevelEncryptionProfileInUse
);
export var GetFieldLevelEncryptionProfileConfigRequest = struct(n0, _GFLEPCR, 0, [_Id], [[0, 1]]);
export var GetFieldLevelEncryptionProfileConfigResult = struct(
  n0,
  _GFLEPCRe,
  0,
  [_FLEPC, _ET],
  [
    [() => FieldLevelEncryptionProfileConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetFieldLevelEncryptionProfileRequest = struct(n0, _GFLEPR, 0, [_Id], [[0, 1]]);
export var GetFieldLevelEncryptionProfileResult = struct(
  n0,
  _GFLEPRe,
  0,
  [_FLEP, _ET],
  [
    [() => FieldLevelEncryptionProfile, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var NoSuchFieldLevelEncryptionProfile = error(
  n0,
  _NSFLEP,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchFieldLevelEncryptionProfile
);
export var QueryArgProfileEmpty = error(
  n0,
  _QAPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __QueryArgProfileEmpty
);
export var TooManyFieldLevelEncryptionConfigs = error(
  n0,
  _TMFLEC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionConfigs
);
export var TooManyFieldLevelEncryptionContentTypeProfiles = error(
  n0,
  _TMFLECTP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionContentTypeProfiles
);
export var TooManyFieldLevelEncryptionQueryArgProfiles = error(
  n0,
  _TMFLEQAP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionQueryArgProfiles
);
export var CreateFieldLevelEncryptionConfig = op(
  n0,
  _CFLEC,
  {
    [_h]: ["POST", "/2020-05-31/field-level-encryption", 201],
  },
  () => CreateFieldLevelEncryptionConfigRequest,
  () => CreateFieldLevelEncryptionConfigResult
);
export var DeleteFieldLevelEncryptionProfile = op(
  n0,
  _DFLEP,
  {
    [_h]: ["DELETE", "/2020-05-31/field-level-encryption-profile/{Id}", 204],
  },
  () => DeleteFieldLevelEncryptionProfileRequest,
  () => Unit
);
export var GetFieldLevelEncryptionProfile = op(
  n0,
  _GFLEP,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption-profile/{Id}", 200],
  },
  () => GetFieldLevelEncryptionProfileRequest,
  () => GetFieldLevelEncryptionProfileResult
);
export var GetFieldLevelEncryptionProfileConfig = op(
  n0,
  _GFLEPC,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption-profile/{Id}/config", 200],
  },
  () => GetFieldLevelEncryptionProfileConfigRequest,
  () => GetFieldLevelEncryptionProfileConfigResult
);
