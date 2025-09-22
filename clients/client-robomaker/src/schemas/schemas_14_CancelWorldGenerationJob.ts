// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CWGJ, _CWGJR, _CWGJRa, _h, _jo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelWorldGenerationJobRequest = struct(n0, _CWGJR, 0, [_jo], [0]);
export var CancelWorldGenerationJobResponse = struct(n0, _CWGJRa, 0, [], []);
export var CancelWorldGenerationJob = op(
  n0,
  _CWGJ,
  {
    [_h]: ["POST", "/cancelWorldGenerationJob", 200],
  },
  () => CancelWorldGenerationJobRequest,
  () => CancelWorldGenerationJobResponse
);
