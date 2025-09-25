// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _h, _jN, _RCVC, _RCVCR, _RCVCRe, _VCA, _vCA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectClientVpcConnectionRequest = struct(
  n0,
  _RCVCR,
  0,
  [_CA, _VCA],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _vCA,
      },
    ],
  ]
);
export var RejectClientVpcConnectionResponse = struct(n0, _RCVCRe, 0, [], []);
export var RejectClientVpcConnection = op(
  n0,
  _RCVC,
  {
    [_h]: ["PUT", "/v1/clusters/{ClusterArn}/client-vpc-connection", 200],
  },
  () => RejectClientVpcConnectionRequest,
  () => RejectClientVpcConnectionResponse
);
