// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _aIt,
  _aPU,
  _cI,
  _cL,
  _cT,
  _fN,
  _GCADU,
  _GCADUR,
  _GCADURe,
  _GCAUU,
  _GCAUUR,
  _GCAUURe,
  _h,
  _U,
  n0,
} from "./schemas_0";
import { FileName } from "./schemas_12_GetCase";

/* eslint no-var: 0 */

export var Url = sim(n0, _U, 0, 8);
export var GetCaseAttachmentDownloadUrlRequest = struct(
  n0,
  _GCADUR,
  0,
  [_cI, _aIt],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCaseAttachmentDownloadUrlResponse = struct(n0, _GCADURe, 0, [_aPU], [[() => Url, 0]]);
export var GetCaseAttachmentUploadUrlRequest = struct(
  n0,
  _GCAUUR,
  0,
  [_cI, _fN, _cL, _cT],
  [[0, 1], [() => FileName, 0], 1, [0, 4]]
);
export var GetCaseAttachmentUploadUrlResponse = struct(n0, _GCAUURe, 0, [_aPU], [[() => Url, 0]]);
export var GetCaseAttachmentDownloadUrl = op(
  n0,
  _GCADU,
  {
    [_h]: ["GET", "/v1/cases/{caseId}/get-presigned-url/{attachmentId}", 201],
  },
  () => GetCaseAttachmentDownloadUrlRequest,
  () => GetCaseAttachmentDownloadUrlResponse
);
export var GetCaseAttachmentUploadUrl = op(
  n0,
  _GCAUU,
  {
    [_h]: ["POST", "/v1/cases/{caseId}/get-presigned-url", 201],
  },
  () => GetCaseAttachmentUploadUrlRequest,
  () => GetCaseAttachmentUploadUrlResponse
);
