// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARd,
  _B,
  _CAu,
  _CEA,
  _CI,
  _CIa,
  _CPA,
  _CT,
  _CTo,
  _DEA,
  _DN,
  _EA,
  _EADN,
  _EAIm,
  _EARL,
  _EMm,
  _FEA,
  _h,
  _II,
  _KBI,
  _MST,
  _MTI,
  _OAR,
  _OECu,
  _ORIu,
  _ORM,
  _OS,
  _RM,
  _SCou,
  _SOE,
  _SOEC,
  _SOECR,
  _SOECRt,
  _SOER,
  _SOERe,
  _Su,
  _TAe,
  _TMC,
  _TTr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Body = sim(n0, _B, 0, 8);
export var EmailAddress = sim(n0, _EA, 0, 8);
export var EmailAddressDisplayName = sim(n0, _EADN, 0, 8);
export var OutboundSubject = sim(n0, _OS, 0, 8);
export var EmailAddressInfo = struct(
  n0,
  _EAIm,
  0,
  [_EA, _DN],
  [
    [() => EmailAddress, 0],
    [() => EmailAddressDisplayName, 0],
  ]
);
export var OutboundAdditionalRecipients = struct(n0, _OAR, 0, [_CEA], [[() => EmailAddressRecipientList, 0]]);
export var OutboundEmailContent = struct(
  n0,
  _OECu,
  0,
  [_MST, _TMC, _RM],
  [0, () => TemplatedMessageConfig, [() => OutboundRawMessage, 0]]
);
export var OutboundRawMessage = struct(n0, _ORM, 0, [_Su, _B, _CTo], [[() => OutboundSubject, 0], [() => Body, 0], 0]);
export var SendOutboundEmailRequest = struct(
  n0,
  _SOER,
  0,
  [_II, _FEA, _DEA, _ARd, _EMm, _TTr, _SCou, _CT],
  [
    [0, 1],
    [() => EmailAddressInfo, 0],
    [() => EmailAddressInfo, 0],
    [() => OutboundAdditionalRecipients, 0],
    [() => OutboundEmailContent, 0],
    0,
    () => SourceCampaign,
    [0, 4],
  ]
);
export var SendOutboundEmailResponse = struct(n0, _SOERe, 0, [], []);
export var SourceCampaign = struct(n0, _SCou, 0, [_CIa, _ORIu], [0, 0]);
export var StartOutboundEmailContactRequest = struct(
  n0,
  _SOECR,
  0,
  [_II, _CI, _FEA, _DEA, _ARd, _EMm, _CT],
  [
    0,
    0,
    [() => EmailAddressInfo, 0],
    [() => EmailAddressInfo, 0],
    [() => OutboundAdditionalRecipients, 0],
    [() => OutboundEmailContent, 0],
    [0, 4],
  ]
);
export var StartOutboundEmailContactResponse = struct(n0, _SOECRt, 0, [_CI], [0]);
export var TemplateAttributes = struct(n0, _TAe, 0, [_CAu, _CPA], [128 | 0, 0]);
export var TemplatedMessageConfig = struct(n0, _TMC, 0, [_KBI, _MTI, _TAe], [0, 0, () => TemplateAttributes]);
export var EmailAddressRecipientList = list(n0, _EARL, 0, [() => EmailAddressInfo, 0]);
export var SendOutboundEmail = op(
  n0,
  _SOE,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/outbound-email", 200],
  },
  () => SendOutboundEmailRequest,
  () => SendOutboundEmailResponse
);
export var StartOutboundEmailContact = op(
  n0,
  _SOEC,
  {
    [_h]: ["PUT", "/contact/outbound-email", 200],
  },
  () => StartOutboundEmailContactRequest,
  () => StartOutboundEmailContactResponse
);
