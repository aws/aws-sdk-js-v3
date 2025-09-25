// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _op, _PV, _PVR, _PVRe, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var PeerVpcRequest = struct(n0, _PVR, 0, [], []);
export var PeerVpcResult = struct(n0, _PVRe, 0, [_op], [() => Operation]);
export var PeerVpc = op(
  n0,
  _PV,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/PeerVpc", 200],
  },
  () => PeerVpcRequest,
  () => PeerVpcResult
);
