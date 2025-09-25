// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMG, _DMGR, _DMGRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMulticastGroupRequest = struct(n0, _DMGR, 0, [_I], [[0, 1]]);
export var DeleteMulticastGroupResponse = struct(n0, _DMGRe, 0, [], []);
export var DeleteMulticastGroup = op(
  n0,
  _DMG,
  {
    [_h]: ["DELETE", "/multicast-groups/{Id}", 204],
  },
  () => DeleteMulticastGroupRequest,
  () => DeleteMulticastGroupResponse
);
