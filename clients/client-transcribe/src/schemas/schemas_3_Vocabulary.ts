// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CMV,
  _CMVR,
  _CMVRr,
  _CV,
  _CVR,
  _CVRr,
  _DARA,
  _DU,
  _FR,
  _GMV,
  _GMVR,
  _GMVRe,
  _GV,
  _GVR,
  _GVRe,
  _h,
  _LC,
  _LMT,
  _Ph,
  _Ta,
  _UMV,
  _UMVR,
  _UMVRp,
  _UV,
  _UVR,
  _UVRp,
  _VFU,
  _VN,
  _VS,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMedicalVocabularyRequest = struct(n0, _CMVR, 0, [_VN, _LC, _VFU, _Ta], [[0, 1], 0, 0, () => TagList]);
export var CreateMedicalVocabularyResponse = struct(n0, _CMVRr, 0, [_VN, _LC, _VS, _LMT, _FR], [0, 0, 0, 4, 0]);
export var CreateVocabularyRequest = struct(
  n0,
  _CVR,
  0,
  [_VN, _LC, _Ph, _VFU, _Ta, _DARA],
  [[0, 1], 0, 64 | 0, 0, () => TagList, 0]
);
export var CreateVocabularyResponse = struct(n0, _CVRr, 0, [_VN, _LC, _VS, _LMT, _FR], [0, 0, 0, 4, 0]);
export var GetMedicalVocabularyRequest = struct(n0, _GMVR, 0, [_VN], [[0, 1]]);
export var GetMedicalVocabularyResponse = struct(n0, _GMVRe, 0, [_VN, _LC, _VS, _LMT, _FR, _DU], [0, 0, 0, 4, 0, 0]);
export var GetVocabularyRequest = struct(n0, _GVR, 0, [_VN], [[0, 1]]);
export var GetVocabularyResponse = struct(n0, _GVRe, 0, [_VN, _LC, _VS, _LMT, _FR, _DU], [0, 0, 0, 4, 0, 0]);
export var UpdateMedicalVocabularyRequest = struct(n0, _UMVR, 0, [_VN, _LC, _VFU], [[0, 1], 0, 0]);
export var UpdateMedicalVocabularyResponse = struct(n0, _UMVRp, 0, [_VN, _LC, _LMT, _VS], [0, 0, 4, 0]);
export var UpdateVocabularyRequest = struct(n0, _UVR, 0, [_VN, _LC, _Ph, _VFU, _DARA], [[0, 1], 0, 64 | 0, 0, 0]);
export var UpdateVocabularyResponse = struct(n0, _UVRp, 0, [_VN, _LC, _LMT, _VS], [0, 0, 4, 0]);
export var Phrases = 64 | 0;

export var CreateMedicalVocabulary = op(
  n0,
  _CMV,
  {
    [_h]: ["PUT", "/medicalvocabularies/{VocabularyName}", 200],
  },
  () => CreateMedicalVocabularyRequest,
  () => CreateMedicalVocabularyResponse
);
export var CreateVocabulary = op(
  n0,
  _CV,
  {
    [_h]: ["PUT", "/vocabularies/{VocabularyName}", 200],
  },
  () => CreateVocabularyRequest,
  () => CreateVocabularyResponse
);
export var GetMedicalVocabulary = op(
  n0,
  _GMV,
  {
    [_h]: ["GET", "/medicalvocabularies/{VocabularyName}", 200],
  },
  () => GetMedicalVocabularyRequest,
  () => GetMedicalVocabularyResponse
);
export var GetVocabulary = op(
  n0,
  _GV,
  {
    [_h]: ["GET", "/vocabularies/{VocabularyName}", 200],
  },
  () => GetVocabularyRequest,
  () => GetVocabularyResponse
);
export var UpdateMedicalVocabulary = op(
  n0,
  _UMV,
  {
    [_h]: ["PATCH", "/medicalvocabularies/{VocabularyName}", 200],
  },
  () => UpdateMedicalVocabularyRequest,
  () => UpdateMedicalVocabularyResponse
);
export var UpdateVocabulary = op(
  n0,
  _UV,
  {
    [_h]: ["PATCH", "/vocabularies/{VocabularyName}", 200],
  },
  () => UpdateVocabularyRequest,
  () => UpdateVocabularyResponse
);
