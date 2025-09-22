// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _cA, _COA, _cOA, _CV, _cV, _h, _jN, _TNOBN, _tNOBN, _UBC, _UBCR, _UBCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateBrokerCountRequest = struct(
  n0,
  _UBCR,
  0,
  [_CA, _CV, _TNOBN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      1,
      {
        [_jN]: _tNOBN,
      },
    ],
  ]
);
export var UpdateBrokerCountResponse = struct(
  n0,
  _UBCRp,
  0,
  [_CA, _COA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cOA,
      },
    ],
  ]
);
export var UpdateBrokerCount = op(
  n0,
  _UBC,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/nodes/count", 200],
  },
  () => UpdateBrokerCountRequest,
  () => UpdateBrokerCountResponse
);
