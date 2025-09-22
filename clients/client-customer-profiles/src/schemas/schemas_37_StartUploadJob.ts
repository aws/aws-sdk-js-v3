// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _h, _JI, _SUJ, _SUJR, _SUJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartUploadJobRequest = struct(
  n0,
  _SUJR,
  0,
  [_DN, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StartUploadJobResponse = struct(n0, _SUJRt, 0, [], []);
export var StartUploadJob = op(
  n0,
  _SUJ,
  {
    [_h]: ["PUT", "/domains/{DomainName}/upload-jobs/{JobId}", 200],
  },
  () => StartUploadJobRequest,
  () => StartUploadJobResponse
);
