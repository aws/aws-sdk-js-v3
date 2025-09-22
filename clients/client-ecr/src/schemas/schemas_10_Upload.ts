// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  EmptyUploadException as __EmptyUploadException,
  InvalidLayerException as __InvalidLayerException,
  KmsException as __KmsException,
  LayerAlreadyExistsException as __LayerAlreadyExistsException,
  LayerPartTooSmallException as __LayerPartTooSmallException,
  UploadNotFoundException as __UploadNotFoundException,
} from "../models/index";
import {
  _c,
  _CLU,
  _CLUR,
  _CLURo,
  _e,
  _EUE,
  _ILE,
  _ILU,
  _ILUR,
  _ILURn,
  _KE,
  _kE,
  _LAEE,
  _lD,
  _lDa,
  _LPTSE,
  _me,
  _pS,
  _rI,
  _rN,
  _uI,
  _UNFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompleteLayerUploadRequest = struct(n0, _CLUR, 0, [_rI, _rN, _uI, _lD], [0, 0, 0, 64 | 0]);
export var CompleteLayerUploadResponse = struct(n0, _CLURo, 0, [_rI, _rN, _uI, _lDa], [0, 0, 0, 0]);
export var EmptyUploadException = error(
  n0,
  _EUE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __EmptyUploadException
);
export var InitiateLayerUploadRequest = struct(n0, _ILUR, 0, [_rI, _rN], [0, 0]);
export var InitiateLayerUploadResponse = struct(n0, _ILURn, 0, [_uI, _pS], [0, 1]);
export var InvalidLayerException = error(
  n0,
  _ILE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __InvalidLayerException
);
export var KmsException = error(
  n0,
  _KE,
  {
    [_e]: _c,
  },
  [_me, _kE],
  [0, 0],

  __KmsException
);
export var LayerAlreadyExistsException = error(
  n0,
  _LAEE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LayerAlreadyExistsException
);
export var LayerPartTooSmallException = error(
  n0,
  _LPTSE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __LayerPartTooSmallException
);
export var UploadNotFoundException = error(
  n0,
  _UNFE,
  {
    [_e]: _c,
  },
  [_me],
  [0],

  __UploadNotFoundException
);
export var LayerDigestList = 64 | 0;

export var CompleteLayerUpload = op(
  n0,
  _CLU,
  0,
  () => CompleteLayerUploadRequest,
  () => CompleteLayerUploadResponse
);
export var InitiateLayerUpload = op(
  n0,
  _ILU,
  0,
  () => InitiateLayerUploadRequest,
  () => InitiateLayerUploadResponse
);
