// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _cA, _COA, _cOA, _CV, _cV, _h, _jN, _TIT, _tIT, _UBT, _UBTR, _UBTRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateBrokerTypeRequest = struct(
  n0,
  _UBTR,
  0,
  [_CA, _CV, _TIT],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cV,
      },
    ],
    [
      0,
      {
        [_jN]: _tIT,
      },
    ],
  ]
);
export var UpdateBrokerTypeResponse = struct(
  n0,
  _UBTRp,
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
export var UpdateBrokerType = op(
  n0,
  _UBT,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/nodes/type", 200],
  },
  () => UpdateBrokerTypeRequest,
  () => UpdateBrokerTypeResponse
);
