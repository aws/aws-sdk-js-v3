// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _AC,
  _AE,
  _AED,
  _c,
  _CEo,
  _CFI,
  _CI,
  _Cod,
  _CP,
  _CPR,
  _CPRr,
  _CT,
  _DN,
  _e,
  _ED,
  _Err,
  _Ex,
  _h,
  _hE,
  _II,
  _M,
  _PC,
  _PCa,
  _PCau,
  _PCR,
  _PCRa,
  _PD,
  _PDTA,
  _PI,
  _PR,
  _PTa,
  _PTCa,
  _RCes,
  _RCR,
  _RCRe,
  _S,
  _UPA,
  _UPAR,
  _UPARp,
  n0,
} from "./schemas_0";
import { ParticipantCapabilities } from "./schemas_105_Contact";

/* eslint no-var: 0 */

export var AuthenticationError = sim(n0, _AE, 0, 8);
export var AuthenticationErrorDescription = sim(n0, _AED, 0, 8);
export var AuthorizationCode = sim(n0, _AC, 0, 8);
export var ConflictException = error(
  n0,
  _CEo,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateParticipantRequest = struct(
  n0,
  _CPR,
  0,
  [_II, _CI, _CT, _PD],
  [0, 0, [0, 4], () => ParticipantDetailsToAdd]
);
export var CreateParticipantResponse = struct(n0, _CPRr, 0, [_PC, _PI], [() => ParticipantTokenCredentials, 0]);
export var ParticipantDetailsToAdd = struct(n0, _PDTA, 0, [_PR, _DN, _PCa], [0, 0, () => ParticipantCapabilities]);
export var ParticipantTokenCredentials = struct(n0, _PTCa, 0, [_PTa, _Ex], [0, 0]);
export var PauseContactRequest = struct(n0, _PCR, 0, [_CI, _II, _CFI], [0, 0, 0]);
export var PauseContactResponse = struct(n0, _PCRa, 0, [], []);
export var ResumeContactRequest = struct(n0, _RCR, 0, [_CI, _II, _CFI], [0, 0, 0]);
export var ResumeContactResponse = struct(n0, _RCRe, 0, [], []);
export var UpdateParticipantAuthenticationRequest = struct(
  n0,
  _UPAR,
  0,
  [_S, _II, _Cod, _Err, _ED],
  [0, 0, [() => AuthorizationCode, 0], [() => AuthenticationError, 0], [() => AuthenticationErrorDescription, 0]]
);
export var UpdateParticipantAuthenticationResponse = struct(n0, _UPARp, 0, [], []);
export var CreateParticipant = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/contact/create-participant", 200],
  },
  () => CreateParticipantRequest,
  () => CreateParticipantResponse
);
export var PauseContact = op(
  n0,
  _PCau,
  {
    [_h]: ["POST", "/contact/pause", 200],
  },
  () => PauseContactRequest,
  () => PauseContactResponse
);
export var ResumeContact = op(
  n0,
  _RCes,
  {
    [_h]: ["POST", "/contact/resume", 200],
  },
  () => ResumeContactRequest,
  () => ResumeContactResponse
);
export var UpdateParticipantAuthentication = op(
  n0,
  _UPA,
  {
    [_h]: ["POST", "/contact/update-participant-authentication", 200],
  },
  () => UpdateParticipantAuthenticationRequest,
  () => UpdateParticipantAuthenticationResponse
);
