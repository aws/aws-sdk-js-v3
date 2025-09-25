// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTJ, _DTJR, _h, _TJN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTranscriptionJobRequest = struct(n0, _DTJR, 0, [_TJN], [[0, 1]]);
export var DeleteTranscriptionJob = op(
  n0,
  _DTJ,
  {
    [_h]: ["DELETE", "/transcriptionjobs/{TranscriptionJobName}", 204],
  },
  () => DeleteTranscriptionJobRequest,
  () => Unit
);
