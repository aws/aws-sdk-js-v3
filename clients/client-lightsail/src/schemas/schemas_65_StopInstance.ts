// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _f, _ht, _iN, _o, _SIRto, _SIRtop, _SIto, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StopInstanceRequest = struct(n0, _SIRto, 0, [_iN, _f], [0, 2]);
export var StopInstanceResult = struct(n0, _SIRtop, 0, [_o], [() => OperationList]);
export var StopInstance = op(
  n0,
  _SIto,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/StopInstance", 200],
  },
  () => StopInstanceRequest,
  () => StopInstanceResult
);
