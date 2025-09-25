// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVL, _DVLR, _DVLRe, _ht, _VLI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpcLinkRequest = struct(n0, _DVLR, 0, [_VLI], [[0, 1]]);
export var DeleteVpcLinkResponse = struct(n0, _DVLRe, 0, [], []);
export var DeleteVpcLink = op(
  n0,
  _DVL,
  {
    [_ht]: ["DELETE", "/v2/vpclinks/{VpcLinkId}", 202],
  },
  () => DeleteVpcLinkRequest,
  () => DeleteVpcLinkResponse
);
