// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aI,
  _aIc,
  _b,
  _BACRTA,
  _BACRTAI,
  _BACRTAO,
  _BAR,
  _BARI,
  _BARO,
  _BE,
  _BEL,
  _BRCRFA,
  _BRCRFAI,
  _BRCRFAO,
  _BRR,
  _BRRI,
  _BRRO,
  _cD,
  _cDT,
  _cI,
  _cN,
  _CR,
  _cR,
  _cRh,
  _cS,
  _dDT,
  _e,
  _er,
  _GC,
  _GCI,
  _GCO,
  _h,
  _IB,
  _IT,
  _m,
  _r,
  _rAI,
  _SI,
  _sI,
  _SII,
  _ti,
  n0,
  Unit,
} from "./schemas_0";
import { ChannelDescription, ChannelName } from "./schemas_1_Channel";

/* eslint no-var: 0 */

export var InviteBody = sim(n0, _IB, 0, 8);
export var InviteTitle = sim(n0, _IT, 0, 8);
export var BatchAddChannelRoleToAccessorsInput = struct(
  n0,
  _BACRTAI,
  0,
  [_sI, _cI, _aI, _cR],
  [[0, 1], [0, 1], 64 | 0, 0]
);
export var BatchAddChannelRoleToAccessorsOutput = struct(n0, _BACRTAO, 0, [_aAI, _er], [64 | 0, () => BatchErrorList]);
export var BatchAddRoleInput = struct(n0, _BARI, 0, [_sI, _aI, _r], [[0, 1], 64 | 0, 0]);
export var BatchAddRoleOutput = struct(n0, _BARO, 0, [_aAI, _er], [64 | 0, () => BatchErrorList]);
export var BatchError = struct(n0, _BE, 0, [_aIc, _e, _m], [0, 1, 0]);
export var BatchRemoveChannelRoleFromAccessorsInput = struct(
  n0,
  _BRCRFAI,
  0,
  [_sI, _cI, _aI, _cR],
  [[0, 1], [0, 1], 64 | 0, 0]
);
export var BatchRemoveChannelRoleFromAccessorsOutput = struct(
  n0,
  _BRCRFAO,
  0,
  [_rAI, _er],
  [64 | 0, () => BatchErrorList]
);
export var BatchRemoveRoleInput = struct(n0, _BRRI, 0, [_sI, _aI, _r], [[0, 1], 64 | 0, 0]);
export var BatchRemoveRoleOutput = struct(n0, _BRRO, 0, [_rAI, _er], [64 | 0, () => BatchErrorList]);
export var GetChannelInput = struct(
  n0,
  _GCI,
  0,
  [_sI, _cI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetChannelOutput = struct(
  n0,
  _GCO,
  0,
  [_sI, _cI, _cN, _cD, _cDT, _dDT, _cRh, _cS],
  [0, 0, [() => ChannelName, 0], [() => ChannelDescription, 0], 5, 5, map(n0, _CR, 0, 0, 64 | 0), 0]
);
export var SendInvitesInput = struct(
  n0,
  _SII,
  0,
  [_sI, _aI, _ti, _b],
  [[0, 1], 64 | 0, [() => InviteTitle, 0], [() => InviteBody, 0]]
);
export var AccessorIdList = 64 | 0;

export var BatchErrorList = list(n0, _BEL, 0, () => BatchError);
export var ChannelRoleList = 64 | 0;

export var ChannelRoles = map(n0, _CR, 0, 0, 64 | 0);
export var BatchAddChannelRoleToAccessors = op(
  n0,
  _BACRTA,
  {
    [_h]: ["POST", "/spaces/{spaceId}/channels/{channelId}/roles", 200],
  },
  () => BatchAddChannelRoleToAccessorsInput,
  () => BatchAddChannelRoleToAccessorsOutput
);
export var BatchAddRole = op(
  n0,
  _BAR,
  {
    [_h]: ["POST", "/spaces/{spaceId}/roles", 200],
  },
  () => BatchAddRoleInput,
  () => BatchAddRoleOutput
);
export var BatchRemoveChannelRoleFromAccessors = op(
  n0,
  _BRCRFA,
  {
    [_h]: ["PATCH", "/spaces/{spaceId}/channels/{channelId}/roles", 200],
  },
  () => BatchRemoveChannelRoleFromAccessorsInput,
  () => BatchRemoveChannelRoleFromAccessorsOutput
);
export var BatchRemoveRole = op(
  n0,
  _BRR,
  {
    [_h]: ["PATCH", "/spaces/{spaceId}/roles", 200],
  },
  () => BatchRemoveRoleInput,
  () => BatchRemoveRoleOutput
);
export var GetChannel = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/spaces/{spaceId}/channels/{channelId}", 200],
  },
  () => GetChannelInput,
  () => GetChannelOutput
);
export var SendInvites = op(
  n0,
  _SI,
  {
    [_h]: ["POST", "/spaces/{spaceId}/invite", 200],
  },
  () => SendInvitesInput,
  () => Unit
);
