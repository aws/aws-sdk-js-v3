// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidLayerPartException as __InvalidLayerPartException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _c,
  _e,
  _ILPE,
  _lBR,
  _LEE,
  _lPB,
  _lVBR,
  _me,
  _n,
  _PAS,
  _PASR,
  _PASRu,
  _pFB,
  _pLB,
  _rI,
  _rN,
  _uI,
  _ULP,
  _ULPR,
  _ULPRp,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidLayerPartException = error(
  n0,
  _ILPE,
  {
    [_e]: _c,
  },
  [_rI, _rN, _uI, _lVBR, _me],
  [0, 0, 0, 1, 0],

  __InvalidLayerPartException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LimitExceededException
);
export var PutAccountSettingRequest = struct(n0, _PASR, 0, [_n, _v], [0, 0]);
export var PutAccountSettingResponse = struct(n0, _PASRu, 0, [_n, _v], [0, 0]);
export var UploadLayerPartRequest = struct(n0, _ULPR, 0, [_rI, _rN, _uI, _pFB, _pLB, _lPB], [0, 0, 0, 1, 1, 21]);
export var UploadLayerPartResponse = struct(n0, _ULPRp, 0, [_rI, _rN, _uI, _lBR], [0, 0, 0, 1]);
export var PutAccountSetting = op(
  n0,
  _PAS,
  0,
  () => PutAccountSettingRequest,
  () => PutAccountSettingResponse
);
export var UploadLayerPart = op(
  n0,
  _ULP,
  0,
  () => UploadLayerPartRequest,
  () => UploadLayerPartResponse
);
