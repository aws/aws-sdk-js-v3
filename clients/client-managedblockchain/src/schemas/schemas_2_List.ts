// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _Acc,
  _AI,
  _Ar,
  _AS,
  _ASL,
  _AU,
  _AZ,
  _BT,
  _CD,
  _CE,
  _CI,
  _D,
  _ED,
  _Ed,
  _Et,
  _F,
  _f,
  _FA,
  _Fa,
  _FV,
  _GA,
  _GAI,
  _GAO,
  _GM,
  _GMI,
  _GMO,
  _GN,
  _GNe,
  _GNI,
  _GNIe,
  _GNO,
  _GNOe,
  _GP,
  _GPI,
  _GPO,
  _h,
  _HE,
  _hQ,
  _I,
  _II,
  _IL,
  _In,
  _Inv,
  _IO,
  _iO,
  _IT,
  _KKA,
  _LA,
  _LAI,
  _LAO,
  _LI,
  _LII,
  _LIO,
  _LM,
  _LMI,
  _LMO,
  _LN,
  _LNI,
  _LNi,
  _LNIi,
  _LNO,
  _LNOi,
  _LP,
  _LPC,
  _LPI,
  _LPO,
  _Me,
  _Mem,
  _MFA,
  _MFAe,
  _MI,
  _mI,
  _MR,
  _mR,
  _MS,
  _MSL,
  _N,
  _n,
  _Ne,
  _NEA,
  _NEAo,
  _Net,
  _NFA,
  _NFAe,
  _NFAo,
  _NFAod,
  _NI,
  _NIo,
  _No,
  _Nod,
  _NS,
  _NSL,
  _NSLo,
  _NSo,
  _NT,
  _nT,
  _NTe,
  _nTe,
  _NVC,
  _OSE,
  _OVC,
  _P,
  _PBMI,
  _PBMN,
  _PE,
  _PEE,
  _PI,
  _Pro,
  _PSL,
  _PSr,
  _S,
  _SDB,
  _st,
  _T,
  _Ta,
  _VESN,
  _VP,
  _WSE,
  _YVC,
  n0,
} from "./schemas_0";
import { ProposalActions, VotingPolicy } from "./schemas_3_List";
import { MemberLogPublishingConfiguration, NodeLogPublishingConfiguration } from "./schemas_7_Create";

/* eslint no-var: 0 */

