// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _B,
  _C,
  _CA,
  _CB,
  _CFC,
  _CFCR,
  _CFCRh,
  _CIa,
  _CM,
  _CMC,
  _CMSS,
  _CRT,
  _CT,
  _D,
  _DCMe,
  _DCMRe,
  _DR,
  _GCMS,
  _GCMSR,
  _GCMSRe,
  _h,
  _hH,
  _hQ,
  _M,
  _MA,
  _MAes,
  _MAM,
  _MAN,
  _MASV,
  _MASVe,
  _MAV,
  _MI,
  _NEC,
  _Pe,
  _PNB,
  _PNC,
  _PNT,
  _PNu,
  _RCM,
  _RCMR,
  _RCMRe,
  _SCI,
  _sci,
  _SCM,
  _SCMR,
  _SCMRe,
  _St,
  _SV,
  _T,
  _Ta,
  _Ti,
  _TLa,
  _UCM,
  _UCMR,
  _UCMRp,
  _V,
  _xacb,
  Metadata,
  n0,
  Unit,
} from "./schemas_0";
import { ClientRequestToken } from "./schemas_19_Channel";

/* eslint no-var: 0 */

export var Content = sim(n0, _C, 0, 8);
export var ContentType = sim(n0, _CT, 0, 8);
export var MessageAttributeName = sim(n0, _MAN, 0, 8);
export var MessageAttributeStringValue = sim(n0, _MASV, 0, 8);
export var NonEmptyContent = sim(n0, _NEC, 0, 8);
export var PushNotificationBody = sim(n0, _PNB, 0, 8);
export var PushNotificationTitle = sim(n0, _PNT, 0, 8);
export var ChannelFlowCallbackRequest = struct(
  n0,
  _CFCR,
  0,
  [_CIa, _CA, _DR, _CM],
  [[0, 4], [0, 1], 2, [() => ChannelMessageCallback, 0]]
);
export var ChannelFlowCallbackResponse = struct(n0, _CFCRh, 0, [_CA, _CIa], [0, 0]);
export var ChannelMessageCallback = struct(
  n0,
  _CMC,
  0,
  [_MI, _C, _M, _PNu, _MAes, _SCI, _CT],
  [
    0,
    [() => NonEmptyContent, 0],
    [() => Metadata, 0],
    [() => PushNotificationConfiguration, 0],
    [() => MessageAttributeMap, 0],
    0,
    [() => ContentType, 0],
  ]
);
export var ChannelMessageStatusStructure = struct(n0, _CMSS, 0, [_V, _D], [0, 0]);
export var DeleteChannelMessageRequest = struct(
  n0,
  _DCMRe,
  0,
  [_CA, _MI, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      0,
      {
        [_hQ]: _sci,
      },
    ],
  ]
);
export var GetChannelMessageStatusRequest = struct(
  n0,
  _GCMSR,
  0,
  [_CA, _MI, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      0,
      {
        [_hQ]: _sci,
      },
    ],
  ]
);
export var GetChannelMessageStatusResponse = struct(n0, _GCMSRe, 0, [_St], [() => ChannelMessageStatusStructure]);
export var MessageAttributeValue = struct(n0, _MAV, 0, [_SV], [[() => MessageAttributeStringValues, 0]]);
export var PushNotificationConfiguration = struct(
  n0,
  _PNC,
  0,
  [_Ti, _B, _T],
  [[() => PushNotificationTitle, 0], [() => PushNotificationBody, 0], 0]
);
export var RedactChannelMessageRequest = struct(
  n0,
  _RCMR,
  0,
  [_CA, _MI, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    0,
  ]
);
export var RedactChannelMessageResponse = struct(n0, _RCMRe, 0, [_CA, _MI, _SCI], [0, 0, 0]);
export var SendChannelMessageRequest = struct(
  n0,
  _SCMR,
  0,
  [_CA, _C, _T, _Pe, _M, _CRT, _CB, _PNu, _MAes, _SCI, _CT, _Ta],
  [
    [0, 1],
    [() => NonEmptyContent, 0],
    0,
    0,
    [() => Metadata, 0],
    [() => ClientRequestToken, 4],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [() => PushNotificationConfiguration, 0],
    [() => MessageAttributeMap, 0],
    0,
    [() => ContentType, 0],
    () => TargetList,
  ]
);
export var SendChannelMessageResponse = struct(
  n0,
  _SCMRe,
  0,
  [_CA, _MI, _St, _SCI],
  [0, 0, () => ChannelMessageStatusStructure, 0]
);
export var Target = struct(n0, _Ta, 0, [_MA], [0]);
export var UpdateChannelMessageRequest = struct(
  n0,
  _UCMR,
  0,
  [_CA, _MI, _C, _M, _CB, _SCI, _CT],
  [
    [0, 1],
    [0, 1],
    [() => NonEmptyContent, 0],
    [() => Metadata, 0],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    0,
    [() => ContentType, 0],
  ]
);
export var UpdateChannelMessageResponse = struct(
  n0,
  _UCMRp,
  0,
  [_CA, _MI, _St, _SCI],
  [0, 0, () => ChannelMessageStatusStructure, 0]
);
export var MessageAttributeStringValues = list(n0, _MASVe, 0, [() => MessageAttributeStringValue, 0]);
export var TargetList = list(n0, _TLa, 0, () => Target);
export var MessageAttributeMap = map(n0, _MAM, 0, [() => MessageAttributeName, 0], [() => MessageAttributeValue, 0]);
export var ChannelFlowCallback = op(
  n0,
  _CFC,
  {
    [_h]: ["POST", "/channels/{ChannelArn}?operation=channel-flow-callback", 200],
  },
  () => ChannelFlowCallbackRequest,
  () => ChannelFlowCallbackResponse
);
export var DeleteChannelMessage = op(
  n0,
  _DCMe,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}/messages/{MessageId}", 204],
  },
  () => DeleteChannelMessageRequest,
  () => Unit
);
export var GetChannelMessageStatus = op(
  n0,
  _GCMS,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/messages/{MessageId}?scope=message-status", 200],
  },
  () => GetChannelMessageStatusRequest,
  () => GetChannelMessageStatusResponse
);
export var RedactChannelMessage = op(
  n0,
  _RCM,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/messages/{MessageId}?operation=redact", 200],
  },
  () => RedactChannelMessageRequest,
  () => RedactChannelMessageResponse
);
export var SendChannelMessage = op(
  n0,
  _SCM,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/messages", 201],
  },
  () => SendChannelMessageRequest,
  () => SendChannelMessageResponse
);
export var UpdateChannelMessage = op(
  n0,
  _UCM,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}/messages/{MessageId}", 200],
  },
  () => UpdateChannelMessageRequest,
  () => UpdateChannelMessageResponse
);
