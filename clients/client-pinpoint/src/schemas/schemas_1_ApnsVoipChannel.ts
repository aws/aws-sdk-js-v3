// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _APNSVCR,
  _APNSVCRo,
  _BI,
  _CD,
  _Ce,
  _DAM,
  _DAVC,
  _DAVCR,
  _DAVCRe,
  _En,
  _GAVC,
  _GAVCR,
  _GAVCRe,
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
  _UAVC,
  _UAVCR,
  _UAVCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var APNSVoipChannelRequest = struct(
  n0,
  _APNSVCR,
  0,
  [_BI, _Ce, _DAM, _En, _PK, _TIe, _TK, _TKI],
  [0, 0, 0, 2, 0, 0, 0, 0]
);
export var APNSVoipChannelResponse = struct(
  n0,
  _APNSVCRo,
  0,
  [_AI, _CD, _DAM, _En, _HC, _HTK, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteApnsVoipChannelRequest = struct(n0, _DAVCR, 0, [_AI], [[0, 1]]);
export var DeleteApnsVoipChannelResponse = struct(n0, _DAVCRe, 0, [_APNSVCRo], [[() => APNSVoipChannelResponse, 16]]);
export var GetApnsVoipChannelRequest = struct(n0, _GAVCR, 0, [_AI], [[0, 1]]);
export var GetApnsVoipChannelResponse = struct(n0, _GAVCRe, 0, [_APNSVCRo], [[() => APNSVoipChannelResponse, 16]]);
export var UpdateApnsVoipChannelRequest = struct(
  n0,
  _UAVCR,
  0,
  [_APNSVCR, _AI],
  [
    [() => APNSVoipChannelRequest, 16],
    [0, 1],
  ]
);
export var UpdateApnsVoipChannelResponse = struct(n0, _UAVCRp, 0, [_APNSVCRo], [[() => APNSVoipChannelResponse, 16]]);
export var DeleteApnsVoipChannel = op(
  n0,
  _DAVC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/apns_voip", 200],
  },
  () => DeleteApnsVoipChannelRequest,
  () => DeleteApnsVoipChannelResponse
);
export var GetApnsVoipChannel = op(
  n0,
  _GAVC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/apns_voip", 200],
  },
  () => GetApnsVoipChannelRequest,
  () => GetApnsVoipChannelResponse
);
export var UpdateApnsVoipChannel = op(
  n0,
  _UAVC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/apns_voip", 200],
  },
  () => UpdateApnsVoipChannelRequest,
  () => UpdateApnsVoipChannelResponse
);
