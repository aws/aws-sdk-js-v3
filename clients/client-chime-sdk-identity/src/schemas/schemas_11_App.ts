// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AIUA, _h, _M, _N, _UAIU, _UAIUR, _UAIURp, _UN, n0 } from "./schemas_0";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var UserName = sim(n0, _UN, 0, 8);
export var UpdateAppInstanceUserRequest = struct(
  n0,
  _UAIUR,
  0,
  [_AIUA, _N, _M],
  [
    [0, 1],
    [() => UserName, 0],
    [() => Metadata, 0],
  ]
);
export var UpdateAppInstanceUserResponse = struct(n0, _UAIURp, 0, [_AIUA], [0]);
export var UpdateAppInstanceUser = op(
  n0,
  _UAIU,
  {
    [_h]: ["PUT", "/app-instance-users/{AppInstanceUserArn}", 200],
  },
  () => UpdateAppInstanceUserRequest,
  () => UpdateAppInstanceUserResponse
);
