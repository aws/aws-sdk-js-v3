// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bS, _do, _GJD, _GJDR, _GJDRe, _h, _hQ, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetJobDocumentRequest = struct(
  n0,
  _GJDR,
  0,
  [_jI, _bS],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _bS,
      },
    ],
  ]
);
export var GetJobDocumentResponse = struct(n0, _GJDRe, 0, [_do], [0]);
export var GetJobDocument = op(
  n0,
  _GJD,
  {
    [_h]: ["GET", "/jobs/{jobId}/job-document", 200],
  },
  () => GetJobDocumentRequest,
  () => GetJobDocumentResponse
);
