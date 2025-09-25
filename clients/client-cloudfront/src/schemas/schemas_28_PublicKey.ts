// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CannotChangeImmutablePublicKeyFields as __CannotChangeImmutablePublicKeyFields,
  FieldLevelEncryptionProfileAlreadyExists as __FieldLevelEncryptionProfileAlreadyExists,
  FieldLevelEncryptionProfileSizeExceeded as __FieldLevelEncryptionProfileSizeExceeded,
  NoSuchPublicKey as __NoSuchPublicKey,
  PublicKeyInUse as __PublicKeyInUse,
  TooManyFieldLevelEncryptionEncryptionEntities as __TooManyFieldLevelEncryptionEncryptionEntities,
  TooManyFieldLevelEncryptionFieldPatterns as __TooManyFieldLevelEncryptionFieldPatterns,
  TooManyFieldLevelEncryptionProfiles as __TooManyFieldLevelEncryptionProfiles,
} from "../models/index";
import {
  _c,
  _CCIPKF,
  _CFLEP,
  _CFLEPR,
  _CFLEPRr,
  _DPK,
  _DPKR,
  _e,
  _ET,
  _FLEP,
  _FLEPAE,
  _FLEPC,
  _FLEPSE,
  _GPK,
  _GPKC,
  _GPKCR,
  _GPKCRe,
  _GPKR,
  _GPKRe,
  _h,
  _hE,
  _hH,
  _hP,
  _Id,
  _IM,
  _IM_,
  _L,
  _M,
  _NSPK,
  _PK,
  _PKC,
  _PKIU,
  _TMFLEEE,
  _TMFLEFP,
  _TMFLEP,
  _UFLEP,
  _UFLEPR,
  _UFLEPRp,
  _UPK,
  _UPKR,
  _UPKRp,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { FieldLevelEncryptionProfile, FieldLevelEncryptionProfileConfig } from "./schemas_3_LevelEncryption";
import { PublicKey, PublicKeyConfig } from "./schemas_33_PublicKey";

/* eslint no-var: 0 */

export var CannotChangeImmutablePublicKeyFields = error(
  n0,
  _CCIPKF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __CannotChangeImmutablePublicKeyFields
);
export var CreateFieldLevelEncryptionProfileRequest = struct(
  n0,
  _CFLEPR,
  0,
  [_FLEPC],
  [
    [
      () => FieldLevelEncryptionProfileConfig,
      {
        [_xN]: _FLEPC,
        [_hP]: 1,
      },
    ],
  ]
);
export var CreateFieldLevelEncryptionProfileResult = struct(
  n0,
  _CFLEPRr,
  0,
  [_FLEP, _L, _ET],
  [
    [() => FieldLevelEncryptionProfile, 16],
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
export var DeletePublicKeyRequest = struct(
  n0,
  _DPKR,
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
export var FieldLevelEncryptionProfileAlreadyExists = error(
  n0,
  _FLEPAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __FieldLevelEncryptionProfileAlreadyExists
);
export var FieldLevelEncryptionProfileSizeExceeded = error(
  n0,
  _FLEPSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __FieldLevelEncryptionProfileSizeExceeded
);
export var GetPublicKeyConfigRequest = struct(n0, _GPKCR, 0, [_Id], [[0, 1]]);
export var GetPublicKeyConfigResult = struct(
  n0,
  _GPKCRe,
  0,
  [_PKC, _ET],
  [
    [() => PublicKeyConfig, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var GetPublicKeyRequest = struct(n0, _GPKR, 0, [_Id], [[0, 1]]);
export var GetPublicKeyResult = struct(
  n0,
  _GPKRe,
  0,
  [_PK, _ET],
  [
    [() => PublicKey, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var NoSuchPublicKey = error(
  n0,
  _NSPK,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchPublicKey
);
export var PublicKeyInUse = error(
  n0,
  _PKIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PublicKeyInUse
);
export var TooManyFieldLevelEncryptionEncryptionEntities = error(
  n0,
  _TMFLEEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionEncryptionEntities
);
export var TooManyFieldLevelEncryptionFieldPatterns = error(
  n0,
  _TMFLEFP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionFieldPatterns
);
export var TooManyFieldLevelEncryptionProfiles = error(
  n0,
  _TMFLEP,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TooManyFieldLevelEncryptionProfiles
);
export var UpdateFieldLevelEncryptionProfileRequest = struct(
  n0,
  _UFLEPR,
  0,
  [_FLEPC, _Id, _IM],
  [
    [
      () => FieldLevelEncryptionProfileConfig,
      {
        [_xN]: _FLEPC,
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
export var UpdateFieldLevelEncryptionProfileResult = struct(
  n0,
  _UFLEPRp,
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
export var UpdatePublicKeyRequest = struct(
  n0,
  _UPKR,
  0,
  [_PKC, _Id, _IM],
  [
    [
      () => PublicKeyConfig,
      {
        [_xN]: _PKC,
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
export var UpdatePublicKeyResult = struct(
  n0,
  _UPKRp,
  0,
  [_PK, _ET],
  [
    [() => PublicKey, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateFieldLevelEncryptionProfile = op(
  n0,
  _CFLEP,
  {
    [_h]: ["POST", "/2020-05-31/field-level-encryption-profile", 201],
  },
  () => CreateFieldLevelEncryptionProfileRequest,
  () => CreateFieldLevelEncryptionProfileResult
);
export var DeletePublicKey = op(
  n0,
  _DPK,
  {
    [_h]: ["DELETE", "/2020-05-31/public-key/{Id}", 204],
  },
  () => DeletePublicKeyRequest,
  () => Unit
);
export var GetPublicKey = op(
  n0,
  _GPK,
  {
    [_h]: ["GET", "/2020-05-31/public-key/{Id}", 200],
  },
  () => GetPublicKeyRequest,
  () => GetPublicKeyResult
);
export var GetPublicKeyConfig = op(
  n0,
  _GPKC,
  {
    [_h]: ["GET", "/2020-05-31/public-key/{Id}/config", 200],
  },
  () => GetPublicKeyConfigRequest,
  () => GetPublicKeyConfigResult
);
export var UpdateFieldLevelEncryptionProfile = op(
  n0,
  _UFLEP,
  {
    [_h]: ["PUT", "/2020-05-31/field-level-encryption-profile/{Id}/config", 200],
  },
  () => UpdateFieldLevelEncryptionProfileRequest,
  () => UpdateFieldLevelEncryptionProfileResult
);
export var UpdatePublicKey = op(
  n0,
  _UPK,
  {
    [_h]: ["PUT", "/2020-05-31/public-key/{Id}/config", 200],
  },
  () => UpdatePublicKeyRequest,
  () => UpdatePublicKeyResult
);
