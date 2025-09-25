// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CWEJ, _CWEJR, _CWEJRa, _h, _jo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelWorldExportJobRequest = struct(n0, _CWEJR, 0, [_jo], [0]);
export var CancelWorldExportJobResponse = struct(n0, _CWEJRa, 0, [], []);
export var CancelWorldExportJob = op(
  n0,
  _CWEJ,
  {
    [_h]: ["POST", "/cancelWorldExportJob", 200],
  },
  () => CancelWorldExportJobRequest,
  () => CancelWorldExportJobResponse
);
