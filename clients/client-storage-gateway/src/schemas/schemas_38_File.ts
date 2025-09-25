// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AG, _AGI, _AGO, _AK, _GARN, _GN, _GR, _GT, _GTa, _MCT, _T, _TDT, n0, Tags } from "./schemas_0";

/* eslint no-var: 0 */

export var ActivateGatewayInput = struct(
  n0,
  _AGI,
  0,
  [_AK, _GN, _GT, _GR, _GTa, _TDT, _MCT, _T],
  [0, 0, 0, 0, 0, 0, 0, () => Tags]
);
export var ActivateGatewayOutput = struct(n0, _AGO, 0, [_GARN], [0]);
export var ActivateGateway = op(
  n0,
  _AG,
  0,
  () => ActivateGatewayInput,
  () => ActivateGatewayOutput
);
