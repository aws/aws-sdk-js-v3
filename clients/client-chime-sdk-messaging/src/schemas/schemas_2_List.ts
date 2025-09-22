// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AIA,
  _aia,
  _AIUA,
  _aiua,
  _C,
  _CA,
  _CAWFS,
  _CAWFSL,
  _CB,
  _CBha,
  _CBS,
  _CBSL,
  _CFA,
  _cfa,
  _CFh,
  _CFS,
  _CFSL,
  _Cha,
  _CMBAIUSL,
  _CMFAIUSL,
  _CMhan,
  _CMhann,
  _CMhanne,
  _CMS,
  _CMSh,
  _CMSha,
  _CMSL,
  _CMSLh,
  _CMSLha,
  _CSL,
  _CT,
  _CTr,
  _F,
  _h,
  _hH,
  _hQ,
  _K,
  _LCAWCF,
  _LCAWCFR,
  _LCAWCFRi,
  _LCB,
  _LCBR,
  _LCBRi,
  _LCF,
  _LCFR,
  _LCFRi,
  _LCi,
  _LCM,
  _LCMBAIU,
  _LCMBAIUR,
  _LCMBAIURi,
  _LCMFAIU,
  _LCMFAIUR,
  _LCMFAIURi,
  _LCMi,
  _LCMis,
  _LCMR,
  _LCMRi,
  _LCMRis,
  _LCMRist,
  _LCMRisth,
  _LCMRistha,
  _LCR,
  _LCRi,
  _LET,
  _LSC,
  _LSCR,
  _LSCRi,
  _LUT,
  _M,
  _MAes,
  _MC,
  _Memb,
  _MI,
  _Mo,
  _Mod,
  _MR,
  _mr,
  _N,
  _NA,
  _na,
  _NB,
  _nb,
  _NT,
  _nt_,
  _O,
  _P,
  _p,
  _Pr,
  _R,
  _S,
  _SCe,
  _SCI,
  _sci,
  _SCR,
  _SCRe,
  _SCS,
  _SCSL,
  _SCu,
  _SF,
  _SFe,
  _SO,
  _so,
  _St,
  _T,
  _t,
  _Ta,
  _Va,
  _xacb,
  Identity,
  Metadata,
  n0,
  NonEmptyResourceName,
} from "./schemas_0";
import {
  ChannelMessageStatusStructure,
  Content,
  ContentType,
  MessageAttributeMap,
  TargetList,
} from "./schemas_1_Channel";
import {
  ChannelMembershipForAppInstanceUserSummary,
  ChannelModeratedByAppInstanceUserSummary,
  ChannelSummary,
} from "./schemas_4_Channel";
import { ProcessorList } from "./schemas_9_Channel";

/* eslint no-var: 0 */

