// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EmailAddressInUseException as __EmailAddressInUseException,
  EntityAlreadyRegisteredException as __EntityAlreadyRegisteredException,
  MailDomainNotFoundException as __MailDomainNotFoundException,
  MailDomainStateException as __MailDomainStateException,
} from "../models/index";
import {
  _c,
  _DN,
  _DR,
  _DRn,
  _DVS,
  _e,
  _EAIUE,
  _EARE,
  _EI,
  _Em,
  _GMDe,
  _GMDRet,
  _GMDReta,
  _H,
  _ID,
  _ITD,
  _M,
  _MDNFE,
  _MDSE,
  _OI,
  _OVS,
  _Re,
  _RTWM,
  _RTWMR,
  _RTWMRe,
  _Ty,
  _UDMD,
  _UDMDR,
  _UDMDRp,
  _UPEA,
  _UPEAR,
  _UPEARp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DnsRecord = struct(n0, _DR, 0, [_Ty, _H, _V], [0, 0, 0]);
export var EmailAddressInUseException = error(
  n0,
  _EAIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __EmailAddressInUseException
);
export var EntityAlreadyRegisteredException = error(
  n0,
  _EARE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __EntityAlreadyRegisteredException
);
export var GetMailDomainRequest = struct(n0, _GMDRet, 0, [_OI, _DN], [0, 0]);
export var GetMailDomainResponse = struct(
  n0,
  _GMDReta,
  0,
  [_Re, _ITD, _ID, _OVS, _DVS],
  [() => DnsRecords, 2, 2, 0, 0]
);
export var MailDomainNotFoundException = error(
  n0,
  _MDNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MailDomainNotFoundException
);
export var MailDomainStateException = error(
  n0,
  _MDSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MailDomainStateException
);
export var RegisterToWorkMailRequest = struct(n0, _RTWMR, 0, [_OI, _EI, _Em], [0, 0, 0]);
export var RegisterToWorkMailResponse = struct(n0, _RTWMRe, 0, [], []);
export var UpdateDefaultMailDomainRequest = struct(n0, _UDMDR, 0, [_OI, _DN], [0, 0]);
export var UpdateDefaultMailDomainResponse = struct(n0, _UDMDRp, 0, [], []);
export var UpdatePrimaryEmailAddressRequest = struct(n0, _UPEAR, 0, [_OI, _EI, _Em], [0, 0, 0]);
export var UpdatePrimaryEmailAddressResponse = struct(n0, _UPEARp, 0, [], []);
export var DnsRecords = list(n0, _DRn, 0, () => DnsRecord);
export var GetMailDomain = op(
  n0,
  _GMDe,
  2,
  () => GetMailDomainRequest,
  () => GetMailDomainResponse
);
export var RegisterToWorkMail = op(
  n0,
  _RTWM,
  2,
  () => RegisterToWorkMailRequest,
  () => RegisterToWorkMailResponse
);
export var UpdateDefaultMailDomain = op(
  n0,
  _UDMD,
  2,
  () => UpdateDefaultMailDomainRequest,
  () => UpdateDefaultMailDomainResponse
);
export var UpdatePrimaryEmailAddress = op(
  n0,
  _UPEA,
  2,
  () => UpdatePrimaryEmailAddressRequest,
  () => UpdatePrimaryEmailAddressResponse
);
