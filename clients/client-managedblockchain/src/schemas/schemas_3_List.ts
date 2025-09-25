// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _Ac,
  _AP,
  _ATP,
  _AU,
  _CM,
  _CMI,
  _CMO,
  _CN,
  _CNI,
  _CNO,
  _CP,
  _CPI,
  _CPO,
  _CRT,
  _D,
  _Ed,
  _F,
  _Fa,
  _FC,
  _FV,
  _h,
  _IA,
  _IAL,
  _II,
  _Inv,
  _KKA,
  _LPC,
  _MC,
  _MFC,
  _MFCe,
  _MI,
  _N,
  _NFC,
  _NFCe,
  _NI,
  _PA,
  _PDIH,
  _PI,
  _Pr,
  _PS,
  _R,
  _RAe,
  _RAL,
  _Ta,
  _TC,
  _TP,
  _VP,
  n0,
} from "./schemas_0";
import { MemberLogPublishingConfiguration } from "./schemas_7_Create";

/* eslint no-var: 0 */

export var PasswordString = sim(n0, _PS, 0, 8);
export var ApprovalThresholdPolicy = struct(n0, _ATP, 0, [_TP, _PDIH, _TC], [1, 1, 0]);
export var CreateMemberInput = struct(
  n0,
  _CMI,
  0,
  [_CRT, _II, _NI, _MC],
  [[0, 4], 0, [0, 1], [() => MemberConfiguration, 0]]
);
export var CreateMemberOutput = struct(n0, _CMO, 0, [_MI], [0]);
export var CreateNetworkInput = struct(
  n0,
  _CNI,
  0,
  [_CRT, _N, _D, _F, _FV, _FC, _VP, _MC, _Ta],
  [[0, 4], 0, 0, 0, 0, () => NetworkFrameworkConfiguration, () => VotingPolicy, [() => MemberConfiguration, 0], 128 | 0]
);
export var CreateNetworkOutput = struct(n0, _CNO, 0, [_NI, _MI], [0, 0]);
export var CreateProposalInput = struct(
  n0,
  _CPI,
  0,
  [_CRT, _NI, _MI, _Ac, _D, _Ta],
  [[0, 4], [0, 1], 0, () => ProposalActions, 0, 128 | 0]
);
export var CreateProposalOutput = struct(n0, _CPO, 0, [_PI], [0]);
export var InviteAction = struct(n0, _IA, 0, [_Pr], [0]);
export var MemberConfiguration = struct(
  n0,
  _MC,
  0,
  [_N, _D, _FC, _LPC, _Ta, _KKA],
  [0, 0, [() => MemberFrameworkConfiguration, 0], () => MemberLogPublishingConfiguration, 128 | 0, 0]
);
export var MemberFabricConfiguration = struct(n0, _MFC, 0, [_AU, _AP], [0, [() => PasswordString, 0]]);
export var MemberFrameworkConfiguration = struct(n0, _MFCe, 0, [_Fa], [[() => MemberFabricConfiguration, 0]]);
export var NetworkFabricConfiguration = struct(n0, _NFC, 0, [_Ed], [0]);
export var NetworkFrameworkConfiguration = struct(n0, _NFCe, 0, [_Fa], [() => NetworkFabricConfiguration]);
export var ProposalActions = struct(n0, _PA, 0, [_Inv, _R], [() => InviteActionList, () => RemoveActionList]);
export var RemoveAction = struct(n0, _RAe, 0, [_MI], [0]);
export var VotingPolicy = struct(n0, _VP, 0, [_ATP], [() => ApprovalThresholdPolicy]);
export var InviteActionList = list(n0, _IAL, 0, () => InviteAction);
export var RemoveActionList = list(n0, _RAL, 0, () => RemoveAction);
export var CreateMember = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/networks/{NetworkId}/members", 200],
  },
  () => CreateMemberInput,
  () => CreateMemberOutput
);
export var CreateNetwork = op(
  n0,
  _CN,
  {
    [_h]: ["POST", "/networks", 200],
  },
  () => CreateNetworkInput,
  () => CreateNetworkOutput
);
export var CreateProposal = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/networks/{NetworkId}/proposals", 200],
  },
  () => CreateProposalInput,
  () => CreateProposalOutput
);
