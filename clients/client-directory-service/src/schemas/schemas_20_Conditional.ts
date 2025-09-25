// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCF, _DCFR, _DCFRe, _DI, _RDN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConditionalForwarderRequest = struct(n0, _DCFR, 0, [_DI, _RDN], [0, 0]);
export var DeleteConditionalForwarderResult = struct(n0, _DCFRe, 0, [], []);
export var DeleteConditionalForwarder = op(
  n0,
  _DCF,
  0,
  () => DeleteConditionalForwarderRequest,
  () => DeleteConditionalForwarderResult
);
