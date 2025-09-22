// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AFE,
  _AFEL,
  _AFL,
  _AFt,
  _ARA,
  _aRA,
  _AWSIA,
  _BGAFM,
  _BGAFMR,
  _BGAFMRa,
  _CAFU,
  _CAFUR,
  _CAFURo,
  _CB,
  _CBI,
  _CT,
  _CTr,
  _CUA,
  _DAF,
  _DAFR,
  _DAFRe,
  _DUM,
  _EC,
  _EM,
  _Er,
  _F,
  _FAi,
  _FIi,
  _FIil,
  _FN,
  _FS,
  _FSIB,
  _FUCT,
  _GAF,
  _GAFR,
  _GAFRe,
  _h,
  _hQ,
  _HTI,
  _II,
  _SAFU,
  _SAFUR,
  _SAFURt,
  _Ta,
  _UE,
  _UEIS,
  _uEIS,
  _Ur,
  _UUM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachedFile = struct(
  n0,
  _AFt,
  0,
  [_CTr, _FAi, _FIi, _FN, _FSIB, _FS, _CB, _FUCT, _ARA, _Ta],
  [0, 0, 0, 0, 1, 0, () => CreatedByInfo, 0, 0, 128 | 0]
);
export var AttachedFileError = struct(n0, _AFE, 0, [_EC, _EM, _FIi], [0, 0, 0]);
export var BatchGetAttachedFileMetadataRequest = struct(
  n0,
  _BGAFMR,
  0,
  [_FIil, _II, _ARA],
  [
    64 | 0,
    [0, 1],
    [
      0,
      {
        [_hQ]: _aRA,
      },
    ],
  ]
);
export var BatchGetAttachedFileMetadataResponse = struct(
  n0,
  _BGAFMRa,
  0,
  [_F, _Er],
  [() => AttachedFilesList, () => AttachedFileErrorsList]
);
export var CompleteAttachedFileUploadRequest = struct(
  n0,
  _CAFUR,
  0,
  [_II, _FIi, _ARA],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aRA,
      },
    ],
  ]
);
export var CompleteAttachedFileUploadResponse = struct(n0, _CAFURo, 0, [], []);
export var DeleteAttachedFileRequest = struct(
  n0,
  _DAFR,
  0,
  [_II, _FIi, _ARA],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aRA,
      },
    ],
  ]
);
export var DeleteAttachedFileResponse = struct(n0, _DAFRe, 0, [], []);
export var DownloadUrlMetadata = struct(n0, _DUM, 0, [_Ur, _UE], [0, 0]);
export var GetAttachedFileRequest = struct(
  n0,
  _GAFR,
  0,
  [_II, _FIi, _UEIS, _ARA],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _uEIS,
      },
    ],
    [
      0,
      {
        [_hQ]: _aRA,
      },
    ],
  ]
);
export var GetAttachedFileResponse = struct(
  n0,
  _GAFRe,
  0,
  [_FAi, _FIi, _CTr, _FS, _FN, _FSIB, _ARA, _FUCT, _CB, _DUM, _Ta],
  [0, 0, 0, 0, 0, 1, 0, 0, () => CreatedByInfo, () => DownloadUrlMetadata, 128 | 0]
);
export var StartAttachedFileUploadRequest = struct(
  n0,
  _SAFUR,
  0,
  [_CT, _II, _FN, _FSIB, _UEIS, _FUCT, _ARA, _CB, _Ta],
  [
    [0, 4],
    [0, 1],
    0,
    1,
    1,
    0,
    [
      0,
      {
        [_hQ]: _aRA,
      },
    ],
    () => CreatedByInfo,
    128 | 0,
  ]
);
export var StartAttachedFileUploadResponse = struct(
  n0,
  _SAFURt,
  0,
  [_FAi, _FIi, _CTr, _FS, _CB, _UUM],
  [0, 0, 0, 0, () => CreatedByInfo, () => UploadUrlMetadata]
);
export var UploadUrlMetadata = struct(n0, _UUM, 0, [_Ur, _UE, _HTI], [0, 0, 128 | 0]);
export var AttachedFileErrorsList = list(n0, _AFEL, 0, () => AttachedFileError);
export var AttachedFilesList = list(n0, _AFL, 0, () => AttachedFile);
export var FileIdList = 64 | 0;

export var UrlMetadataSignedHeaders = 128 | 0;

export var CreatedByInfo = uni(n0, _CBI, 0, [_CUA, _AWSIA], [0, 0]);
export var BatchGetAttachedFileMetadata = op(
  n0,
  _BGAFM,
  {
    [_h]: ["POST", "/attached-files/{InstanceId}", 200],
  },
  () => BatchGetAttachedFileMetadataRequest,
  () => BatchGetAttachedFileMetadataResponse
);
export var CompleteAttachedFileUpload = op(
  n0,
  _CAFU,
  {
    [_h]: ["POST", "/attached-files/{InstanceId}/{FileId}", 200],
  },
  () => CompleteAttachedFileUploadRequest,
  () => CompleteAttachedFileUploadResponse
);
export var DeleteAttachedFile = op(
  n0,
  _DAF,
  {
    [_h]: ["DELETE", "/attached-files/{InstanceId}/{FileId}", 200],
  },
  () => DeleteAttachedFileRequest,
  () => DeleteAttachedFileResponse
);
export var GetAttachedFile = op(
  n0,
  _GAF,
  {
    [_h]: ["GET", "/attached-files/{InstanceId}/{FileId}", 200],
  },
  () => GetAttachedFileRequest,
  () => GetAttachedFileResponse
);
export var StartAttachedFileUpload = op(
  n0,
  _SAFU,
  {
    [_h]: ["PUT", "/attached-files/{InstanceId}", 200],
  },
  () => StartAttachedFileUploadRequest,
  () => StartAttachedFileUploadResponse
);
