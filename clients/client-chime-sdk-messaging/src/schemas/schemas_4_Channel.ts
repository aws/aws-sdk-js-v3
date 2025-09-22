// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AIA,
  _AIUA,
  _aiua,
  _AIUMS,
  _CA,
  _CB,
  _CBr,
  _CC,
  _CCR,
  _CCRr,
  _CFA,
  _Ch,
  _CI,
  _CMBAIUS,
  _CMFAIUS,
  _CMh,
  _CRT,
  _CS,
  _CTr,
  _DCe,
  _DCMBAIU,
  _DCMBAIUR,
  _DCMBAIURe,
  _DCMFAIU,
  _DCMFAIUR,
  _DCMFAIURe,
  _DCRe,
  _DCRes,
  _ECC,
  _ES,
  _h,
  _hH,
  _hQ,
  _LMT,
  _LUT,
  _M,
  _MAe,
  _MAo,
  _MMP,
  _Mo,
  _MSC,
  _N,
  _P,
  _RMT,
  _SCI,
  _T,
  _Tag,
  _TMPSC,
  _UC,
  _UCR,
  _UCRp,
  _xacb,
  Identity,
  Metadata,
  n0,
  NonEmptyResourceName,
} from "./schemas_0";
import { TagList } from "./schemas_13_Resource";
import { ExpirationSettings } from "./schemas_14_Channel";
import { ClientRequestToken } from "./schemas_19_Channel";

/* eslint no-var: 0 */

export var ChannelId = sim(n0, _CI, 0, 8);
export var AppInstanceUserMembershipSummary = struct(n0, _AIUMS, 0, [_T, _RMT, _SCI], [0, 4, 0]);
export var Channel = struct(
  n0,
  _Ch,
  0,
  [_N, _CA, _Mo, _P, _M, _CBr, _CTr, _LMT, _LUT, _CFA, _ECC, _ES],
  [
    [() => NonEmptyResourceName, 0],
    0,
    0,
    0,
    [() => Metadata, 0],
    [() => Identity, 0],
    4,
    4,
    4,
    0,
    () => ElasticChannelConfiguration,
    () => ExpirationSettings,
  ]
);
export var ChannelMembershipForAppInstanceUserSummary = struct(
  n0,
  _CMFAIUS,
  0,
  [_CS, _AIUMS],
  [[() => ChannelSummary, 0], () => AppInstanceUserMembershipSummary]
);
export var ChannelModeratedByAppInstanceUserSummary = struct(n0, _CMBAIUS, 0, [_CS], [[() => ChannelSummary, 0]]);
export var ChannelSummary = struct(
  n0,
  _CS,
  0,
  [_N, _CA, _Mo, _P, _M, _LMT],
  [[() => NonEmptyResourceName, 0], 0, 0, 0, [() => Metadata, 0], 4]
);
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_AIA, _N, _Mo, _P, _M, _CRT, _Tag, _CB, _CI, _MAe, _MAo, _ECC, _ES],
  [
    0,
    [() => NonEmptyResourceName, 0],
    0,
    0,
    [() => Metadata, 0],
    [() => ClientRequestToken, 4],
    [() => TagList, 0],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [() => ChannelId, 0],
    64 | 0,
    64 | 0,
    () => ElasticChannelConfiguration,
    () => ExpirationSettings,
  ]
);
export var CreateChannelResponse = struct(n0, _CCRr, 0, [_CA], [0]);
export var DescribeChannelMembershipForAppInstanceUserRequest = struct(
  n0,
  _DCMFAIUR,
  0,
  [_CA, _AIUA, _CB],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aiua,
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
export var DescribeChannelMembershipForAppInstanceUserResponse = struct(
  n0,
  _DCMFAIURe,
  0,
  [_CMh],
  [[() => ChannelMembershipForAppInstanceUserSummary, 0]]
);
export var DescribeChannelModeratedByAppInstanceUserRequest = struct(
  n0,
  _DCMBAIUR,
  0,
  [_CA, _AIUA, _CB],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aiua,
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
export var DescribeChannelModeratedByAppInstanceUserResponse = struct(
  n0,
  _DCMBAIURe,
  0,
  [_Ch],
  [[() => ChannelModeratedByAppInstanceUserSummary, 0]]
);
export var DescribeChannelRequest = struct(
  n0,
  _DCRe,
  0,
  [_CA, _CB],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var DescribeChannelResponse = struct(n0, _DCRes, 0, [_Ch], [[() => Channel, 0]]);
export var ElasticChannelConfiguration = struct(n0, _ECC, 0, [_MSC, _TMPSC, _MMP], [1, 1, 1]);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_CA, _N, _Mo, _M, _CB],
  [
    [0, 1],
    [() => NonEmptyResourceName, 0],
    0,
    [() => Metadata, 0],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var UpdateChannelResponse = struct(n0, _UCRp, 0, [_CA], [0]);
export var ChannelMemberArns = 64 | 0;

export var ChannelModeratorArns = 64 | 0;

export var CreateChannel = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/channels", 201],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var DescribeChannel = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/channels/{ChannelArn}", 200],
  },
  () => DescribeChannelRequest,
  () => DescribeChannelResponse
);
export var DescribeChannelMembershipForAppInstanceUser = op(
  n0,
  _DCMFAIU,
  {
    [_h]: ["GET", "/channels/{ChannelArn}?scope=app-instance-user-membership", 200],
  },
  () => DescribeChannelMembershipForAppInstanceUserRequest,
  () => DescribeChannelMembershipForAppInstanceUserResponse
);
export var DescribeChannelModeratedByAppInstanceUser = op(
  n0,
  _DCMBAIU,
  {
    [_h]: ["GET", "/channels/{ChannelArn}?scope=app-instance-user-moderated-channel", 200],
  },
  () => DescribeChannelModeratedByAppInstanceUserRequest,
  () => DescribeChannelModeratedByAppInstanceUserResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
