// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccountSendingPausedException as __AccountSendingPausedException,
  ConfigurationSetSendingPausedException as __ConfigurationSetSendingPausedException,
  MailFromDomainNotVerifiedException as __MailFromDomainNotVerifiedException,
  MessageRejected as __MessageRejected,
  ProductionAccessNotGrantedException as __ProductionAccessNotGrantedException,
} from "../models/index";
import {
  _Act,
  _AD,
  _aQE,
  _ASPE,
  _B,
  _BAc,
  _BED,
  _BEDL,
  _BEDS,
  _BEDSL,
  _BRI,
  _BRIL,
  _BS,
  _BSA,
  _BT,
  _C,
  _c,
  _CAc,
  _Ch,
  _CSN,
  _CSSPE,
  _D,
  _Da,
  _DCi,
  _De,
  _DTD,
  _DTef,
  _E,
  _e,
  _EA,
  _EF,
  _EFL,
  _EFx,
  _Ex,
  _FAr,
  _FR,
  _H,
  _hE,
  _LAD,
  _M,
  _m,
  _MD,
  _MFDNVE,
  _MI,
  _MRe,
  _MT,
  _MTL,
  _N,
  _OMI,
  _PANGE,
  _R,
  _RA,
  _RDF,
  _RM,
  _RMa,
  _RMe,
  _RP,
  _RPA,
  _RT,
  _RTA,
  _RTD,
  _SAo,
  _SB,
  _SBR,
  _SBRe,
  _SBTE,
  _SBTER,
  _SBTERe,
  _SCVE,
  _SCVER,
  _SCVERe,
  _SEen,
  _SER,
  _SERe,
  _So,
  _SRE,
  _SRER,
  _SRERe,
  _St,
  _STE,
  _STER,
  _STERe,
  _Su,
  _T,
  _Ta,
  _TAe,
  _TAo,
  _TD,
  _Te,
  _TN,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSendingPausedException = error(
  n0,
  _ASPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AccountSendingPausedException`, 400],
  },
  [_m],
  [0],

  __AccountSendingPausedException
);
export var Body = struct(n0, _B, 0, [_T, _H], [() => Content, () => Content]);
export var BouncedRecipientInfo = struct(n0, _BRI, 0, [_R, _RA, _BT, _RDF], [0, 0, 0, () => RecipientDsnFields]);
export var BulkEmailDestination = struct(n0, _BED, 0, [_D, _RT, _RTD], [() => Destination, () => MessageTagList, 0]);
export var BulkEmailDestinationStatus = struct(n0, _BEDS, 0, [_St, _E, _MI], [0, 0, 0]);
export var ConfigurationSetSendingPausedException = error(
  n0,
  _CSSPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConfigurationSetSendingPausedException`, 400],
  },
  [_CSN, _m],
  [0, 0],

  __ConfigurationSetSendingPausedException
);
export var Content = struct(n0, _C, 0, [_Da, _Ch], [0, 0]);
export var Destination = struct(n0, _D, 0, [_TAo, _CAc, _BAc], [64 | 0, 64 | 0, 64 | 0]);
export var ExtensionField = struct(n0, _EF, 0, [_N, _V], [0, 0]);
export var MailFromDomainNotVerifiedException = error(
  n0,
  _MFDNVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MailFromDomainNotVerifiedException`, 400],
  },
  [_m],
  [0],

  __MailFromDomainNotVerifiedException
);
export var Message = struct(n0, _M, 0, [_Su, _B], [() => Content, () => Body]);
export var MessageDsn = struct(n0, _MD, 0, [_RM, _AD, _EFx], [0, 4, () => ExtensionFieldList]);
export var MessageRejected = error(
  n0,
  _MRe,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MessageRejected`, 400],
  },
  [_m],
  [0],

  __MessageRejected
);
export var MessageTag = struct(n0, _MT, 0, [_N, _V], [0, 0]);
export var ProductionAccessNotGrantedException = error(
  n0,
  _PANGE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ProductionAccessNotGranted`, 400],
  },
  [_m],
  [0],

  __ProductionAccessNotGrantedException
);
export var RawMessage = struct(n0, _RMa, 0, [_Da], [21]);
export var RecipientDsnFields = struct(
  n0,
  _RDF,
  0,
  [_FR, _Act, _RMe, _St, _DCi, _LAD, _EFx],
  [0, 0, 0, 0, 0, 4, () => ExtensionFieldList]
);
export var SendBounceRequest = struct(
  n0,
  _SBR,
  0,
  [_OMI, _BS, _Ex, _MD, _BRIL, _BSA],
  [0, 0, 0, () => MessageDsn, () => BouncedRecipientInfoList, 0]
);
export var SendBounceResponse = struct(n0, _SBRe, 0, [_MI], [0]);
export var SendBulkTemplatedEmailRequest = struct(
  n0,
  _SBTER,
  0,
  [_So, _SAo, _RTA, _RP, _RPA, _CSN, _DTef, _Te, _TAe, _DTD, _De],
  [0, 0, 64 | 0, 0, 0, 0, () => MessageTagList, 0, 0, 0, () => BulkEmailDestinationList]
);
export var SendBulkTemplatedEmailResponse = struct(n0, _SBTERe, 0, [_St], [() => BulkEmailDestinationStatusList]);
export var SendCustomVerificationEmailRequest = struct(n0, _SCVER, 0, [_EA, _TN, _CSN], [0, 0, 0]);
export var SendCustomVerificationEmailResponse = struct(n0, _SCVERe, 0, [_MI], [0]);
export var SendEmailRequest = struct(
  n0,
  _SER,
  0,
  [_So, _D, _M, _RTA, _RP, _SAo, _RPA, _Ta, _CSN],
  [0, () => Destination, () => Message, 64 | 0, 0, 0, 0, () => MessageTagList, 0]
);
export var SendEmailResponse = struct(n0, _SERe, 0, [_MI], [0]);
export var SendRawEmailRequest = struct(
  n0,
  _SRER,
  0,
  [_So, _De, _RMa, _FAr, _SAo, _RPA, _Ta, _CSN],
  [0, 64 | 0, () => RawMessage, 0, 0, 0, () => MessageTagList, 0]
);
export var SendRawEmailResponse = struct(n0, _SRERe, 0, [_MI], [0]);
export var SendTemplatedEmailRequest = struct(
  n0,
  _STER,
  0,
  [_So, _D, _RTA, _RP, _SAo, _RPA, _Ta, _CSN, _Te, _TAe, _TD],
  [0, () => Destination, 64 | 0, 0, 0, 0, () => MessageTagList, 0, 0, 0, 0]
);
export var SendTemplatedEmailResponse = struct(n0, _STERe, 0, [_MI], [0]);
export var BouncedRecipientInfoList = list(n0, _BRIL, 0, () => BouncedRecipientInfo);
export var BulkEmailDestinationList = list(n0, _BEDL, 0, () => BulkEmailDestination);
export var BulkEmailDestinationStatusList = list(n0, _BEDSL, 0, () => BulkEmailDestinationStatus);
export var ExtensionFieldList = list(n0, _EFL, 0, () => ExtensionField);
export var MessageTagList = list(n0, _MTL, 0, () => MessageTag);
export var SendBounce = op(
  n0,
  _SB,
  0,
  () => SendBounceRequest,
  () => SendBounceResponse
);
export var SendBulkTemplatedEmail = op(
  n0,
  _SBTE,
  0,
  () => SendBulkTemplatedEmailRequest,
  () => SendBulkTemplatedEmailResponse
);
export var SendCustomVerificationEmail = op(
  n0,
  _SCVE,
  0,
  () => SendCustomVerificationEmailRequest,
  () => SendCustomVerificationEmailResponse
);
export var SendEmail = op(
  n0,
  _SEen,
  0,
  () => SendEmailRequest,
  () => SendEmailResponse
);
export var SendRawEmail = op(
  n0,
  _SRE,
  0,
  () => SendRawEmailRequest,
  () => SendRawEmailResponse
);
export var SendTemplatedEmail = op(
  n0,
  _STE,
  0,
  () => SendTemplatedEmailRequest,
  () => SendTemplatedEmailResponse
);
