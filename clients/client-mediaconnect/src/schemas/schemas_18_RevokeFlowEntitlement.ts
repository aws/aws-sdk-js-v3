// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EA, _eA, _FA, _fA, _h, _jN, _RFE, _RFER, _RFERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RevokeFlowEntitlementRequest = struct(
  n0,
  _RFER,
  0,
  [_EA, _FA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RevokeFlowEntitlementResponse = struct(
  n0,
  _RFERe,
  0,
  [_EA, _FA],
  [
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
  ]
);
export var RevokeFlowEntitlement = op(
  n0,
  _RFE,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}", 202],
  },
  () => RevokeFlowEntitlementRequest,
  () => RevokeFlowEntitlementResponse
);
