// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _ADM,
  _APNS,
  _APNSPNT,
  _APNT,
  _B,
  _Bai,
  _CNV,
  _cnv,
  _Defa,
  _DPNT,
  _DSe,
  _GCM,
  _h,
  _hQ,
  _IIU,
  _IU,
  _jN,
  _MB,
  _MU,
  _PNTR,
  _RC,
  _RI,
  _SIIU,
  _So,
  _T,
  _t,
  _TDe,
  _TNe,
  _U,
  _UPT,
  _UPTR,
  _UPTRp,
  _V,
  _v,
  MessageBody,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AndroidPushNotificationTemplate = struct(
  n0,
  _APNT,
  0,
  [_Ac, _B, _IIU, _IU, _RC, _SIIU, _So, _T, _U],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var APNSPushNotificationTemplate = struct(
  n0,
  _APNSPNT,
  0,
  [_Ac, _B, _MU, _RC, _So, _T, _U],
  [0, 0, 0, 0, 0, 0, 0]
);
export var DefaultPushNotificationTemplate = struct(n0, _DPNT, 0, [_Ac, _B, _So, _T, _U], [0, 0, 0, 0, 0]);
export var PushNotificationTemplateRequest = struct(
  n0,
  _PNTR,
  0,
  [_ADM, _APNS, _Bai, _Defa, _DSe, _GCM, _RI, _t, _TDe],
  [
    () => AndroidPushNotificationTemplate,
    () => APNSPushNotificationTemplate,
    () => AndroidPushNotificationTemplate,
    () => DefaultPushNotificationTemplate,
    0,
    () => AndroidPushNotificationTemplate,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    0,
  ]
);
export var UpdatePushTemplateRequest = struct(
  n0,
  _UPTR,
  0,
  [_CNV, _PNTR, _TNe, _V],
  [
    [
      2,
      {
        [_hQ]: _cnv,
      },
    ],
    [() => PushNotificationTemplateRequest, 16],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var UpdatePushTemplateResponse = struct(n0, _UPTRp, 0, [_MB], [[() => MessageBody, 16]]);
export var UpdatePushTemplate = op(
  n0,
  _UPT,
  {
    [_h]: ["PUT", "/v1/templates/{TemplateName}/push", 202],
  },
  () => UpdatePushTemplateRequest,
  () => UpdatePushTemplateResponse
);
