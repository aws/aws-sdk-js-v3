// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVL, _DVLR, _ht, _vLI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcLinkRequest = struct(n0, _DVLR, 0, [_vLI], [[0, 1]]);
export var DeleteVpcLink = op(
  n0,
  _DVL,
  {
    [_ht]: ["DELETE", "/vpclinks/{vpcLinkId}", 202],
  },
  () => DeleteVpcLinkRequest,
  () => Unit
);
