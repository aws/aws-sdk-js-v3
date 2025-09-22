// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  FieldLevelEncryptionConfigInUse as __FieldLevelEncryptionConfigInUse,
  NoSuchFieldLevelEncryptionConfig as __NoSuchFieldLevelEncryptionConfig,
} from "../models/index";
import {
  _c,
  _DFLEC,
  _DFLECR,
  _e,
  _ET,
  _FLE,
  _FLEC,
  _FLECIU,
  _GFLE,
  _GFLEC,
  _GFLECR,
  _GFLECRe,
  _GFLER,
  _GFLERe,
  _h,
  _hE,
  _hH,
  _hP,
  _Id,
  _IM,
  _IM_,
  _M,
  _NSFLEC,
  _UFLEC,
  _UFLECR,
  _UFLECRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { FieldLevelEncryption, FieldLevelEncryptionConfig } from "./schemas_17_LevelEncryption";

/* eslint no-var: 0 */

export var DeleteFieldLevelEncryptionConfigRequest = struct(
  n0,
  _DFLECR,
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
export var FieldLevelEncryptionConfigInUse = error(
  n0,
  _FLECIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FieldLevelEncryptionConfigInUse
);
export var GetFieldLevelEncryptionConfigRequest = struct(n0, _GFLECR, 0, [_Id], [[0, 1]]);
export var GetFieldLevelEncryptionConfigResult = struct(
  n0,
  _GFLECRe,
  0,
  [_FLEC, _ET],
  [
    [() => FieldLevelEncryptionConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetFieldLevelEncryptionRequest = struct(n0, _GFLER, 0, [_Id], [[0, 1]]);
export var GetFieldLevelEncryptionResult = struct(
  n0,
  _GFLERe,
  0,
  [_FLE, _ET],
  [
    [() => FieldLevelEncryption, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var NoSuchFieldLevelEncryptionConfig = error(
  n0,
  _NSFLEC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchFieldLevelEncryptionConfig
);
export var UpdateFieldLevelEncryptionConfigRequest = struct(
  n0,
  _UFLECR,
  0,
  [_FLEC, _Id, _IM],
  [
    [
      () => FieldLevelEncryptionConfig,
      {
        [_xN]: _FLEC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateFieldLevelEncryptionConfigResult = struct(
  n0,
  _UFLECRp,
  0,
  [_FLE, _ET],
  [
    [() => FieldLevelEncryption, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DeleteFieldLevelEncryptionConfig = op(
  n0,
  _DFLEC,
  {
    [_h]: ["DELETE", "/2020-05-31/field-level-encryption/{Id}", 204],
  },
  () => DeleteFieldLevelEncryptionConfigRequest,
  () => Unit
);
export var GetFieldLevelEncryption = op(
  n0,
  _GFLE,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption/{Id}", 200],
  },
  () => GetFieldLevelEncryptionRequest,
  () => GetFieldLevelEncryptionResult
);
export var GetFieldLevelEncryptionConfig = op(
  n0,
  _GFLEC,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption/{Id}/config", 200],
  },
  () => GetFieldLevelEncryptionConfigRequest,
  () => GetFieldLevelEncryptionConfigResult
);
export var UpdateFieldLevelEncryptionConfig = op(
  n0,
  _UFLEC,
  {
    [_h]: ["PUT", "/2020-05-31/field-level-encryption/{Id}/config", 200],
  },
  () => UpdateFieldLevelEncryptionConfigRequest,
  () => UpdateFieldLevelEncryptionConfigResult
);
