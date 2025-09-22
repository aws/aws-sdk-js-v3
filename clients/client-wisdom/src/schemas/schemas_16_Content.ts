// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _ht, _hTI, _kBI, _pUTTL, _SCU, _SCUR, _SCURt, _u, _uE, _uI, n0 } from "./schemas_0";
import { Url } from "./schemas_19_Content";

/* eslint no-var: 0 */

export var StartContentUploadRequest = struct(n0, _SCUR, 0, [_kBI, _cT, _pUTTL], [[0, 1], 0, 1]);
export var StartContentUploadResponse = struct(n0, _SCURt, 0, [_uI, _u, _uE, _hTI], [0, [() => Url, 0], 7, 128 | 0]);
export var Headers = 128 | 0;

export var StartContentUpload = op(
  n0,
  _SCU,
  {
    [_ht]: ["POST", "/knowledgeBases/{knowledgeBaseId}/upload", 200],
  },
  () => StartContentUploadRequest,
  () => StartContentUploadResponse
);
