// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _h, _JI, _SUJRto, _SUJRtop, _SUJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopUploadJobRequest = struct(
  n0,
  _SUJRto,
  0,
  [_DN, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopUploadJobResponse = struct(n0, _SUJRtop, 0, [], []);
export var StopUploadJob = op(
  n0,
  _SUJt,
  {
    [_h]: ["PUT", "/domains/{DomainName}/upload-jobs/{JobId}/stop", 200],
  },
  () => StopUploadJobRequest,
  () => StopUploadJobResponse
);
