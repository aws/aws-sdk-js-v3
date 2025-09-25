// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _APNSSCR,
  _APNSSCRa,
  _BI,
  _CD,
  _Ce,
  _DAM,
  _DASC,
  _DASCR,
  _DASCRe,
  _En,
  _GASC,
  _GASCR,
  _GASCRe,
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
  _UASC,
  _UASCR,
  _UASCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var APNSSandboxChannelRequest = struct(
  n0,
  _APNSSCR,
  0,
  [_BI, _Ce, _DAM, _En, _PK, _TIe, _TK, _TKI],
  [0, 0, 0, 2, 0, 0, 0, 0]
);
export var APNSSandboxChannelResponse = struct(
  n0,
  _APNSSCRa,
  0,
  [_AI, _CD, _DAM, _En, _HC, _HTK, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteApnsSandboxChannelRequest = struct(n0, _DASCR, 0, [_AI], [[0, 1]]);
export var DeleteApnsSandboxChannelResponse = struct(
  n0,
  _DASCRe,
  0,
  [_APNSSCRa],
  [[() => APNSSandboxChannelResponse, 16]]
);
export var GetApnsSandboxChannelRequest = struct(n0, _GASCR, 0, [_AI], [[0, 1]]);
export var GetApnsSandboxChannelResponse = struct(
  n0,
  _GASCRe,
  0,
  [_APNSSCRa],
  [[() => APNSSandboxChannelResponse, 16]]
);
export var UpdateApnsSandboxChannelRequest = struct(
  n0,
  _UASCR,
  0,
  [_APNSSCR, _AI],
  [
    [() => APNSSandboxChannelRequest, 16],
    [0, 1],
  ]
);
export var UpdateApnsSandboxChannelResponse = struct(
  n0,
  _UASCRp,
  0,
  [_APNSSCRa],
  [[() => APNSSandboxChannelResponse, 16]]
);
export var DeleteApnsSandboxChannel = op(
  n0,
  _DASC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/apns_sandbox", 200],
  },
  () => DeleteApnsSandboxChannelRequest,
  () => DeleteApnsSandboxChannelResponse
);
export var GetApnsSandboxChannel = op(
  n0,
  _GASC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/apns_sandbox", 200],
  },
  () => GetApnsSandboxChannelRequest,
  () => GetApnsSandboxChannelResponse
);
export var UpdateApnsSandboxChannel = op(
  n0,
  _UASC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/apns_sandbox", 200],
  },
  () => UpdateApnsSandboxChannelRequest,
  () => UpdateApnsSandboxChannelResponse
);
