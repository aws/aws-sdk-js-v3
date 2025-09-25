// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DISG, _DISGR, _DISGRe, _ht, _ISGIn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInputSecurityGroupRequest = struct(n0, _DISGR, 0, [_ISGIn], [[0, 1]]);
export var DeleteInputSecurityGroupResponse = struct(n0, _DISGRe, 0, [], []);
export var DeleteInputSecurityGroup = op(
  n0,
  _DISG,
  {
    [_ht]: ["DELETE", "/prod/inputSecurityGroups/{InputSecurityGroupId}", 200],
  },
  () => DeleteInputSecurityGroupRequest,
  () => DeleteInputSecurityGroupResponse
);
