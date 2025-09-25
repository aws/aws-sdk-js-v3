// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _SGIt, _SGOt, _SGt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartGatewayInput = struct(n0, _SGIt, 0, [_GARN], [0]);
export var StartGatewayOutput = struct(n0, _SGOt, 0, [_GARN], [0]);
export var StartGateway = op(
  n0,
  _SGt,
  0,
  () => StartGatewayInput,
  () => StartGatewayOutput
);
