// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _AC,
  _ACT,
  _AI,
  _APEU,
  _APEUR,
  _APEURc,
  _c,
  _CI,
  _DAC,
  _DACR,
  _e,
  _EA,
  _eT,
  _GAC,
  _GACR,
  _GACRe,
  _GCI,
  _GCIR,
  _GCIRe,
  _GPE,
  _GPER,
  _GPERe,
  _h,
  _hE,
  _hH,
  _m,
  _N,
  _O,
  _PE,
  _PEA,
  _PN,
  _RNFE,
  _S,
  _SPEU,
  _SPEUR,
  _SPEURt,
  _T,
  _xaE,
  n0,
  Unit,
} from "./schemas_0";
import { EmailAddress, Name, PhoneNumber, Title } from "./schemas_1_AlternateContact";
import { ContactInformation } from "./schemas_4_Information";

/* eslint no-var: 0 */

export var Otp = sim(n0, _O, 0, 8);
export var PrimaryEmailAddress = sim(n0, _PEA, 0, 8);
export var AcceptPrimaryEmailUpdateRequest = struct(
  n0,
  _APEUR,
  0,
  [_AI, _PE, _O],
  [0, [() => PrimaryEmailAddress, 0], [() => Otp, 0]]
);
export var AcceptPrimaryEmailUpdateResponse = struct(n0, _APEURc, 0, [_S], [0]);
export var AlternateContact = struct(
  n0,
  _AC,
  0,
  [_N, _T, _EA, _PN, _ACT],
  [[() => Name, 0], [() => Title, 0], [() => EmailAddress, 0], [() => PhoneNumber, 0], 0]
);
export var DeleteAlternateContactRequest = struct(n0, _DACR, 0, [_ACT, _AI], [0, 0]);
export var GetAlternateContactRequest = struct(n0, _GACR, 0, [_ACT, _AI], [0, 0]);
export var GetAlternateContactResponse = struct(n0, _GACRe, 0, [_AC], [[() => AlternateContact, 0]]);
export var GetContactInformationRequest = struct(n0, _GCIR, 0, [_AI], [0]);
export var GetContactInformationResponse = struct(n0, _GCIRe, 0, [_CI], [[() => ContactInformation, 0]]);
export var GetPrimaryEmailRequest = struct(n0, _GPER, 0, [_AI], [0]);
export var GetPrimaryEmailResponse = struct(n0, _GPERe, 0, [_PE], [[() => PrimaryEmailAddress, 0]]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _eT],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __ResourceNotFoundException
);
export var StartPrimaryEmailUpdateRequest = struct(n0, _SPEUR, 0, [_AI, _PE], [0, [() => PrimaryEmailAddress, 0]]);
export var StartPrimaryEmailUpdateResponse = struct(n0, _SPEURt, 0, [_S], [0]);
export var AcceptPrimaryEmailUpdate = op(
  n0,
  _APEU,
  {
    [_h]: ["POST", "/acceptPrimaryEmailUpdate", 200],
  },
  () => AcceptPrimaryEmailUpdateRequest,
  () => AcceptPrimaryEmailUpdateResponse
);
export var DeleteAlternateContact = op(
  n0,
  _DAC,
  {
    [_h]: ["POST", "/deleteAlternateContact", 200],
  },
  () => DeleteAlternateContactRequest,
  () => Unit
);
export var GetAlternateContact = op(
  n0,
  _GAC,
  {
    [_h]: ["POST", "/getAlternateContact", 200],
  },
  () => GetAlternateContactRequest,
  () => GetAlternateContactResponse
);
export var GetContactInformation = op(
  n0,
  _GCI,
  {
    [_h]: ["POST", "/getContactInformation", 200],
  },
  () => GetContactInformationRequest,
  () => GetContactInformationResponse
);
export var GetPrimaryEmail = op(
  n0,
  _GPE,
  {
    [_h]: ["POST", "/getPrimaryEmail", 200],
  },
  () => GetPrimaryEmailRequest,
  () => GetPrimaryEmailResponse
);
export var StartPrimaryEmailUpdate = op(
  n0,
  _SPEU,
  {
    [_h]: ["POST", "/startPrimaryEmailUpdate", 200],
  },
  () => StartPrimaryEmailUpdateRequest,
  () => StartPrimaryEmailUpdateResponse
);
