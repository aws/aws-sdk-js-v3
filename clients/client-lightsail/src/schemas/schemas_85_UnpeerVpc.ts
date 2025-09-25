// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _op, _UV, _UVR, _UVRn, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var UnpeerVpcRequest = struct(n0, _UVR, 0, [], []);
export var UnpeerVpcResult = struct(n0, _UVRn, 0, [_op], [() => Operation]);
export var UnpeerVpc = op(
  n0,
  _UV,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UnpeerVpc", 200],
  },
  () => UnpeerVpcRequest,
  () => UnpeerVpcResult
);
