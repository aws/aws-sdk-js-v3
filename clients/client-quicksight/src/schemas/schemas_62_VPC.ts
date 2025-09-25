// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _ASv, _DSe, _DVPCC, _DVPCCR, _DVPCCRe, _h, _RI, _St, _VPCCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVPCConnectionRequest = struct(
  n0,
  _DVPCCR,
  0,
  [_AAI, _VPCCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVPCConnectionResponse = struct(
  n0,
  _DVPCCRe,
  0,
  [_Ar, _VPCCI, _DSe, _ASv, _RI, _St],
  [0, 0, 0, 0, 0, [1, 32]]
);
export var DeleteVPCConnection = op(
  n0,
  _DVPCC,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/vpc-connections/{VPCConnectionId}", 200],
  },
  () => DeleteVPCConnectionRequest,
  () => DeleteVPCConnectionResponse
);
