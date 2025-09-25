// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EmptyUploadException as __EmptyUploadException,
  ImageAlreadyExistsException as __ImageAlreadyExistsException,
  ImageDigestDoesNotMatchException as __ImageDigestDoesNotMatchException,
  ImageTagAlreadyExistsException as __ImageTagAlreadyExistsException,
  InvalidLayerException as __InvalidLayerException,
  InvalidLayerPartException as __InvalidLayerPartException,
  LayerAlreadyExistsException as __LayerAlreadyExistsException,
  LayerPartTooSmallException as __LayerPartTooSmallException,
  LayersNotFoundException as __LayersNotFoundException,
  ReferencedImagesNotFoundException as __ReferencedImagesNotFoundException,
  RegistryNotFoundException as __RegistryNotFoundException,
  UploadNotFoundException as __UploadNotFoundException,
} from "../models/index";
import {
  _BCLA,
  _BCLAR,
  _BCLARa,
  _BDI,
  _BDIR,
  _BDIRa,
  _c,
  _CLU,
  _CLUR,
  _CLURo,
  _e,
  _EUE,
  _f,
  _fC,
  _fR,
  _I,
  _i,
  _IAEE,
  _IDDNME,
  _iDm,
  _IF,
  _IFL,
  _iI,
  _iIm,
  _ILE,
  _ILPE,
  _ILU,
  _ILUR,
  _ILURn,
  _iM,
  _iMMT,
  _ITAEE,
  _iTm,
  _L,
  _l,
  _lA,
  _LAEE,
  _lBR,
  _lD,
  _lDa,
  _LF,
  _LFL,
  _LL,
  _LNFE,
  _lPB,
  _LPTSE,
  _lS,
  _lVBR,
  _m,
  _mT,
  _pFB,
  _PI,
  _PIR,
  _PIRu,
  _pLB,
  _pS,
  _rI,
  _RINFE,
  _rN,
  _RNFE,
  _uI,
  _ULP,
  _ULPR,
  _ULPRp,
  _UNFE,
  n0,
} from "./schemas_0";
import { ImageIdentifier, ImageIdentifierList } from "./schemas_2_Image";

/* eslint no-var: 0 */

export var BatchCheckLayerAvailabilityRequest = struct(n0, _BCLAR, 0, [_rI, _rN, _lD], [0, 0, 64 | 0]);
export var BatchCheckLayerAvailabilityResponse = struct(
  n0,
  _BCLARa,
  0,
  [_l, _f],
  [() => LayerList, () => LayerFailureList]
);
export var BatchDeleteImageRequest = struct(n0, _BDIR, 0, [_rI, _rN, _iI], [0, 0, () => ImageIdentifierList]);
export var BatchDeleteImageResponse = struct(
  n0,
  _BDIRa,
  0,
  [_iI, _f],
  [() => ImageIdentifierList, () => ImageFailureList]
);
export var CompleteLayerUploadRequest = struct(n0, _CLUR, 0, [_rI, _rN, _uI, _lD], [0, 0, 0, 64 | 0]);
export var CompleteLayerUploadResponse = struct(n0, _CLURo, 0, [_rI, _rN, _uI, _lDa], [0, 0, 0, 0]);
export var EmptyUploadException = error(
  n0,
  _EUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __EmptyUploadException
);
export var Image = struct(n0, _I, 0, [_rI, _rN, _iIm, _iM, _iMMT], [0, 0, () => ImageIdentifier, 0, 0]);
export var ImageAlreadyExistsException = error(
  n0,
  _IAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImageAlreadyExistsException
);
export var ImageDigestDoesNotMatchException = error(
  n0,
  _IDDNME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImageDigestDoesNotMatchException
);
export var ImageFailure = struct(n0, _IF, 0, [_iIm, _fC, _fR], [() => ImageIdentifier, 0, 0]);
export var ImageTagAlreadyExistsException = error(
  n0,
  _ITAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImageTagAlreadyExistsException
);
export var InitiateLayerUploadRequest = struct(n0, _ILUR, 0, [_rI, _rN], [0, 0]);
export var InitiateLayerUploadResponse = struct(n0, _ILURn, 0, [_uI, _pS], [0, 1]);
export var InvalidLayerException = error(
  n0,
  _ILE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidLayerException
);
export var InvalidLayerPartException = error(
  n0,
  _ILPE,
  {
    [_e]: _c,
  },
  [_rI, _rN, _uI, _lVBR, _m],
  [0, 0, 0, 1, 0],

  __InvalidLayerPartException
);
export var Layer = struct(n0, _L, 0, [_lDa, _lA, _lS, _mT], [0, 0, 1, 0]);
export var LayerAlreadyExistsException = error(
  n0,
  _LAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LayerAlreadyExistsException
);
export var LayerFailure = struct(n0, _LF, 0, [_lDa, _fC, _fR], [0, 0, 0]);
export var LayerPartTooSmallException = error(
  n0,
  _LPTSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LayerPartTooSmallException
);
export var LayersNotFoundException = error(
  n0,
  _LNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __LayersNotFoundException
);
export var PutImageRequest = struct(n0, _PIR, 0, [_rI, _rN, _iM, _iMMT, _iTm, _iDm], [0, 0, 0, 0, 0, 0]);
export var PutImageResponse = struct(n0, _PIRu, 0, [_i], [() => Image]);
export var ReferencedImagesNotFoundException = error(
  n0,
  _RINFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReferencedImagesNotFoundException
);
export var RegistryNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RegistryNotFoundException
);
export var UploadLayerPartRequest = struct(n0, _ULPR, 0, [_rI, _rN, _uI, _pFB, _pLB, _lPB], [0, 0, 0, 1, 1, 21]);
export var UploadLayerPartResponse = struct(n0, _ULPRp, 0, [_rI, _rN, _uI, _lBR], [0, 0, 0, 1]);
export var UploadNotFoundException = error(
  n0,
  _UNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UploadNotFoundException
);
export var BatchedOperationLayerDigestList = 64 | 0;

export var ImageFailureList = list(n0, _IFL, 0, () => ImageFailure);
export var LayerDigestList = 64 | 0;

export var LayerFailureList = list(n0, _LFL, 0, () => LayerFailure);
export var LayerList = list(n0, _LL, 0, () => Layer);
export var BatchCheckLayerAvailability = op(
  n0,
  _BCLA,
  0,
  () => BatchCheckLayerAvailabilityRequest,
  () => BatchCheckLayerAvailabilityResponse
);
export var BatchDeleteImage = op(
  n0,
  _BDI,
  0,
  () => BatchDeleteImageRequest,
  () => BatchDeleteImageResponse
);
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
export var PutImage = op(
  n0,
  _PI,
  0,
  () => PutImageRequest,
  () => PutImageResponse
);
export var UploadLayerPart = op(
  n0,
  _ULP,
  0,
  () => UploadLayerPartRequest,
  () => UploadLayerPartResponse
);
