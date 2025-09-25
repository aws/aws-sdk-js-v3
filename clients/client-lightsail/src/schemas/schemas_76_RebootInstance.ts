// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _iN, _o, _RI, _RIR, _RIRe, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootInstanceRequest = struct(n0, _RIR, 0, [_iN], [0]);
export var RebootInstanceResult = struct(n0, _RIRe, 0, [_o], [() => OperationList]);
export var RebootInstance = op(
  n0,
  _RI,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/RebootInstance", 200],
  },
  () => RebootInstanceRequest,
  () => RebootInstanceResult
);
