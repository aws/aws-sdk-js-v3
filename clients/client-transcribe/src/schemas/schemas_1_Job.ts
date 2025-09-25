// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CIh,
  _CIT,
  _CT,
  _CTo,
  _FR,
  _GMTJ,
  _GMTJR,
  _GMTJRe,
  _h,
  _KMSEC,
  _LC,
  _MA,
  _Me,
  _MF,
  _MFU,
  _MSL,
  _MSRH,
  _MT,
  _MTJ,
  _MTJN,
  _MTS,
  _OBN,
  _OEKMSKI,
  _OK,
  _RMFU,
  _S,
  _SA,
  _SMTJ,
  _SMTJR,
  _SMTJRt,
  _Sp,
  _SSL,
  _ST,
  _T,
  _Ta,
  _TFU,
  _TJSr,
  _Ty,
  _VN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMedicalTranscriptionJobRequest = struct(n0, _GMTJR, 0, [_MTJN], [[0, 1]]);
export var GetMedicalTranscriptionJobResponse = struct(n0, _GMTJRe, 0, [_MTJ], [() => MedicalTranscriptionJob]);
export var Media = struct(n0, _Me, 0, [_MFU, _RMFU], [0, 0]);
export var MedicalTranscript = struct(n0, _MT, 0, [_TFU], [0]);
export var MedicalTranscriptionJob = struct(
  n0,
  _MTJ,
  0,
  [_MTJN, _TJSr, _LC, _MSRH, _MF, _Me, _T, _ST, _CT, _CTo, _FR, _S, _CIT, _Sp, _Ty, _Ta],
  [
    0,
    0,
    0,
    1,
    0,
    () => Media,
    () => MedicalTranscript,
    4,
    4,
    4,
    0,
    () => MedicalTranscriptionSetting,
    0,
    0,
    0,
    () => TagList,
  ]
);
export var MedicalTranscriptionSetting = struct(n0, _MTS, 0, [_SSL, _MSL, _CIh, _SA, _MA, _VN], [2, 1, 2, 2, 1, 0]);
export var StartMedicalTranscriptionJobRequest = struct(
  n0,
  _SMTJR,
  0,
  [_MTJN, _LC, _MSRH, _MF, _Me, _OBN, _OK, _OEKMSKI, _KMSEC, _S, _CIT, _Sp, _Ty, _Ta],
  [[0, 1], 0, 1, 0, () => Media, 0, 0, 0, 128 | 0, () => MedicalTranscriptionSetting, 0, 0, 0, () => TagList]
);
export var StartMedicalTranscriptionJobResponse = struct(n0, _SMTJRt, 0, [_MTJ], [() => MedicalTranscriptionJob]);
export var KMSEncryptionContextMap = 128 | 0;

export var GetMedicalTranscriptionJob = op(
  n0,
  _GMTJ,
  {
    [_h]: ["GET", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 200],
  },
  () => GetMedicalTranscriptionJobRequest,
  () => GetMedicalTranscriptionJobResponse
);
export var StartMedicalTranscriptionJob = op(
  n0,
  _SMTJ,
  {
    [_h]: ["PUT", "/medicaltranscriptionjobs/{MedicalTranscriptionJobName}", 200],
  },
  () => StartMedicalTranscriptionJobRequest,
  () => StartMedicalTranscriptionJobResponse
);
