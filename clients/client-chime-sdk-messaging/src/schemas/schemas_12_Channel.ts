// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AN,
  _CA,
  _CB,
  _CMP,
  _FR,
  _GCMP,
  _GCMPR,
  _GCMPRe,
  _h,
  _hH,
  _MA,
  _Memb,
  _PCMP,
  _PCMPR,
  _PCMPRu,
  _PN,
  _PNP,
  _Pre,
  _xacb,
  Identity,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FilterRule = sim(n0, _FR, 0, 8);
export var ChannelMembershipPreferences = struct(n0, _CMP, 0, [_PN], [[() => PushNotificationPreferences, 0]]);
export var GetChannelMembershipPreferencesRequest = struct(
  n0,
  _GCMPR,
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
export var GetChannelMembershipPreferencesResponse = struct(
  n0,
  _GCMPRe,
  0,
  [_CA, _Memb, _Pre],
  [0, [() => Identity, 0], [() => ChannelMembershipPreferences, 0]]
);
export var PushNotificationPreferences = struct(n0, _PNP, 0, [_AN, _FR], [0, [() => FilterRule, 0]]);
export var PutChannelMembershipPreferencesRequest = struct(
  n0,
  _PCMPR,
  0,
  [_CA, _MA, _CB, _Pre],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [() => ChannelMembershipPreferences, 0],
  ]
);
export var PutChannelMembershipPreferencesResponse = struct(
  n0,
  _PCMPRu,
  0,
  [_CA, _Memb, _Pre],
  [0, [() => Identity, 0], [() => ChannelMembershipPreferences, 0]]
);
export var GetChannelMembershipPreferences = op(
  n0,
  _GCMP,
  {
    [_h]: ["GET", "/channels/{ChannelArn}/memberships/{MemberArn}/preferences", 200],
  },
  () => GetChannelMembershipPreferencesRequest,
  () => GetChannelMembershipPreferencesResponse
);
export var PutChannelMembershipPreferences = op(
  n0,
  _PCMP,
  {
    [_h]: ["PUT", "/channels/{ChannelArn}/memberships/{MemberArn}/preferences", 200],
  },
  () => PutChannelMembershipPreferencesRequest,
  () => PutChannelMembershipPreferencesResponse
);
