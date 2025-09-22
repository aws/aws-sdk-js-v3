// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSL, _DSLR, _DSLRe, _h, _sLA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSessionLoggerRequest = struct(n0, _DSLR, 0, [_sLA], [[0, 1]]);
export var DeleteSessionLoggerResponse = struct(n0, _DSLRe, 0, [], []);
export var DeleteSessionLogger = op(
  n0,
  _DSL,
  {
    [_h]: ["DELETE", "/sessionLoggers/{sessionLoggerArn+}", 200],
  },
  () => DeleteSessionLoggerRequest,
  () => DeleteSessionLoggerResponse
);
