// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASIRt, _ASIRtt, _ASIt, _ht, _iN, _o, _sIN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachStaticIpRequest = struct(n0, _ASIRt, 0, [_sIN, _iN], [0, 0]);
export var AttachStaticIpResult = struct(n0, _ASIRtt, 0, [_o], [() => OperationList]);
export var AttachStaticIp = op(
  n0,
  _ASIt,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AttachStaticIp", 200],
  },
  () => AttachStaticIpRequest,
  () => AttachStaticIpResult
);
