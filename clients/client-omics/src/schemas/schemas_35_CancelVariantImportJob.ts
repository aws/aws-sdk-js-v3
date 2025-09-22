// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CVIJ, _CVIR, _CVIRa, _end, _ht, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelVariantImportRequest = struct(n0, _CVIR, 0, [_jI], [[0, 1]]);
export var CancelVariantImportResponse = struct(n0, _CVIRa, 0, [], []);
export var CancelVariantImportJob = op(
  n0,
  _CVIJ,
  {
    [_ht]: ["DELETE", "/import/variant/{jobId}", 200],
    [_end]: ["analytics-"],
  },
  () => CancelVariantImportRequest,
  () => CancelVariantImportResponse
);
