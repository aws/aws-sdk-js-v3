// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _dNo, _eT, _GAL, _GALR, _GALRe, _h, _lU, _sT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GenerateAccessLogsRequest = struct(n0, _GALR, 0, [_sT, _eT, _dNo, _aI], [4, 4, 0, [0, 1]]);
export var GenerateAccessLogsResult = struct(n0, _GALRe, 0, [_lU], [0]);
export var GenerateAccessLogs = op(
  n0,
  _GAL,
  {
    [_h]: ["POST", "/apps/{appId}/accesslogs", 200],
  },
  () => GenerateAccessLogsRequest,
  () => GenerateAccessLogsResult
);
