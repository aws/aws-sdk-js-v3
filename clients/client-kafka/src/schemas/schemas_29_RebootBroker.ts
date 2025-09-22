// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BIr, _bIr, _CA, _cA, _COA, _cOA, _h, _jN, _RB, _RBR, _RBRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootBrokerRequest = struct(
  n0,
  _RBR,
  0,
  [_BIr, _CA],
  [
    [
      64 | 0,
      {
        [_jN]: _bIr,
      },
    ],
    [0, 1],
  ]
);
export var RebootBrokerResponse = struct(
  n0,
  _RBRe,
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
export var RebootBroker = op(
  n0,
  _RB,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/reboot-broker", 200],
  },
  () => RebootBrokerRequest,
  () => RebootBrokerResponse
);
