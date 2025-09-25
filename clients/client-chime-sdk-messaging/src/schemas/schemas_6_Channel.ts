// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NotFoundException as __NotFoundException } from "../models/index";
import {
  _ACF,
  _ACFR,
  _AIA,
  _BCCM,
  _BCCME,
  _BCCMEa,
  _BCCMR,
  _BCCMRa,
  _BCM,
  _C,
  _c,
  _CA,
  _CB,
  _CBh,
  _CBr,
  _CCM,
  _CCMR,
  _CCMRr,
  _CFA,
  _CM,
  _CMA,
  _CMh,
  _CMha,
  _Co,
  _CT,
  _CTr,
  _DCBe,
  _DCBRe,
  _DCBRes,
  _DCFi,
  _DCFRi,
  _DCMes,
  _DCMesc,
  _DCMRes,
  _DCMResc,
  _DCMRescr,
  _DCMRescri,
  _DT,
  _E,
  _e,
  _EC,
  _EM,
  _GCM,
  _GCMR,
  _GCMRe,
  _GMSC,
  _GMSCR,
  _GMSCRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _IB,
  _LET,
  _LUT,
  _M,
  _MA,
  _MAe,
  _MAes,
  _Me,
  _Mem,
  _Memb,
  _MI,
  _Mod,
  _NFE,
  _Pe,
  _PMSC,
  _PMSCR,
  _PMSCRu,
  _R,
  _RA,
  _S,
  _SC,
  _SCI,
  _sci,
  _SCL,
  _SCt,
  _St,
  _T,
  _Ta,
  _xacb,
  Identity,
  Metadata,
  n0,
  Unit,
} from "./schemas_0";
import {
  ChannelMessageStatusStructure,
  Content,
  ContentType,
  MessageAttributeMap,
  TargetList,
} from "./schemas_1_Channel";

/* eslint no-var: 0 */

