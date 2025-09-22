// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Co,
  _CR,
  _EE,
  _EEL,
  _EEn,
  _FLEP,
  _FLEPC,
  _FLEPL,
  _FLEPS,
  _FLEPSL,
  _FP,
  _FPi,
  _FPL,
  _h,
  _hQ,
  _I,
  _Id,
  _LFLEP,
  _LFLEPR,
  _LFLEPRi,
  _LMT,
  _Ma,
  _MI,
  _N,
  _NM,
  _PIr,
  _PKI,
  _Q,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EncryptionEntities = struct(n0, _EE, 0, [_Q, _I], [1, [() => EncryptionEntityList, 0]]);
export var EncryptionEntity = struct(n0, _EEn, 0, [_PKI, _PIr, _FP], [0, 0, [() => FieldPatterns, 0]]);
export var FieldLevelEncryptionProfile = struct(
  n0,
  _FLEP,
  0,
  [_Id, _LMT, _FLEPC],
  [0, 4, [() => FieldLevelEncryptionProfileConfig, 0]]
);
export var FieldLevelEncryptionProfileConfig = struct(
  n0,
  _FLEPC,
  0,
  [_N, _CR, _Co, _EE],
  [0, 0, 0, [() => EncryptionEntities, 0]]
);
export var FieldLevelEncryptionProfileList = struct(
  n0,
  _FLEPL,
  0,
  [_NM, _MI, _Q, _I],
  [0, 1, 1, [() => FieldLevelEncryptionProfileSummaryList, 0]]
);
export var FieldLevelEncryptionProfileSummary = struct(
  n0,
  _FLEPS,
  0,
  [_Id, _LMT, _N, _EE, _Co],
  [0, 4, 0, [() => EncryptionEntities, 0], 0]
);
export var FieldPatterns = struct(n0, _FP, 0, [_Q, _I], [1, [() => FieldPatternList, 0]]);
export var ListFieldLevelEncryptionProfilesRequest = struct(
  n0,
  _LFLEPR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListFieldLevelEncryptionProfilesResult = struct(
  n0,
  _LFLEPRi,
  0,
  [_FLEPL],
  [[() => FieldLevelEncryptionProfileList, 16]]
);
export var EncryptionEntityList = list(n0, _EEL, 0, [
  () => EncryptionEntity,
  {
    [_xN]: _EEn,
  },
]);
export var FieldLevelEncryptionProfileSummaryList = list(n0, _FLEPSL, 0, [
  () => FieldLevelEncryptionProfileSummary,
  {
    [_xN]: _FLEPS,
  },
]);
export var FieldPatternList = list(n0, _FPL, 0, [
  0,
  {
    [_xN]: _FPi,
  },
]);
export var ListFieldLevelEncryptionProfiles = op(
  n0,
  _LFLEP,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption-profile", 200],
  },
  () => ListFieldLevelEncryptionProfilesRequest,
  () => ListFieldLevelEncryptionProfilesResult
);
