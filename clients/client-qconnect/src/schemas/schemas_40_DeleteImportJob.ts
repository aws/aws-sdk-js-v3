// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIJ, _DIJR, _DIJRe, _htt, _iJI, _kBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImportJobRequest = struct(
  n0,
  _DIJR,
  0,
  [_kBI, _iJI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteImportJobResponse = struct(n0, _DIJRe, 0, [], []);
export var DeleteImportJob = op(
  n0,
  _DIJ,
  {
    [_htt]: ["DELETE", "/knowledgeBases/{knowledgeBaseId}/importJobs/{importJobId}", 204],
  },
  () => DeleteImportJobRequest,
  () => DeleteImportJobResponse
);
