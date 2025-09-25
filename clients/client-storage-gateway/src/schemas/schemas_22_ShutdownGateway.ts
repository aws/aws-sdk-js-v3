// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _SG, _SGI, _SGO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ShutdownGatewayInput = struct(n0, _SGI, 0, [_GARN], [0]);
export var ShutdownGatewayOutput = struct(n0, _SGO, 0, [_GARN], [0]);
export var ShutdownGateway = op(
  n0,
  _SG,
  0,
  () => ShutdownGatewayInput,
  () => ShutdownGatewayOutput
);
