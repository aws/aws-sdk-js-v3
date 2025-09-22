// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _APNSCR,
  _APNSCRh,
  _BI,
  _CD,
  _Ce,
  _DACe,
  _DACRel,
  _DACRele,
  _DAM,
  _En,
  _GACe,
  _GACRet,
  _GACRetp,
  _h,
  _HC,
  _HTK,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _PK,
  _TIe,
  _TK,
  _TKI,
  _UACp,
  _UACRpd,
  _UACRpda,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var APNSChannelRequest = struct(
  n0,
  _APNSCR,
  0,
  [_BI, _Ce, _DAM, _En, _PK, _TIe, _TK, _TKI],
  [0, 0, 0, 2, 0, 0, 0, 0]
);
export var APNSChannelResponse = struct(
  n0,
  _APNSCRh,
  0,
  [_AI, _CD, _DAM, _En, _HC, _HTK, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteApnsChannelRequest = struct(n0, _DACRel, 0, [_AI], [[0, 1]]);
export var DeleteApnsChannelResponse = struct(n0, _DACRele, 0, [_APNSCRh], [[() => APNSChannelResponse, 16]]);
export var GetApnsChannelRequest = struct(n0, _GACRet, 0, [_AI], [[0, 1]]);
export var GetApnsChannelResponse = struct(n0, _GACRetp, 0, [_APNSCRh], [[() => APNSChannelResponse, 16]]);
export var UpdateApnsChannelRequest = struct(
  n0,
  _UACRpd,
  0,
  [_APNSCR, _AI],
  [
    [() => APNSChannelRequest, 16],
    [0, 1],
  ]
);
export var UpdateApnsChannelResponse = struct(n0, _UACRpda, 0, [_APNSCRh], [[() => APNSChannelResponse, 16]]);
export var DeleteApnsChannel = op(
  n0,
  _DACe,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/apns", 200],
  },
  () => DeleteApnsChannelRequest,
  () => DeleteApnsChannelResponse
);
export var GetApnsChannel = op(
  n0,
  _GACe,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/apns", 200],
  },
  () => GetApnsChannelRequest,
  () => GetApnsChannelResponse
);
export var UpdateApnsChannel = op(
  n0,
  _UACp,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/apns", 200],
  },
  () => UpdateApnsChannelRequest,
  () => UpdateApnsChannelResponse
);
