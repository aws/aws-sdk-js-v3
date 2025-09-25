// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GTPIC, _GTPICR, _GTPICRe, _ht, _TPIC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTrafficPolicyInstanceCountRequest = struct(n0, _GTPICR, 0, [], []);
export var GetTrafficPolicyInstanceCountResponse = struct(n0, _GTPICRe, 0, [_TPIC], [1]);
export var GetTrafficPolicyInstanceCount = op(
  n0,
  _GTPIC,
  {
    [_ht]: ["GET", "/2013-04-01/trafficpolicyinstancecount", 200],
  },
  () => GetTrafficPolicyInstanceCountRequest,
  () => GetTrafficPolicyInstanceCountResponse
);
