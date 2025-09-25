// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _AK,
  _CD,
  _Cr,
  _DAM,
  _DGC,
  _DGCR,
  _DGCRe,
  _En,
  _GCMCR,
  _GCMCRh,
  _GGC,
  _GGCR,
  _GGCRe,
  _h,
  _HC,
  _HFSC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _SJ,
  _UGC,
  _UGCR,
  _UGCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGcmChannelRequest = struct(n0, _DGCR, 0, [_AI], [[0, 1]]);
export var DeleteGcmChannelResponse = struct(n0, _DGCRe, 0, [_GCMCR], [[() => GCMChannelResponse, 16]]);
export var GCMChannelRequest = struct(n0, _GCMCRh, 0, [_AK, _DAM, _En, _SJ], [0, 0, 2, 0]);
export var GCMChannelResponse = struct(
  n0,
  _GCMCR,
  0,
  [_AI, _CD, _Cr, _DAM, _En, _HC, _HFSC, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var GetGcmChannelRequest = struct(n0, _GGCR, 0, [_AI], [[0, 1]]);
export var GetGcmChannelResponse = struct(n0, _GGCRe, 0, [_GCMCR], [[() => GCMChannelResponse, 16]]);
export var UpdateGcmChannelRequest = struct(
  n0,
  _UGCR,
  0,
  [_AI, _GCMCRh],
  [
    [0, 1],
    [() => GCMChannelRequest, 16],
  ]
);
export var UpdateGcmChannelResponse = struct(n0, _UGCRp, 0, [_GCMCR], [[() => GCMChannelResponse, 16]]);
export var DeleteGcmChannel = op(
  n0,
  _DGC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/gcm", 200],
  },
  () => DeleteGcmChannelRequest,
  () => DeleteGcmChannelResponse
);
export var GetGcmChannel = op(
  n0,
  _GGC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/gcm", 200],
  },
  () => GetGcmChannelRequest,
  () => GetGcmChannelResponse
);
export var UpdateGcmChannel = op(
  n0,
  _UGC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/gcm", 200],
  },
  () => UpdateGcmChannelRequest,
  () => UpdateGcmChannelResponse
);