export var NextToken = sim(n0, _NT, 0, 8);
export var ChannelAssociatedWithFlowSummary = struct(
  n0,
  _CAWFS,
  0,
  [_N, _CA, _Mo, _P, _M],
  [[() => NonEmptyResourceName, 0], 0, 0, 0, [() => Metadata, 0]]
);
export var ChannelBanSummary = struct(n0, _CBS, 0, [_Memb], [[() => Identity, 0]]);
export var ChannelFlowSummary = struct(
  n0,
  _CFS,
  0,
  [_CFA, _N, _Pr],
  [0, [() => NonEmptyResourceName, 0], [() => ProcessorList, 0]]
);
export var ChannelMembershipSummary = struct(n0, _CMS, 0, [_Memb], [[() => Identity, 0]]);
export var ChannelMessageSummary = struct(
  n0,
  _CMSh,
  0,
  [_MI, _C, _M, _T, _CTr, _LUT, _LET, _S, _R, _St, _MAes, _CT, _Ta],
  [
    0,
    [() => Content, 0],
    [() => Metadata, 0],
    0,
    4,
    4,
    4,
    [() => Identity, 0],
    2,
    () => ChannelMessageStatusStructure,
    [() => MessageAttributeMap, 0],
    [() => ContentType, 0],
    () => TargetList,
  ]
);
export var ChannelModeratorSummary = struct(n0, _CMSha, 0, [_Mod], [[() => Identity, 0]]);
export var ListChannelBansRequest = struct(
  n0,
  _LCBR,
  0,
  [_CA, _MR, _NT, _CB],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var ListChannelBansResponse = struct(
  n0,
  _LCBRi,
  0,
  [_CA, _NT, _CBha],
  [0, [() => NextToken, 0], [() => ChannelBanSummaryList, 0]]
);
export var ListChannelFlowsRequest = struct(
  n0,
  _LCFR,
  0,
  [_AIA, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _aia,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
  ]
);
export var ListChannelFlowsResponse = struct(
  n0,
  _LCFRi,
  0,
  [_CFh, _NT],
  [
    [() => ChannelFlowSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var ListChannelMembershipsForAppInstanceUserRequest = struct(
  n0,
  _LCMFAIUR,
  0,
  [_AIUA, _MR, _NT, _CB],
  [
    [
      0,
      {
        [_hQ]: _aiua,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var ListChannelMembershipsForAppInstanceUserResponse = struct(
  n0,
  _LCMFAIURi,
  0,
  [_CMhan, _NT],
  [
    [() => ChannelMembershipForAppInstanceUserSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var ListChannelMembershipsRequest = struct(
  n0,
  _LCMR,
  0,
  [_CA, _T, _MR, _NT, _CB, _SCI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      0,
      {
        [_hQ]: _sci,
      },
    ],
  ]
);
export var ListChannelMembershipsResponse = struct(
  n0,
  _LCMRi,
  0,
  [_CA, _CMhan, _NT],
  [0, [() => ChannelMembershipSummaryList, 0], [() => NextToken, 0]]
);
export var ListChannelMessagesRequest = struct(
  n0,
  _LCMRis,
  0,
  [_CA, _SO, _NB, _NA, _MR, _NT, _CB, _SCI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _so,
      },
    ],
    [
      4,
      {
        [_hQ]: _nb,
      },
    ],
    [
      4,
      {
        [_hQ]: _na,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      0,
      {
        [_hQ]: _sci,
      },
    ],
  ]
);
export var ListChannelMessagesResponse = struct(
  n0,
  _LCMRist,
  0,
  [_CA, _NT, _CMhann, _SCI],
  [0, [() => NextToken, 0], [() => ChannelMessageSummaryList, 0], 0]
);
export var ListChannelModeratorsRequest = struct(
  n0,
  _LCMRisth,
  0,
  [_CA, _MR, _NT, _CB],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var ListChannelModeratorsResponse = struct(
  n0,
  _LCMRistha,
  0,
  [_CA, _NT, _CMhanne],
  [0, [() => NextToken, 0], [() => ChannelModeratorSummaryList, 0]]
);
export var ListChannelsAssociatedWithChannelFlowRequest = struct(
  n0,
  _LCAWCFR,
  0,
  [_CFA, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cfa,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
  ]
);
export var ListChannelsAssociatedWithChannelFlowResponse = struct(
  n0,
  _LCAWCFRi,
  0,
  [_Cha, _NT],
  [
    [() => ChannelAssociatedWithFlowSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var ListChannelsModeratedByAppInstanceUserRequest = struct(
  n0,
  _LCMBAIUR,
  0,
  [_AIUA, _MR, _NT, _CB],
  [
    [
      0,
      {
        [_hQ]: _aiua,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var ListChannelsModeratedByAppInstanceUserResponse = struct(
  n0,
  _LCMBAIURi,
  0,
  [_Cha, _NT],
  [
    [() => ChannelModeratedByAppInstanceUserSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_AIA, _P, _MR, _NT, _CB],
  [
    [
      0,
      {
        [_hQ]: _aia,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var ListChannelsResponse = struct(
  n0,
  _LCRi,
  0,
  [_Cha, _NT],
  [
    [() => ChannelSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var ListSubChannelsRequest = struct(
  n0,
  _LSCR,
  0,
  [_CA, _CB, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
  ]
);
export var ListSubChannelsResponse = struct(
  n0,
  _LSCRi,
  0,
  [_CA, _SCu, _NT],
  [0, () => SubChannelSummaryList, [() => NextToken, 0]]
);
export var SearchChannelsRequest = struct(
  n0,
  _SCR,
  0,
  [_CB, _F, _MR, _NT],
  [
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    () => SearchFields,
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt_,
      },
    ],
  ]
);
export var SearchChannelsResponse = struct(
  n0,
  _SCRe,
  0,
  [_Cha, _NT],
  [
    [() => ChannelSummaryList, 0],
    [() => NextToken, 0],
  ]
);
export var SearchField = struct(n0, _SF, 0, [_K, _Va, _O], [0, 64 | 0, 0]);
export var SubChannelSummary = struct(n0, _SCS, 0, [_SCI, _MC], [0, 1]);
export var ChannelAssociatedWithFlowSummaryList = list(n0, _CAWFSL, 0, [() => ChannelAssociatedWithFlowSummary, 0]);
export var ChannelBanSummaryList = list(n0, _CBSL, 0, [() => ChannelBanSummary, 0]);
export var ChannelFlowSummaryList = list(n0, _CFSL, 0, [() => ChannelFlowSummary, 0]);
export var ChannelMembershipForAppInstanceUserSummaryList = list(n0, _CMFAIUSL, 0, [
  () => ChannelMembershipForAppInstanceUserSummary,
  0,
]);
export var ChannelMembershipSummaryList = list(n0, _CMSL, 0, [() => ChannelMembershipSummary, 0]);
export var ChannelMessageSummaryList = list(n0, _CMSLh, 0, [() => ChannelMessageSummary, 0]);
export var ChannelModeratedByAppInstanceUserSummaryList = list(n0, _CMBAIUSL, 0, [
  () => ChannelModeratedByAppInstanceUserSummary,
  0,
]);
export var ChannelModeratorSummaryList = list(n0, _CMSLha, 0, [() => ChannelModeratorSummary, 0]);
export var ChannelSummaryList = list(n0, _CSL, 0, [() => ChannelSummary, 0]);
export var SearchFields = list(n0, _SFe, 0, () => SearchField);
export var SearchFieldValues = 64 | 0;

export var SubChannelSummaryList = list(n0, _SCSL, 0, () => SubChannelSummary);
export var ListChannelBans = op(
  n0,
  _LCB,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/bans", 200],
  },
  () => ListChannelBansRequest,
  () => ListChannelBansResponse
);
export var ListChannelFlows = op(
  n0,
  _LCF,
  {
    [_h]: ["GET", "/channel-flows", 200],
  },
  () => ListChannelFlowsRequest,
  () => ListChannelFlowsResponse
);
export var ListChannelMemberships = op(
  n0,
  _LCM,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/memberships", 200],
  },
  () => ListChannelMembershipsRequest,
  () => ListChannelMembershipsResponse
);
export var ListChannelMembershipsForAppInstanceUser = op(
  n0,
  _LCMFAIU,
  {
    [_h]: ["GET", "/channels?scope=app-instance-user-memberships", 200],
  },
  () => ListChannelMembershipsForAppInstanceUserRequest,
  () => ListChannelMembershipsForAppInstanceUserResponse
);
export var ListChannelMessages = op(
  n0,
  _LCMi,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/messages", 200],
  },
  () => ListChannelMessagesRequest,
  () => ListChannelMessagesResponse
);
export var ListChannelModerators = op(
  n0,
  _LCMis,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/moderators", 200],
  },
  () => ListChannelModeratorsRequest,
  () => ListChannelModeratorsResponse
);
export var ListChannels = op(
  n0,
  _LCi,
  {
    [_h]: ["GET", "/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var ListChannelsAssociatedWithChannelFlow = op(
  n0,
  _LCAWCF,
  {
    [_h]: ["GET", "/channels?scope=channel-flow-associations", 200],
  },
  () => ListChannelsAssociatedWithChannelFlowRequest,
  () => ListChannelsAssociatedWithChannelFlowResponse
);
export var ListChannelsModeratedByAppInstanceUser = op(
  n0,
  _LCMBAIU,
  {
    [_h]: ["GET", "/channels?scope=app-instance-user-moderated-channels", 200],
  },
  () => ListChannelsModeratedByAppInstanceUserRequest,
  () => ListChannelsModeratedByAppInstanceUserResponse
);
export var ListSubChannels = op(
  n0,
  _LSC,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/subchannels", 200],
  },
  () => ListSubChannelsRequest,
  () => ListSubChannelsResponse
);
export var SearchChannels = op(
  n0,
  _SCe,
  {
    [_h]: ["POST", "/channels?operation=search", 200],
  },
  () => SearchChannelsRequest,
  () => SearchChannelsResponse
);
