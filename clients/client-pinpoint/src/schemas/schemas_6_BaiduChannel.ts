// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AK,
  _BCR,
  _BCRa,
  _CD,
  _Cr,
  _DBCe,
  _DBCR,
  _DBCRe,
  _En,
  _GBC,
  _GBCR,
  _GBCRe,
  _h,
  _HC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _SK,
  _UBC,
  _UBCR,
  _UBCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BaiduChannelRequest = struct(n0, _BCR, 0, [_AK, _En, _SK], [0, 2, 0]);
export var BaiduChannelResponse = struct(
  n0,
  _BCRa,
  0,
  [_AI, _CD, _Cr, _En, _HC, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteBaiduChannelRequest = struct(n0, _DBCR, 0, [_AI], [[0, 1]]);
export var DeleteBaiduChannelResponse = struct(n0, _DBCRe, 0, [_BCRa], [[() => BaiduChannelResponse, 16]]);
export var GetBaiduChannelRequest = struct(n0, _GBCR, 0, [_AI], [[0, 1]]);
export var GetBaiduChannelResponse = struct(n0, _GBCRe, 0, [_BCRa], [[() => BaiduChannelResponse, 16]]);
export var UpdateBaiduChannelRequest = struct(
  n0,
  _UBCR,
  0,
  [_AI, _BCR],
  [
    [0, 1],
    [() => BaiduChannelRequest, 16],
  ]
);
export var UpdateBaiduChannelResponse = struct(n0, _UBCRp, 0, [_BCRa], [[() => BaiduChannelResponse, 16]]);
export var DeleteBaiduChannel = op(
  n0,
  _DBCe,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/baidu", 200],
  },
  () => DeleteBaiduChannelRequest,
  () => DeleteBaiduChannelResponse
);
export var GetBaiduChannel = op(
  n0,
  _GBC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/baidu", 200],
  },
  () => GetBaiduChannelRequest,
  () => GetBaiduChannelResponse
);
export var UpdateBaiduChannel = op(
  n0,
  _UBC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/baidu", 200],
  },
  () => UpdateBaiduChannelRequest,
  () => UpdateBaiduChannelResponse
);
