// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ImageNotFoundException as __ImageNotFoundException } from "../models/index";
import {
  _aMT,
  _c,
  _cA,
  _DI,
  _DIR,
  _DIRe,
  _DIT,
  _DITR,
  _DITRe,
  _e,
  _ID,
  _iD,
  _IDL,
  _iDm,
  _iDma,
  _II,
  _iI,
  _IIL,
  _iMMT,
  _INFE,
  _iPA,
  _iSIB,
  _iT,
  _ITD,
  _iTD,
  _ITDL,
  _iTm,
  _m,
  _mR,
  _nT,
  _rI,
  _RID,
  _rN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeImagesRequest = struct(
  n0,
  _DIR,
  0,
  [_rI, _rN, _iI, _nT, _mR],
  [0, 0, () => ImageIdentifierList, 0, 1]
);
export var DescribeImagesResponse = struct(n0, _DIRe, 0, [_iD, _nT], [() => ImageDetailList, 0]);
export var DescribeImageTagsRequest = struct(n0, _DITR, 0, [_rI, _rN, _nT, _mR], [0, 0, 0, 1]);
export var DescribeImageTagsResponse = struct(n0, _DITRe, 0, [_iTD, _nT], [() => ImageTagDetailList, 0]);
export var ImageDetail = struct(
  n0,
  _ID,
  0,
  [_rI, _rN, _iDm, _iT, _iSIB, _iPA, _iMMT, _aMT],
  [0, 0, 0, 64 | 0, 1, 4, 0, 0]
);
export var ImageIdentifier = struct(n0, _II, 0, [_iDm, _iTm], [0, 0]);
export var ImageNotFoundException = error(
  n0,
  _INFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ImageNotFoundException
);
export var ImageTagDetail = struct(n0, _ITD, 0, [_iTm, _cA, _iDma], [0, 4, () => ReferencedImageDetail]);
export var ReferencedImageDetail = struct(n0, _RID, 0, [_iDm, _iSIB, _iPA, _iMMT, _aMT], [0, 1, 4, 0, 0]);
export var ImageDetailList = list(n0, _IDL, 0, () => ImageDetail);
export var ImageIdentifierList = list(n0, _IIL, 0, () => ImageIdentifier);
export var ImageTagDetailList = list(n0, _ITDL, 0, () => ImageTagDetail);
export var ImageTagList = 64 | 0;

export var DescribeImages = op(
  n0,
  _DI,
  0,
  () => DescribeImagesRequest,
  () => DescribeImagesResponse
);
export var DescribeImageTags = op(
  n0,
  _DIT,
  0,
  () => DescribeImageTagsRequest,
  () => DescribeImageTagsResponse
);
