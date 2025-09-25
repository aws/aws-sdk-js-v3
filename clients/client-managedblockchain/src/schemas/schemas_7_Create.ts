// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _C,
  _CL,
  _CLh,
  _E,
  _Fa,
  _h,
  _LC,
  _LCo,
  _LPC,
  _MFLPC,
  _MI,
  _MLPC,
  _NFLPC,
  _NI,
  _NIo,
  _NLPC,
  _PL,
  _UM,
  _UMI,
  _UMO,
  _UN,
  _UNI,
  _UNO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LogConfiguration = struct(n0, _LC, 0, [_E], [2]);
export var LogConfigurations = struct(n0, _LCo, 0, [_C], [() => LogConfiguration]);
export var MemberFabricLogPublishingConfiguration = struct(n0, _MFLPC, 0, [_CL], [() => LogConfigurations]);
export var MemberLogPublishingConfiguration = struct(
  n0,
  _MLPC,
  0,
  [_Fa],
  [() => MemberFabricLogPublishingConfiguration]
);
export var NodeFabricLogPublishingConfiguration = struct(
  n0,
  _NFLPC,
  0,
  [_CLh, _PL],
  [() => LogConfigurations, () => LogConfigurations]
);
export var NodeLogPublishingConfiguration = struct(n0, _NLPC, 0, [_Fa], [() => NodeFabricLogPublishingConfiguration]);
export var UpdateMemberInput = struct(
  n0,
  _UMI,
  0,
  [_NI, _MI, _LPC],
  [[0, 1], [0, 1], () => MemberLogPublishingConfiguration]
);
export var UpdateMemberOutput = struct(n0, _UMO, 0, [], []);
export var UpdateNodeInput = struct(
  n0,
  _UNI,
  0,
  [_NI, _MI, _NIo, _LPC],
  [[0, 1], 0, [0, 1], () => NodeLogPublishingConfiguration]
);
export var UpdateNodeOutput = struct(n0, _UNO, 0, [], []);
export var UpdateMember = op(
  n0,
  _UM,
  {
    [_h]: ["PATCH", "/networks/{NetworkId}/members/{MemberId}", 200],
  },
  () => UpdateMemberInput,
  () => UpdateMemberOutput
);
export var UpdateNode = op(
  n0,
  _UN,
  {
    [_h]: ["PATCH", "/networks/{NetworkId}/nodes/{NodeId}", 200],
  },
  () => UpdateNodeInput,
  () => UpdateNodeOutput
);
