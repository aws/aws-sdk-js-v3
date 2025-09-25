// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Co,
  _CR,
  _CTo,
  _CTP,
  _CTPC,
  _CTPL,
  _CTPo,
  _F,
  _FLE,
  _FLEC,
  _FLEL,
  _FLES,
  _FLESL,
  _FWCTIU,
  _FWQAPIU,
  _h,
  _hQ,
  _I,
  _Id,
  _LFLEC,
  _LFLECR,
  _LFLECRi,
  _LMT,
  _Ma,
  _MI,
  _NM,
  _PI,
  _Q,
  _QA,
  _QAP,
  _QAPC,
  _QAPL,
  _QAPu,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ContentTypeProfile = struct(n0, _CTP, 0, [_F, _PI, _CTo], [0, 0, 0]);
export var ContentTypeProfileConfig = struct(n0, _CTPC, 0, [_FWCTIU, _CTPo], [2, [() => ContentTypeProfiles, 0]]);
export var ContentTypeProfiles = struct(n0, _CTPo, 0, [_Q, _I], [1, [() => ContentTypeProfileList, 0]]);
export var FieldLevelEncryption = struct(
  n0,
  _FLE,
  0,
  [_Id, _LMT, _FLEC],
  [0, 4, [() => FieldLevelEncryptionConfig, 0]]
);
export var FieldLevelEncryptionConfig = struct(
  n0,
  _FLEC,
  0,
  [_CR, _Co, _QAPC, _CTPC],
  [0, 0, [() => QueryArgProfileConfig, 0], [() => ContentTypeProfileConfig, 0]]
);
export var FieldLevelEncryptionList = struct(
  n0,
  _FLEL,
  0,
  [_NM, _MI, _Q, _I],
  [0, 1, 1, [() => FieldLevelEncryptionSummaryList, 0]]
);
export var FieldLevelEncryptionSummary = struct(
  n0,
  _FLES,
  0,
  [_Id, _LMT, _Co, _QAPC, _CTPC],
  [0, 4, 0, [() => QueryArgProfileConfig, 0], [() => ContentTypeProfileConfig, 0]]
);
export var ListFieldLevelEncryptionConfigsRequest = struct(
  n0,
  _LFLECR,
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
export var ListFieldLevelEncryptionConfigsResult = struct(
  n0,
  _LFLECRi,
  0,
  [_FLEL],
  [[() => FieldLevelEncryptionList, 16]]
);
export var QueryArgProfile = struct(n0, _QAP, 0, [_QA, _PI], [0, 0]);
export var QueryArgProfileConfig = struct(n0, _QAPC, 0, [_FWQAPIU, _QAPu], [2, [() => QueryArgProfiles, 0]]);
export var QueryArgProfiles = struct(n0, _QAPu, 0, [_Q, _I], [1, [() => QueryArgProfileList, 0]]);
export var ContentTypeProfileList = list(n0, _CTPL, 0, [
  () => ContentTypeProfile,
  {
    [_xN]: _CTP,
  },
]);
export var FieldLevelEncryptionSummaryList = list(n0, _FLESL, 0, [
  () => FieldLevelEncryptionSummary,
  {
    [_xN]: _FLES,
  },
]);
export var QueryArgProfileList = list(n0, _QAPL, 0, [
  () => QueryArgProfile,
  {
    [_xN]: _QAP,
  },
]);
export var ListFieldLevelEncryptionConfigs = op(
  n0,
  _LFLEC,
  {
    [_h]: ["GET", "/2020-05-31/field-level-encryption", 200],
  },
  () => ListFieldLevelEncryptionConfigsRequest,
  () => ListFieldLevelEncryptionConfigsResult
);
