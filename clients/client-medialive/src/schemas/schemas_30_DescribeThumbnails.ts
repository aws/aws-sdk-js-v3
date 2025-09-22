// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bo,
  _bo,
  _CIha,
  _CTo,
  _cTon,
  _DTes,
  _DTRe,
  _DTRes,
  _hQ,
  _ht,
  _jN,
  _lOT,
  _lOTD,
  _PI,
  _pI,
  _TD,
  _tD,
  _TDh,
  _Thu,
  _thu,
  _Thum,
  _TSi,
  _tSi,
  _TT,
  _tT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeThumbnailsRequest = struct(
  n0,
  _DTRe,
  0,
  [_CIha, _PI, _TT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tT,
      },
    ],
  ]
);
export var DescribeThumbnailsResponse = struct(
  n0,
  _DTRes,
  0,
  [_TD],
  [
    [
      () => __listOfThumbnailDetail,
      {
        [_jN]: _tD,
      },
    ],
  ]
);
export var Thumbnail = struct(
  n0,
  _Thu,
  0,
  [_Bo, _CTo, _TT, _TSi],
  [
    [
      0,
      {
        [_jN]: _bo,
      },
    ],
    [
      0,
      {
        [_jN]: _cTon,
      },
    ],
    [
      0,
      {
        [_jN]: _tT,
      },
    ],
    [
      5,
      {
        [_jN]: _tSi,
      },
    ],
  ]
);
export var ThumbnailDetail = struct(
  n0,
  _TDh,
  0,
  [_PI, _Thum],
  [
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      () => __listOfThumbnail,
      {
        [_jN]: _thu,
      },
    ],
  ]
);
export var __listOfThumbnail = list(n0, _lOT, 0, [() => Thumbnail, 0]);
export var __listOfThumbnailDetail = list(n0, _lOTD, 0, [() => ThumbnailDetail, 0]);
export var DescribeThumbnails = op(
  n0,
  _DTes,
  {
    [_ht]: ["GET", "/prod/channels/{ChannelId}/thumbnails", 200],
  },
  () => DescribeThumbnailsRequest,
  () => DescribeThumbnailsResponse
);
