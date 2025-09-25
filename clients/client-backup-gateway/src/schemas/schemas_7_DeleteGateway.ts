// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGI, _DGO, _GA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGatewayInput = struct(n0, _DGI, 0, [_GA], [0]);
export var DeleteGatewayOutput = struct(n0, _DGO, 0, [_GA], [0]);
export var DeleteGateway = op(
  n0,
  _DG,
  2,
  () => DeleteGatewayInput,
  () => DeleteGatewayOutput
);
