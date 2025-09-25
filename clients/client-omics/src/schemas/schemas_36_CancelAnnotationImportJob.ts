// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAIJ, _CAIR, _CAIRa, _end, _ht, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelAnnotationImportRequest = struct(n0, _CAIR, 0, [_jI], [[0, 1]]);
export var CancelAnnotationImportResponse = struct(n0, _CAIRa, 0, [], []);
export var CancelAnnotationImportJob = op(
  n0,
  _CAIJ,
  {
    [_ht]: ["DELETE", "/import/annotation/{jobId}", 200],
    [_end]: ["analytics-"],
  },
  () => CancelAnnotationImportRequest,
  () => CancelAnnotationImportResponse
);