export var Accessor = struct(n0, _A, 0, [_I, _T, _BT, _S, _CD, _Ar, _Ta, _NT], [0, 0, 0, 0, 5, 0, 128 | 0, 0]);
export var AccessorSummary = struct(n0, _AS, 0, [_I, _T, _S, _CD, _Ar, _NT], [0, 0, 0, 5, 0, 0]);
export var GetAccessorInput = struct(n0, _GAI, 0, [_AI], [[0, 1]]);
export var GetAccessorOutput = struct(n0, _GAO, 0, [_A], [() => Accessor]);
export var GetMemberInput = struct(
  n0,
  _GMI,
  0,
  [_NI, _MI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMemberOutput = struct(n0, _GMO, 0, [_Me], [() => Member]);
export var GetNetworkInput = struct(n0, _GNI, 0, [_NI], [[0, 1]]);
export var GetNetworkOutput = struct(n0, _GNO, 0, [_Ne], [() => Network]);
export var GetNodeInput = struct(
  n0,
  _GNIe,
  0,
  [_NI, _MI, _NIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [0, 1],
  ]
);
export var GetNodeOutput = struct(n0, _GNOe, 0, [_No], [() => Node]);
export var GetProposalInput = struct(
  n0,
  _GPI,
  0,
  [_NI, _PI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProposalOutput = struct(n0, _GPO, 0, [_P], [() => Proposal]);
export var Invitation = struct(n0, _In, 0, [_II, _CD, _ED, _S, _NS, _Ar], [0, 5, 5, 0, () => NetworkSummary, 0]);
export var ListAccessorsInput = struct(
  n0,
  _LAI,
  0,
  [_MR, _NTe, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
  ]
);
export var ListAccessorsOutput = struct(n0, _LAO, 0, [_Acc, _NTe], [() => AccessorSummaryList, 0]);
export var ListInvitationsInput = struct(
  n0,
  _LII,
  0,
  [_MR, _NTe],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListInvitationsOutput = struct(n0, _LIO, 0, [_Inv, _NTe], [() => InvitationList, 0]);
export var ListMembersInput = struct(
  n0,
  _LMI,
  0,
  [_NI, _N, _S, _IO, _MR, _NTe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      2,
      {
        [_hQ]: _iO,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListMembersOutput = struct(n0, _LMO, 0, [_Mem, _NTe], [() => MemberSummaryList, 0]);
export var ListNetworksInput = struct(
  n0,
  _LNI,
  0,
  [_N, _F, _S, _MR, _NTe],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListNetworksOutput = struct(n0, _LNO, 0, [_Net, _NTe], [() => NetworkSummaryList, 0]);
export var ListNodesInput = struct(
  n0,
  _LNIi,
  0,
  [_NI, _MI, _S, _MR, _NTe],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListNodesOutput = struct(n0, _LNOi, 0, [_Nod, _NTe], [() => NodeSummaryList, 0]);
export var ListProposalsInput = struct(
  n0,
  _LPI,
  0,
  [_NI, _MR, _NTe],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProposalsOutput = struct(n0, _LPO, 0, [_Pro, _NTe], [() => ProposalSummaryList, 0]);
export var Member = struct(
  n0,
  _Me,
  0,
  [_NI, _I, _N, _D, _FA, _LPC, _S, _CD, _Ta, _Ar, _KKA],
  [0, 0, 0, 0, () => MemberFrameworkAttributes, () => MemberLogPublishingConfiguration, 0, 5, 128 | 0, 0, 0]
);
export var MemberFabricAttributes = struct(n0, _MFA, 0, [_AU, _CE], [0, 0]);
export var MemberFrameworkAttributes = struct(n0, _MFAe, 0, [_Fa], [() => MemberFabricAttributes]);
export var MemberSummary = struct(n0, _MS, 0, [_I, _N, _D, _S, _CD, _IO, _Ar], [0, 0, 0, 0, 5, 2, 0]);
export var Network = struct(
  n0,
  _Ne,
  0,
  [_I, _N, _D, _F, _FV, _FA, _VESN, _VP, _S, _CD, _Ta, _Ar],
  [0, 0, 0, 0, 0, () => NetworkFrameworkAttributes, 0, () => VotingPolicy, 0, 5, 128 | 0, 0]
);
export var NetworkEthereumAttributes = struct(n0, _NEA, 0, [_CI], [0]);
export var NetworkFabricAttributes = struct(n0, _NFA, 0, [_OSE, _Ed], [0, 0]);
export var NetworkFrameworkAttributes = struct(
  n0,
  _NFAe,
  0,
  [_Fa, _Et],
  [() => NetworkFabricAttributes, () => NetworkEthereumAttributes]
);
export var NetworkSummary = struct(n0, _NS, 0, [_I, _N, _D, _F, _FV, _S, _CD, _Ar], [0, 0, 0, 0, 0, 0, 5, 0]);
export var Node = struct(
  n0,
  _No,
  0,
  [_NI, _MI, _I, _IT, _AZ, _FA, _LPC, _SDB, _S, _CD, _Ta, _Ar, _KKA],
  [0, 0, 0, 0, 0, () => NodeFrameworkAttributes, () => NodeLogPublishingConfiguration, 0, 0, 5, 128 | 0, 0, 0]
);
export var NodeEthereumAttributes = struct(n0, _NEAo, 0, [_HE, _WSE], [0, 0]);
export var NodeFabricAttributes = struct(n0, _NFAo, 0, [_PE, _PEE], [0, 0]);
export var NodeFrameworkAttributes = struct(
  n0,
  _NFAod,
  0,
  [_Fa, _Et],
  [() => NodeFabricAttributes, () => NodeEthereumAttributes]
);
export var NodeSummary = struct(n0, _NSo, 0, [_I, _S, _CD, _AZ, _IT, _Ar], [0, 0, 5, 0, 0, 0]);
export var Proposal = struct(
  n0,
  _P,
  0,
  [_PI, _NI, _D, _Ac, _PBMI, _PBMN, _S, _CD, _ED, _YVC, _NVC, _OVC, _Ta, _Ar],
  [0, 0, 0, () => ProposalActions, 0, 0, 0, 5, 5, 1, 1, 1, 128 | 0, 0]
);
export var ProposalSummary = struct(n0, _PSr, 0, [_PI, _D, _PBMI, _PBMN, _S, _CD, _ED, _Ar], [0, 0, 0, 0, 0, 5, 5, 0]);
export var AccessorSummaryList = list(n0, _ASL, 0, () => AccessorSummary);
export var InvitationList = list(n0, _IL, 0, () => Invitation);
export var MemberSummaryList = list(n0, _MSL, 0, () => MemberSummary);
export var NetworkSummaryList = list(n0, _NSL, 0, () => NetworkSummary);
export var NodeSummaryList = list(n0, _NSLo, 0, () => NodeSummary);
export var ProposalSummaryList = list(n0, _PSL, 0, () => ProposalSummary);
export var GetAccessor = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/accessors/{AccessorId}", 200],
  },
  () => GetAccessorInput,
  () => GetAccessorOutput
);
export var GetMember = op(
  n0,
  _GM,
  {
    [_h]: ["GET", "/networks/{NetworkId}/members/{MemberId}", 200],
  },
  () => GetMemberInput,
  () => GetMemberOutput
);
export var GetNetwork = op(
  n0,
  _GN,
  {
    [_h]: ["GET", "/networks/{NetworkId}", 200],
  },
  () => GetNetworkInput,
  () => GetNetworkOutput
);
export var GetNode = op(
  n0,
  _GNe,
  {
    [_h]: ["GET", "/networks/{NetworkId}/nodes/{NodeId}", 200],
  },
  () => GetNodeInput,
  () => GetNodeOutput
);
export var GetProposal = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/networks/{NetworkId}/proposals/{ProposalId}", 200],
  },
  () => GetProposalInput,
  () => GetProposalOutput
);
export var ListAccessors = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/accessors", 200],
  },
  () => ListAccessorsInput,
  () => ListAccessorsOutput
);
export var ListInvitations = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/invitations", 200],
  },
  () => ListInvitationsInput,
  () => ListInvitationsOutput
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/networks/{NetworkId}/members", 200],
  },
  () => ListMembersInput,
  () => ListMembersOutput
);
export var ListNetworks = op(
  n0,
  _LN,
  {
    [_h]: ["GET", "/networks", 200],
  },
  () => ListNetworksInput,
  () => ListNetworksOutput
);
export var ListNodes = op(
  n0,
  _LNi,
  {
    [_h]: ["GET", "/networks/{NetworkId}/nodes", 200],
  },
  () => ListNodesInput,
  () => ListNodesOutput
);
export var ListProposals = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/networks/{NetworkId}/proposals", 200],
  },
  () => ListProposalsInput,
  () => ListProposalsOutput
);