export var AssociateChannelFlowRequest = struct(
  n0,
  _ACFR,
  0,
  [_CA, _CFA, _CB],
  [
    [0, 1],
    0,
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var BatchChannelMemberships = struct(
  n0,
  _BCM,
  0,
  [_IB, _T, _Mem, _CA, _SCI],
  [[() => Identity, 0], 0, [() => Members, 0], 0, 0]
);
export var BatchCreateChannelMembershipError = struct(n0, _BCCME, 0, [_MA, _EC, _EM], [0, 0, 0]);
export var BatchCreateChannelMembershipRequest = struct(
  n0,
  _BCCMR,
  0,
  [_CA, _T, _MAe, _CB, _SCI],
  [
    [0, 1],
    0,
    64 | 0,
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    0,
  ]
);
export var BatchCreateChannelMembershipResponse = struct(
  n0,
  _BCCMRa,
  0,
  [_BCM, _E],
  [[() => BatchChannelMemberships, 0], () => BatchCreateChannelMembershipErrors]
);
export var ChannelBan = struct(n0, _CBh, 0, [_Memb, _CA, _CTr, _CBr], [[() => Identity, 0], 0, 4, [() => Identity, 0]]);
export var ChannelMembership = struct(
  n0,
  _CMh,
  0,
  [_IB, _T, _Memb, _CA, _CTr, _LUT, _SCI],
  [[() => Identity, 0], 0, [() => Identity, 0], 0, 4, 4, 0]
);
export var ChannelMessage = struct(
  n0,
  _CM,
  0,
  [_CA, _MI, _C, _M, _T, _CTr, _LET, _LUT, _S, _R, _Pe, _St, _MAes, _SCI, _CT, _Ta],
  [
    0,
    0,
    [() => Content, 0],
    [() => Metadata, 0],
    0,
    4,
    4,
    4,
    [() => Identity, 0],
    2,
    0,
    () => ChannelMessageStatusStructure,
    [() => MessageAttributeMap, 0],
    0,
    [() => ContentType, 0],
    () => TargetList,
  ]
);
export var ChannelModerator = struct(
  n0,
  _CMha,
  0,
  [_Mod, _CA, _CTr, _CBr],
  [[() => Identity, 0], 0, 4, [() => Identity, 0]]
);
export var CreateChannelMembershipRequest = struct(
  n0,
  _CCMR,
  0,
  [_CA, _MA, _T, _CB, _SCI],
  [
    [0, 1],
    0,
    0,
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    0,
  ]
);
export var CreateChannelMembershipResponse = struct(n0, _CCMRr, 0, [_CA, _Memb, _SCI], [0, [() => Identity, 0], 0]);
export var DescribeChannelBanRequest = struct(
  n0,
  _DCBRe,
  0,
  [_CA, _MA, _CB],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var DescribeChannelBanResponse = struct(n0, _DCBRes, 0, [_CBh], [[() => ChannelBan, 0]]);
export var DescribeChannelMembershipRequest = struct(
  n0,
  _DCMRes,
  0,
  [_CA, _MA, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
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
export var DescribeChannelMembershipResponse = struct(n0, _DCMResc, 0, [_CMh], [[() => ChannelMembership, 0]]);
export var DescribeChannelModeratorRequest = struct(
  n0,
  _DCMRescr,
  0,
  [_CA, _CMA, _CB],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var DescribeChannelModeratorResponse = struct(n0, _DCMRescri, 0, [_CMha], [[() => ChannelModerator, 0]]);
export var DisassociateChannelFlowRequest = struct(
  n0,
  _DCFRi,
  0,
  [_CA, _CFA, _CB],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var GetChannelMessageRequest = struct(
  n0,
  _GCMR,
  0,
  [_CA, _MI, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
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
export var GetChannelMessageResponse = struct(n0, _GCMRe, 0, [_CM], [[() => ChannelMessage, 0]]);
export var GetMessagingStreamingConfigurationsRequest = struct(n0, _GMSCR, 0, [_AIA], [[0, 1]]);
export var GetMessagingStreamingConfigurationsResponse = struct(
  n0,
  _GMSCRe,
  0,
  [_SC],
  [() => StreamingConfigurationList]
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Co, _Me],
  [0, 0],

  __NotFoundException
);
export var PutMessagingStreamingConfigurationsRequest = struct(
  n0,
  _PMSCR,
  0,
  [_AIA, _SC],
  [[0, 1], () => StreamingConfigurationList]
);
export var PutMessagingStreamingConfigurationsResponse = struct(
  n0,
  _PMSCRu,
  0,
  [_SC],
  [() => StreamingConfigurationList]
);
export var StreamingConfiguration = struct(n0, _SCt, 0, [_DT, _RA], [0, 0]);
export var BatchCreateChannelMembershipErrors = list(n0, _BCCMEa, 0, () => BatchCreateChannelMembershipError);
export var MemberArns = 64 | 0;

export var Members = list(n0, _Mem, 0, [() => Identity, 0]);
export var StreamingConfigurationList = list(n0, _SCL, 0, () => StreamingConfiguration);
export var AssociateChannelFlow = op(
  n0,
  _ACF,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}/channel-flow", 200],
  },
  () => AssociateChannelFlowRequest,
  () => Unit
);
export var BatchCreateChannelMembership = op(
  n0,
  _BCCM,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/memberships?operation=batch-create", 200],
  },
  () => BatchCreateChannelMembershipRequest,
  () => BatchCreateChannelMembershipResponse
);
export var CreateChannelMembership = op(
  n0,
  _CCM,
  {
    [_h]: ["POST", "/channels/{ChannelArn}/memberships", 201],
  },
  () => CreateChannelMembershipRequest,
  () => CreateChannelMembershipResponse
);
export var DescribeChannelBan = op(
  n0,
  _DCBe,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/bans/{MemberArn}", 200],
  },
  () => DescribeChannelBanRequest,
  () => DescribeChannelBanResponse
);
export var DescribeChannelMembership = op(
  n0,
  _DCMes,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/memberships/{MemberArn}", 200],
  },
  () => DescribeChannelMembershipRequest,
  () => DescribeChannelMembershipResponse
);
export var DescribeChannelModerator = op(
  n0,
  _DCMesc,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}", 200],
  },
  () => DescribeChannelModeratorRequest,
  () => DescribeChannelModeratorResponse
);
export var DisassociateChannelFlow = op(
  n0,
  _DCFi,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}/channel-flow/{ChannelFlowArn}", 204],
  },
  () => DisassociateChannelFlowRequest,
  () => Unit
);
export var GetChannelMessage = op(
  n0,
  _GCM,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/messages/{MessageId}", 200],
  },
  () => GetChannelMessageRequest,
  () => GetChannelMessageResponse
);
export var GetMessagingStreamingConfigurations = op(
  n0,
  _GMSC,
  {
    [_h]: ["GET", "/app-instances/{AppInstanceArn}/streaming-configurations", 200],
  },
  () => GetMessagingStreamingConfigurationsRequest,
  () => GetMessagingStreamingConfigurationsResponse
);
export var PutMessagingStreamingConfigurations = op(
  n0,
  _PMSC,
  {
    [_h]: ["PUT", "/app-instances/{AppInstanceArn}/streaming-configurations", 200],
  },
  () => PutMessagingStreamingConfigurationsRequest,
  () => PutMessagingStreamingConfigurationsResponse
);
