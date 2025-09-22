// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ADMCR,
  _ADMCRh,
  _AI,
  _CD,
  _CIl,
  _CSl,
  _DAC,
  _DACR,
  _DACRe,
  _En,
  _GAC,
  _GACR,
  _GACRe,
  _h,
  _HC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _UAC,
  _UACR,
  _UACRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ADMChannelRequest = struct(n0, _ADMCR, 0, [_CIl, _CSl, _En], [0, 0, 2]);
export var ADMChannelResponse = struct(
  n0,
  _ADMCRh,
  0,
  [_AI, _CD, _En, _HC, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteAdmChannelRequest = struct(n0, _DACR, 0, [_AI], [[0, 1]]);
export var DeleteAdmChannelResponse = struct(n0, _DACRe, 0, [_ADMCRh], [[() => ADMChannelResponse, 16]]);
export var GetAdmChannelRequest = struct(n0, _GACR, 0, [_AI], [[0, 1]]);
export var GetAdmChannelResponse = struct(n0, _GACRe, 0, [_ADMCRh], [[() => ADMChannelResponse, 16]]);
export var UpdateAdmChannelRequest = struct(
  n0,
  _UACR,
  0,
  [_ADMCR, _AI],
  [
    [() => ADMChannelRequest, 16],
    [0, 1],
  ]
);
export var UpdateAdmChannelResponse = struct(n0, _UACRp, 0, [_ADMCRh], [[() => ADMChannelResponse, 16]]);
export var DeleteAdmChannel = op(
  n0,
  _DAC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/adm", 200],
  },
  () => DeleteAdmChannelRequest,
  () => DeleteAdmChannelResponse
);
export var GetAdmChannel = op(
  n0,
  _GAC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/adm", 200],
  },
  () => GetAdmChannelRequest,
  () => GetAdmChannelResponse
);
export var UpdateAdmChannel = op(
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/adm", 200],
  },
  () => UpdateAdmChannelRequest,
  () => UpdateAdmChannelResponse
);
