// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASI, _ASIR, _ASIRl, _ht, _o, _sIN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var AllocateStaticIpRequest = struct(n0, _ASIR, 0, [_sIN], [0]);
export var AllocateStaticIpResult = struct(n0, _ASIRl, 0, [_o], [() => OperationList]);
export var AllocateStaticIp = op(
  n0,
  _ASI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AllocateStaticIp", 200],
  },
  () => AllocateStaticIpRequest,
  () => AllocateStaticIpResult
);
