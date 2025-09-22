// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _II, _PFSI, _SIPA, _SIPe, _SIPQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SetInstanceProtectionAnswer = struct(n0, _SIPA, 0, [], []);
export var SetInstanceProtectionQuery = struct(n0, _SIPQ, 0, [_II, _ASGN, _PFSI], [64 | 0, 0, 2]);
export var InstanceIds = 64 | 0;

export var SetInstanceProtection = op(
  n0,
  _SIPe,
  0,
  () => SetInstanceProtectionQuery,
  () => SetInstanceProtectionAnswer
);
