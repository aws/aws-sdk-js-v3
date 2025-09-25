// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CCh,
  _Cha,
  _CI,
  _CPRC,
  _h,
  _II,
  _PR,
  _PTA,
  _PTC,
  _PTCL,
  _PTDIM,
  _PTV,
  _TTi,
  _TV,
  _UPRC,
  _UPRCCI,
  _UPRCR,
  _UPRCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChatParticipantRoleConfig = struct(n0, _CPRC, 0, [_PTCL], [() => ParticipantTimerConfigList]);
export var ParticipantTimerConfiguration = struct(n0, _PTC, 0, [_PR, _TTi, _TV], [0, 0, () => ParticipantTimerValue]);
export var UpdateParticipantRoleConfigRequest = struct(
  n0,
  _UPRCR,
  0,
  [_II, _CI, _CCh],
  [[0, 1], [0, 1], () => UpdateParticipantRoleConfigChannelInfo]
);
export var UpdateParticipantRoleConfigResponse = struct(n0, _UPRCRp, 0, [], []);
export var ParticipantTimerConfigList = list(n0, _PTCL, 0, () => ParticipantTimerConfiguration);
export var ParticipantTimerValue = uni(n0, _PTV, 0, [_PTA, _PTDIM], [0, 1]);
export var UpdateParticipantRoleConfigChannelInfo = uni(n0, _UPRCCI, 0, [_Cha], [() => ChatParticipantRoleConfig]);
export var UpdateParticipantRoleConfig = op(
  n0,
  _UPRC,
  {
    [_h]: ["PUT", "/contact/participant-role-config/{InstanceId}/{ContactId}", 200],
  },
  () => UpdateParticipantRoleConfigRequest,
  () => UpdateParticipantRoleConfigResponse
);
