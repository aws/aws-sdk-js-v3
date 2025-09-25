// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGi, _DGIi, _DGOi, _GARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableGatewayInput = struct(n0, _DGIi, 0, [_GARN], [0]);
export var DisableGatewayOutput = struct(n0, _DGOi, 0, [_GARN], [0]);
export var DisableGateway = op(
  n0,
  _DGi,
  0,
  () => DisableGatewayInput,
  () => DisableGatewayOutput
);
