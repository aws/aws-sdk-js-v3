// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _APNSVSCR,
  _APNSVSCRo,
  _BI,
  _CD,
  _Ce,
  _DAM,
  _DAVSC,
  _DAVSCR,
  _DAVSCRe,
  _En,
  _GAVSC,
  _GAVSCR,
  _GAVSCRe,
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
  _UAVSC,
  _UAVSCR,
  _UAVSCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var APNSVoipSandboxChannelRequest = struct(
  n0,
  _APNSVSCR,
  0,
  [_BI, _Ce, _DAM, _En, _PK, _TIe, _TK, _TKI],
  [0, 0, 0, 2, 0, 0, 0, 0]
);
export var APNSVoipSandboxChannelResponse = struct(
  n0,
  _APNSVSCRo,
  0,
  [_AI, _CD, _DAM, _En, _HC, _HTK, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteApnsVoipSandboxChannelRequest = struct(n0, _DAVSCR, 0, [_AI], [[0, 1]]);
export var DeleteApnsVoipSandboxChannelResponse = struct(
  n0,
  _DAVSCRe,
  0,
  [_APNSVSCRo],
  [[() => APNSVoipSandboxChannelResponse, 16]]
);
export var GetApnsVoipSandboxChannelRequest = struct(n0, _GAVSCR, 0, [_AI], [[0, 1]]);
export var GetApnsVoipSandboxChannelResponse = struct(
  n0,
  _GAVSCRe,
  0,
  [_APNSVSCRo],
  [[() => APNSVoipSandboxChannelResponse, 16]]
);
export var UpdateApnsVoipSandboxChannelRequest = struct(
  n0,
  _UAVSCR,
  0,
  [_APNSVSCR, _AI],
  [
    [() => APNSVoipSandboxChannelRequest, 16],
    [0, 1],
  ]
);
export var UpdateApnsVoipSandboxChannelResponse = struct(
  n0,
  _UAVSCRp,
  0,
  [_APNSVSCRo],
  [[() => APNSVoipSandboxChannelResponse, 16]]
);
export var DeleteApnsVoipSandboxChannel = op(
  n0,
  _DAVSC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox", 200],
  },
  () => DeleteApnsVoipSandboxChannelRequest,
  () => DeleteApnsVoipSandboxChannelResponse
);
export var GetApnsVoipSandboxChannel = op(
  n0,
  _GAVSC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox", 200],
  },
  () => GetApnsVoipSandboxChannelRequest,
  () => GetApnsVoipSandboxChannelResponse
);
export var UpdateApnsVoipSandboxChannel = op(
  n0,
  _UAVSC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox", 200],
  },
  () => UpdateApnsVoipSandboxChannelRequest,
  () => UpdateApnsVoipSandboxChannelResponse
);
