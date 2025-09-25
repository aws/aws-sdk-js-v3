// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTl, _DN, _GUJP, _GUJPR, _GUJPRe, _h, _JI, _jN, _Ur, _VU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUploadJobPathRequest = struct(
  n0,
  _GUJPR,
  0,
  [_DN, _JI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUploadJobPathResponse = struct(
  n0,
  _GUJPRe,
  0,
  [_Ur, _CTl, _VU],
  [
    [
      0,
      {
        [_jN]: _Ur,
      },
    ],
    [
      0,
      {
        [_jN]: _CTl,
      },
    ],
    [
      4,
      {
        [_jN]: _VU,
      },
    ],
  ]
);
export var GetUploadJobPath = op(
  n0,
  _GUJP,
  {
    [_h]: ["GET", "/domains/{DomainName}/upload-jobs/{JobId}/path", 200],
  },
  () => GetUploadJobPathRequest,
  () => GetUploadJobPathResponse
);
