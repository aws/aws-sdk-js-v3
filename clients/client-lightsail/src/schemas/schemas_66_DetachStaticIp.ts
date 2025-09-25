// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSIe, _DSIR, _DSIRe, _ht, _o, _sIN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachStaticIpRequest = struct(n0, _DSIR, 0, [_sIN], [0]);
export var DetachStaticIpResult = struct(n0, _DSIRe, 0, [_o], [() => OperationList]);
export var DetachStaticIp = op(
  n0,
  _DSIe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DetachStaticIp", 200],
  },
  () => DetachStaticIpRequest,
  () => DetachStaticIpResult
);
