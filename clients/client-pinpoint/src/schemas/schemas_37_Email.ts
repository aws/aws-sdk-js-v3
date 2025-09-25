// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CD,
  _CSo,
  _DEC,
  _DECR,
  _DECRe,
  _ECR,
  _ECRm,
  _En,
  _FA,
  _GEC,
  _GECR,
  _GECRe,
  _h,
  _HC,
  _IA,
  _Id,
  _Ide,
  _LMB,
  _LMD,
  _MPS,
  _OSRA,
  _P,
  _RA,
  _UEC,
  _UECR,
  _UECRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEmailChannelRequest = struct(n0, _DECR, 0, [_AI], [[0, 1]]);
export var DeleteEmailChannelResponse = struct(n0, _DECRe, 0, [_ECR], [[() => EmailChannelResponse, 16]]);
export var EmailChannelRequest = struct(n0, _ECRm, 0, [_CSo, _En, _FA, _Ide, _RA, _OSRA], [0, 2, 0, 0, 0, 0]);
export var EmailChannelResponse = struct(
  n0,
  _ECR,
  0,
  [_AI, _CSo, _CD, _En, _FA, _HC, _Id, _Ide, _IA, _LMB, _LMD, _MPS, _P, _RA, _OSRA, _V],
  [0, 0, 0, 2, 0, 2, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1]
);
export var GetEmailChannelRequest = struct(n0, _GECR, 0, [_AI], [[0, 1]]);
export var GetEmailChannelResponse = struct(n0, _GECRe, 0, [_ECR], [[() => EmailChannelResponse, 16]]);
export var UpdateEmailChannelRequest = struct(
  n0,
  _UECR,
  0,
  [_AI, _ECRm],
  [
    [0, 1],
    [() => EmailChannelRequest, 16],
  ]
);
export var UpdateEmailChannelResponse = struct(n0, _UECRp, 0, [_ECR], [[() => EmailChannelResponse, 16]]);
export var DeleteEmailChannel = op(
  n0,
  _DEC,
  {
    [_h]: ["DELETE", "/v1/apps/{ApplicationId}/channels/email", 200],
  },
  () => DeleteEmailChannelRequest,
  () => DeleteEmailChannelResponse
);
export var GetEmailChannel = op(
  n0,
  _GEC,
  {
    [_h]: ["GET", "/v1/apps/{ApplicationId}/channels/email", 200],
  },
  () => GetEmailChannelRequest,
  () => GetEmailChannelResponse
);
export var UpdateEmailChannel = op(
  n0,
  _UEC,
  {
    [_h]: ["PUT", "/v1/apps/{ApplicationId}/channels/email", 200],
  },
  () => UpdateEmailChannelRequest,
  () => UpdateEmailChannelResponse
);
