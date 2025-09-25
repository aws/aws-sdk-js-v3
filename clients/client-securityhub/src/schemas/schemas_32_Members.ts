// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _ADL,
  _Adm,
  _AI,
  _AIc,
  _AIcc,
  _CMR,
  _CMr,
  _CMRr,
  _DIec,
  _DIele,
  _DIR,
  _DIRe,
  _DIRelet,
  _DIRelete,
  _DMe,
  _DMR,
  _DMRe,
  _E,
  _GAA,
  _GAAR,
  _GAARe,
  _GM,
  _GMA,
  _GMAR,
  _GMARe,
  _GMR,
  _GMRe,
  _h,
  _hQ,
  _IAnv,
  _II,
  _ILnv,
  _IMn,
  _IMR,
  _IMRn,
  _Inv,
  _Invi,
  _LI,
  _LIR,
  _LIRi,
  _LMis,
  _LMR,
  _LMRi,
  _Mas,
  _Memb,
  _Membe,
  _MI,
  _MLe,
  _MRa,
  _MSemb,
  _NTe,
  _OAn,
  _PRr,
  _Resu,
  _RLes,
  _UA,
  _UAnp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountDetails = struct(n0, _AD, 0, [_AIc, _E], [0, 0]);
export var CreateMembersRequest = struct(n0, _CMR, 0, [_AD], [() => AccountDetailsList]);
export var CreateMembersResponse = struct(n0, _CMRr, 0, [_UAnp], [() => ResultList]);
export var DeclineInvitationsRequest = struct(n0, _DIR, 0, [_AIcc], [64 | 0]);
export var DeclineInvitationsResponse = struct(n0, _DIRe, 0, [_UAnp], [() => ResultList]);
export var DeleteInvitationsRequest = struct(n0, _DIRelet, 0, [_AIcc], [64 | 0]);
export var DeleteInvitationsResponse = struct(n0, _DIRelete, 0, [_UAnp], [() => ResultList]);
export var DeleteMembersRequest = struct(n0, _DMR, 0, [_AIcc], [64 | 0]);
export var DeleteMembersResponse = struct(n0, _DMRe, 0, [_UAnp], [() => ResultList]);
export var GetAdministratorAccountRequest = struct(n0, _GAAR, 0, [], []);
export var GetAdministratorAccountResponse = struct(n0, _GAARe, 0, [_Adm], [() => Invitation]);
export var GetMasterAccountRequest = struct(n0, _GMAR, 0, [], []);
export var GetMasterAccountResponse = struct(n0, _GMARe, 0, [_Mas], [() => Invitation]);
export var GetMembersRequest = struct(n0, _GMR, 0, [_AIcc], [64 | 0]);
export var GetMembersResponse = struct(n0, _GMRe, 0, [_Memb, _UAnp], [() => MemberList, () => ResultList]);
export var Invitation = struct(n0, _Inv, 0, [_AIc, _II, _IAnv, _MSemb], [0, 0, 5, 0]);
export var InviteMembersRequest = struct(n0, _IMR, 0, [_AIcc], [64 | 0]);
export var InviteMembersResponse = struct(n0, _IMRn, 0, [_UAnp], [() => ResultList]);
export var ListInvitationsRequest = struct(
  n0,
  _LIR,
  0,
  [_MRa, _NTe],
  [
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListInvitationsResponse = struct(n0, _LIRi, 0, [_Invi, _NTe], [() => InvitationList, 0]);
export var ListMembersRequest = struct(
  n0,
  _LMR,
  0,
  [_OAn, _MRa, _NTe],
  [
    [
      2,
      {
        [_hQ]: _OAn,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
  ]
);
export var ListMembersResponse = struct(n0, _LMRi, 0, [_Memb, _NTe], [() => MemberList, 0]);
export var Member = struct(n0, _Membe, 0, [_AIc, _E, _MI, _AI, _MSemb, _IAnv, _UA], [0, 0, 0, 0, 0, 5, 5]);
export var Result = struct(n0, _Resu, 0, [_AIc, _PRr], [0, 0]);
export var AccountDetailsList = list(n0, _ADL, 0, () => AccountDetails);
export var InvitationList = list(n0, _ILnv, 0, () => Invitation);
export var MemberList = list(n0, _MLe, 0, () => Member);
export var ResultList = list(n0, _RLes, 0, () => Result);
export var CreateMembers = op(
  n0,
  _CMr,
  {
    [_h]: ["POST", "/members", 200],
  },
  () => CreateMembersRequest,
  () => CreateMembersResponse
);
export var DeclineInvitations = op(
  n0,
  _DIec,
  {
    [_h]: ["POST", "/invitations/decline", 200],
  },
  () => DeclineInvitationsRequest,
  () => DeclineInvitationsResponse
);
export var DeleteInvitations = op(
  n0,
  _DIele,
  {
    [_h]: ["POST", "/invitations/delete", 200],
  },
  () => DeleteInvitationsRequest,
  () => DeleteInvitationsResponse
);
export var DeleteMembers = op(
  n0,
  _DMe,
  {
    [_h]: ["POST", "/members/delete", 200],
  },
  () => DeleteMembersRequest,
  () => DeleteMembersResponse
);
export var GetAdministratorAccount = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/administrator", 200],
  },
  () => GetAdministratorAccountRequest,
  () => GetAdministratorAccountResponse
);
export var GetMasterAccount = op(
  n0,
  _GMA,
  {
    [_h]: ["GET", "/master", 200],
  },
  () => GetMasterAccountRequest,
  () => GetMasterAccountResponse
);
export var GetMembers = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/members/get", 200],
  },
  () => GetMembersRequest,
  () => GetMembersResponse
);
export var InviteMembers = op(
  n0,
  _IMn,
  {
    [_h]: ["POST", "/members/invite", 200],
  },
  () => InviteMembersRequest,
  () => InviteMembersResponse
);
export var ListInvitations = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/invitations", 200],
  },
  () => ListInvitationsRequest,
  () => ListInvitationsResponse
);
export var ListMembers = op(
  n0,
  _LMis,
  {
    [_h]: ["GET", "/members", 200],
  },
  () => ListMembersRequest,
  () => ListMembersResponse
);
