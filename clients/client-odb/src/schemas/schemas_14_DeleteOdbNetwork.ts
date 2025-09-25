// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dAR, _DON, _DONI, _DONO, _oNI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOdbNetworkInput = struct(n0, _DONI, 0, [_oNI, _dAR], [[0, 1], 2]);
export var DeleteOdbNetworkOutput = struct(n0, _DONO, 0, [], []);
export var DeleteOdbNetwork = op(
  n0,
  _DON,
  2,
  () => DeleteOdbNetworkInput,
  () => DeleteOdbNetworkOutput
);
