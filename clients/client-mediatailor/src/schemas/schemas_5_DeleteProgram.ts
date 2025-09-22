// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DP, _DPR, _DPRe, _h, _PN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProgramRequest = struct(
  n0,
  _DPR,
  0,
  [_CN, _PN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProgramResponse = struct(n0, _DPRe, 0, [], []);
export var DeleteProgram = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/channel/{ChannelName}/program/{ProgramName}", 200],
  },
  () => DeleteProgramRequest,
  () => DeleteProgramResponse
);
