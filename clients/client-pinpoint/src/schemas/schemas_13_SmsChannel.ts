// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CD,
  _DSC,
  _DSCR,
  _DSCRe,
  _En,
  _GSC,
  _GSCR,
  _GSCRe,
  _h,
  _HC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _PMPS,
  _SCh,
  _SIe,
  _SMSCR,
  _SMSCRh,
  _TMPS,
  _USC,
  _USCR,
  _USCRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSmsChannelRequest = struct(n0, _DSCR, 0, [_AI], [[0, 1]]);
export var DeleteSmsChannelResponse = struct(n0, _DSCRe, 0, [_SMSCR], [[() => SMSChannelResponse, 16]]);
export var GetSmsChannelRequest = struct(n0, _GSCR, 0, [_AI], [[0, 1]]);
export var GetSmsChannelResponse = struct(n0, _GSCRe, 0, [_SMSCR], [[() => SMSChannelResponse, 16]]);
export var SMSChannelRequest = struct(n0, _SMSCRh, 0, [_En, _SIe, _SCh], [2, 0, 0]);
export var SMSChannelResponse = struct(
  n0,
  _SMSCR,
  0,
  [_AI, _CD, _En, _HC, _Id, _IA, _LMB, _LMD, _P, _PMPS, _SIe, _SCh, _TMPS, _V],
  [0, 0, 2, 2, 0, 2, 0, 0, 0, 1, 0, 0, 1, 1]
);
export var UpdateSmsChannelRequest = struct(
  n0,
  _USCR,
  0,
  [_AI, _SMSCRh],
  [
    [0, 1],
    [() => SMSChannelRequest, 16],
  ]
);
export var UpdateSmsChannelResponse = struct(n0, _USCRp, 0, [_SMSCR], [[() => SMSChannelResponse, 16]]);
export var DeleteSmsChannel = op(
  n0,
  _DSC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/sms", 200],
  },
  () => DeleteSmsChannelRequest,
  () => DeleteSmsChannelResponse
);
export var GetSmsChannel = op(
  n0,
  _GSC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/sms", 200],
  },
  () => GetSmsChannelRequest,
  () => GetSmsChannelResponse
);
export var UpdateSmsChannel = op(
  n0,
  _USC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/sms", 200],
  },
  () => UpdateSmsChannelRequest,
  () => UpdateSmsChannelResponse
);
