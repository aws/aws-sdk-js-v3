// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CD,
  _DVC,
  _DVCR,
  _DVCRe,
  _En,
  _GVC,
  _GVCR,
  _GVCRe,
  _h,
  _HC,
  _IA,
  _Id,
  _LMB,
  _LMD,
  _P,
  _UVC,
  _UVCR,
  _UVCRp,
  _V,
  _VCR,
  _VCRo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceChannelRequest = struct(n0, _DVCR, 0, [_AI], [[0, 1]]);
export var DeleteVoiceChannelResponse = struct(n0, _DVCRe, 0, [_VCR], [[() => VoiceChannelResponse, 16]]);
export var GetVoiceChannelRequest = struct(n0, _GVCR, 0, [_AI], [[0, 1]]);
export var GetVoiceChannelResponse = struct(n0, _GVCRe, 0, [_VCR], [[() => VoiceChannelResponse, 16]]);
export var UpdateVoiceChannelRequest = struct(
  n0,
  _UVCR,
  0,
  [_AI, _VCRo],
  [
    [0, 1],
    [() => VoiceChannelRequest, 16],
  ]
);
export var UpdateVoiceChannelResponse = struct(n0, _UVCRp, 0, [_VCR], [[() => VoiceChannelResponse, 16]]);
export var VoiceChannelRequest = struct(n0, _VCRo, 0, [_En], [2]);
export var VoiceChannelResponse = struct(
  n0,
  _VCR,
  0,
  [_AI, _CD, _En, _HC, _Id, _IA, _LMB, _LMD, _P, _V],
  [0, 0, 2, 2, 0, 2, 0, 0, 0, 1]
);
export var DeleteVoiceChannel = op(
  n0,
  _DVC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/voice", 200],
  },
  () => DeleteVoiceChannelRequest,
  () => DeleteVoiceChannelResponse
);
export var GetVoiceChannel = op(
  n0,
  _GVC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/voice", 200],
  },
  () => GetVoiceChannelRequest,
  () => GetVoiceChannelResponse
);
export var UpdateVoiceChannel = op(
  n0,
  _UVC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/voice", 200],
  },
  () => UpdateVoiceChannelRequest,
  () => UpdateVoiceChannelResponse
);
