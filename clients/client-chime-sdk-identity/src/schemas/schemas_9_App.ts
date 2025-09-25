// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _AIA, _h, _M, _N, _NERN, _UAI, _UAIR, _UAIRp, n0 } from "./schemas_0";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var NonEmptyResourceName = sim(n0, _NERN, 0, 8);
export var UpdateAppInstanceRequest = struct(
  n0,
  _UAIR,
  0,
  [_AIA, _N, _M],
  [
    [0, 1],
    [() => NonEmptyResourceName, 0],
    [() => Metadata, 0],
  ]
);
export var UpdateAppInstanceResponse = struct(n0, _UAIRp, 0, [_AIA], [0]);
export var UpdateAppInstance = op(
  n0,
  _UAI,
  {
    [_h]: ["PUT", "/app-instances/{AppInstanceArn}", 200],
  },
  () => UpdateAppInstanceRequest,
  () => UpdateAppInstanceResponse
);
