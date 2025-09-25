// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _RSI, _RSIR, _RSIRe, _sIN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var ReleaseStaticIpRequest = struct(n0, _RSIR, 0, [_sIN], [0]);
export var ReleaseStaticIpResult = struct(n0, _RSIRe, 0, [_o], [() => OperationList]);
export var ReleaseStaticIp = op(
  n0,
  _RSI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/ReleaseStaticIp", 200],
  },
  () => ReleaseStaticIpRequest,
  () => ReleaseStaticIpResult
);
