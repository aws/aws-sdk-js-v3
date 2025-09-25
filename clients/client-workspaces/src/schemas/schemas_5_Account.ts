// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _AALI,
  _AALIR,
  _AALIRc,
  _AL,
  _ALc,
  _ALI,
  _ALL,
  _ALS,
  _c,
  _CALI,
  _CALIR,
  _CALIRr,
  _CE,
  _CT,
  _DALI,
  _DALIR,
  _DALIRe,
  _e,
  _GAL,
  _GALR,
  _GALRe,
  _ISE,
  _LAI,
  _LAL,
  _LALR,
  _LALRi,
  _LI,
  _LSF,
  _m,
  _MR,
  _NT,
  _RALI,
  _RALIR,
  _RALIRe,
  _SAI,
  _TAI,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptAccountLinkInvitationRequest = struct(n0, _AALIR, 0, [_LI, _CT], [0, 0]);
export var AcceptAccountLinkInvitationResult = struct(n0, _AALIRc, 0, [_AL], [() => AccountLink]);
export var AccountLink = struct(n0, _AL, 0, [_ALI, _ALS, _SAI, _TAI], [0, 0, 0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateAccountLinkInvitationRequest = struct(n0, _CALIR, 0, [_TAI, _CT], [0, 0]);
export var CreateAccountLinkInvitationResult = struct(n0, _CALIRr, 0, [_AL], [() => AccountLink]);
export var DeleteAccountLinkInvitationRequest = struct(n0, _DALIR, 0, [_LI, _CT], [0, 0]);
export var DeleteAccountLinkInvitationResult = struct(n0, _DALIRe, 0, [_AL], [() => AccountLink]);
export var GetAccountLinkRequest = struct(n0, _GALR, 0, [_LI, _LAI], [0, 0]);
export var GetAccountLinkResult = struct(n0, _GALRe, 0, [_AL], [() => AccountLink]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListAccountLinksRequest = struct(n0, _LALR, 0, [_LSF, _NT, _MR], [64 | 0, 0, 1]);
export var ListAccountLinksResult = struct(n0, _LALRi, 0, [_ALc, _NT], [() => AccountLinkList, 0]);
export var RejectAccountLinkInvitationRequest = struct(n0, _RALIR, 0, [_LI, _CT], [0, 0]);
export var RejectAccountLinkInvitationResult = struct(n0, _RALIRe, 0, [_AL], [() => AccountLink]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ValidationException
);
export var AccountLinkList = list(n0, _ALL, 0, () => AccountLink);
export var LinkStatusFilterList = 64 | 0;

export var AcceptAccountLinkInvitation = op(
  n0,
  _AALI,
  0,
  () => AcceptAccountLinkInvitationRequest,
  () => AcceptAccountLinkInvitationResult
);
export var CreateAccountLinkInvitation = op(
  n0,
  _CALI,
  0,
  () => CreateAccountLinkInvitationRequest,
  () => CreateAccountLinkInvitationResult
);
export var DeleteAccountLinkInvitation = op(
  n0,
  _DALI,
  0,
  () => DeleteAccountLinkInvitationRequest,
  () => DeleteAccountLinkInvitationResult
);
export var GetAccountLink = op(
  n0,
  _GAL,
  0,
  () => GetAccountLinkRequest,
  () => GetAccountLinkResult
);
export var ListAccountLinks = op(
  n0,
  _LAL,
  0,
  () => ListAccountLinksRequest,
  () => ListAccountLinksResult
);
export var RejectAccountLinkInvitation = op(
  n0,
  _RALI,
  0,
  () => RejectAccountLinkInvitationRequest,
  () => RejectAccountLinkInvitationResult
);
