// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATu, _CA, _CN, _ETx, _FA, _FI, _GCAT, _GCATI, _GCATO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetComputeAuthTokenInput = struct(n0, _GCATI, 0, [_FI, _CN], [0, 0]);
export var GetComputeAuthTokenOutput = struct(n0, _GCATO, 0, [_FI, _FA, _CN, _CA, _ATu, _ETx], [0, 0, 0, 0, 0, 4]);
export var GetComputeAuthToken = op(
  n0,
  _GCAT,
  0,
  () => GetComputeAuthTokenInput,
  () => GetComputeAuthTokenOutput
);
