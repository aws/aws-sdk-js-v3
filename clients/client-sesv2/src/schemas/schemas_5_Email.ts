// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Bo,
  _BST,
  _BT,
  _C,
  _CFT,
  _CSN,
  _CST,
  _DC,
  _Des,
  _Det,
  _EA,
  _EDve,
  _EIL,
  _EIm,
  _ET,
  _Ev,
  _FEA,
  _GMI,
  _GMIR,
  _GMIRe,
  _h,
  _IE,
  _IEn,
  _In,
  _Is,
  _MI,
  _MTe,
  _MTL,
  _Na,
  _SCVE,
  _SCVER,
  _SCVERe,
  _Su,
  _Ti,
  _TN,
  _Ty,
  _V,
  n0,
} from "./schemas_0";
import { EmailSubject, InsightsEmailAddress } from "./schemas_37_ExportJob";

/* eslint no-var: 0 */

export var Bounce = struct(n0, _Bo, 0, [_BT, _BST, _DC], [0, 0, 0]);
export var Complaint = struct(n0, _C, 0, [_CST, _CFT], [0, 0]);
export var EmailInsights = struct(
  n0,
  _EIm,
  0,
  [_Des, _Is, _Ev],
  [[() => InsightsEmailAddress, 0], 0, () => InsightsEvents]
);
export var EventDetails = struct(n0, _EDve, 0, [_Bo, _C], [() => Bounce, () => Complaint]);
export var GetMessageInsightsRequest = struct(n0, _GMIR, 0, [_MI], [[0, 1]]);
export var GetMessageInsightsResponse = struct(
  n0,
  _GMIRe,
  0,
  [_MI, _FEA, _Su, _ET, _In],
  [0, [() => InsightsEmailAddress, 0], [() => EmailSubject, 0], () => MessageTagList, [() => EmailInsightsList, 0]]
);
export var InsightsEvent = struct(n0, _IE, 0, [_Ti, _Ty, _Det], [4, 0, () => EventDetails]);
export var MessageTag = struct(n0, _MTe, 0, [_Na, _V], [0, 0]);
export var SendCustomVerificationEmailRequest = struct(n0, _SCVER, 0, [_EA, _TN, _CSN], [0, 0, 0]);
export var SendCustomVerificationEmailResponse = struct(n0, _SCVERe, 0, [_MI], [0]);
export var EmailInsightsList = list(n0, _EIL, 0, [() => EmailInsights, 0]);
export var InsightsEvents = list(n0, _IEn, 0, () => InsightsEvent);
export var MessageTagList = list(n0, _MTL, 0, () => MessageTag);
export var GetMessageInsights = op(
  n0,
  _GMI,
  {
    [_h]: ["GET", "/v2/email/insights/{MessageId}", 200],
  },
  () => GetMessageInsightsRequest,
  () => GetMessageInsightsResponse
);
export var SendCustomVerificationEmail = op(
  n0,
  _SCVE,
  {
    [_h]: ["POST", "/v2/email/outbound-custom-verification-emails", 200],
  },
  () => SendCustomVerificationEmailRequest,
  () => SendCustomVerificationEmailResponse
);
