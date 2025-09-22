// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bN, _CJT, _CJTR, _CJTRo, _end, _fI, _h, _jI, _k, _qI, _SL, _tSL, _tT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CopyJobTemplateRequest = struct(
  n0,
  _CJTR,
  0,
  [_fI, _jI, _qI, _tSL],
  [[0, 1], [0, 1], [0, 1], () => S3Location]
);
export var CopyJobTemplateResponse = struct(n0, _CJTRo, 0, [_tT], [0]);
export var S3Location = struct(n0, _SL, 0, [_bN, _k], [0, 0]);
export var CopyJobTemplate = op(
  n0,
  _CJT,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/template", 200],
    [_end]: ["management."],
  },
  () => CopyJobTemplateRequest,
  () => CopyJobTemplateResponse
);
