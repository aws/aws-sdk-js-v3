// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _iN, _o, _SIR, _SIRt, _SIt, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StartInstanceRequest = struct(n0, _SIR, 0, [_iN], [0]);
export var StartInstanceResult = struct(n0, _SIRt, 0, [_o], [() => OperationList]);
export var StartInstance = op(
  n0,
  _SIt,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/StartInstance", 200],
  },
  () => StartInstanceRequest,
  () => StartInstanceResult
);
