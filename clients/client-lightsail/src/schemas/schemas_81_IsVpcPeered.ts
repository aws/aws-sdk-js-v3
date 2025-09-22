// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _iPs, _IVP, _IVPR, _IVPRs, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IsVpcPeeredRequest = struct(n0, _IVPR, 0, [], []);
export var IsVpcPeeredResult = struct(n0, _IVPRs, 0, [_iPs], [2]);
export var IsVpcPeered = op(
  n0,
  _IVP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/IsVpcPeered", 200],
  },
  () => IsVpcPeeredRequest,
  () => IsVpcPeeredResult
);
