// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DALAR, _DALARR, _DALARRi, _RAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableApplicationLayerAutomaticResponseRequest = struct(n0, _DALARR, 0, [_RAe], [0]);
export var DisableApplicationLayerAutomaticResponseResponse = struct(n0, _DALARRi, 0, [], []);
export var DisableApplicationLayerAutomaticResponse = op(
  n0,
  _DALAR,
  0,
  () => DisableApplicationLayerAutomaticResponseRequest,
  () => DisableApplicationLayerAutomaticResponseResponse
);
