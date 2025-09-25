// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccountSuspendedException as __AccountSuspendedException,
  AlreadyExistsException as __AlreadyExistsException,
  LimitExceededException as __LimitExceededException,
  MailFromDomainNotVerifiedException as __MailFromDomainNotVerifiedException,
  MessageRejected as __MessageRejected,
  SendingPausedException as __SendingPausedException,
} from "../models/index";
import {
  _AEE,
  _ASE,
  _B,
  _BA,
  _C,
  _c,
  _CA,
  _CCSED,
  _CCSEDR,
  _CCSEDRr,
  _Ch,
  _CSN,
  _Da,
  _De,
  _e,
  _EC,
  _ED,
  _EDN,
  _ET,
  _FEA,
  _FFEA,
  _H,
  _h,
  _hE,
  _LEE,
  _M,
  _m,
  _MFDNVE,
  _MI,
  _MR,
  _MT,
  _MTL,
  _N,
  _R,
  _RM,
  _RTA,
  _S,
  _SEen,
  _SER,
  _SERe,
  _Si,
  _SPE,
  _T,
  _TA,
  _TAe,
  _TD,
  _Te,
  _V,
  n0,
} from "./schemas_0";
import { EventDestinationDefinition } from "./schemas_12_ConfigurationSet";

/* eslint no-var: 0 */

export var AccountSuspendedException = error(
  n0,
  _ASE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __AccountSuspendedException
);
export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __AlreadyExistsException
);
export var Body = struct(n0, _B, 0, [_T, _H], [() => Content, () => Content]);
export var Content = struct(n0, _C, 0, [_Da, _Ch], [0, 0]);
export var CreateConfigurationSetEventDestinationRequest = struct(
  n0,
  _CCSEDR,
  0,
  [_CSN, _EDN, _ED],
  [[0, 1], 0, () => EventDestinationDefinition]
);
export var CreateConfigurationSetEventDestinationResponse = struct(n0, _CCSEDRr, 0, [], []);
export var Destination = struct(n0, _De, 0, [_TA, _CA, _BA], [64 | 0, 64 | 0, 64 | 0]);
export var EmailContent = struct(n0, _EC, 0, [_Si, _R, _Te], [() => Message, () => RawMessage, () => Template]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var MailFromDomainNotVerifiedException = error(
  n0,
  _MFDNVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MailFromDomainNotVerifiedException
);
export var Message = struct(n0, _M, 0, [_S, _B], [() => Content, () => Body]);
export var MessageRejected = error(
  n0,
  _MR,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MessageRejected
);
export var MessageTag = struct(n0, _MT, 0, [_N, _V], [0, 0]);
export var RawMessage = struct(n0, _RM, 0, [_Da], [21]);
export var SendEmailRequest = struct(
  n0,
  _SER,
  0,
  [_FEA, _De, _RTA, _FFEA, _C, _ET, _CSN],
  [0, () => Destination, 64 | 0, 0, () => EmailContent, () => MessageTagList, 0]
);
export var SendEmailResponse = struct(n0, _SERe, 0, [_MI], [0]);
export var SendingPausedException = error(
  n0,
  _SPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SendingPausedException
);
export var Template = struct(n0, _Te, 0, [_TAe, _TD], [0, 0]);
export var EmailAddressList = 64 | 0;

export var MessageTagList = list(n0, _MTL, 0, () => MessageTag);
export var CreateConfigurationSetEventDestination = op(
  n0,
  _CCSED,
  {
    [_h]: ["POST", "/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations", 200],
  },
  () => CreateConfigurationSetEventDestinationRequest,
  () => CreateConfigurationSetEventDestinationResponse
);
export var SendEmail = op(
  n0,
  _SEen,
  {
    [_h]: ["POST", "/v1/email/outbound-emails", 200],
  },
  () => SendEmailRequest,
  () => SendEmailResponse
);
