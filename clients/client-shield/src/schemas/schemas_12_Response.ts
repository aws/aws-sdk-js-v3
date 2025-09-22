// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _B, _BA, _CA, _Co, _RAe, _RAesp, _UALAR, _UALARR, _UALARRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BlockAction = struct(n0, _BA, 0, [], []);
export var CountAction = struct(n0, _CA, 0, [], []);
export var ResponseAction = struct(n0, _RAesp, 0, [_B, _Co], [() => BlockAction, () => CountAction]);
export var UpdateApplicationLayerAutomaticResponseRequest = struct(
  n0,
  _UALARR,
  0,
  [_RAe, _A],
  [0, () => ResponseAction]
);
export var UpdateApplicationLayerAutomaticResponseResponse = struct(n0, _UALARRp, 0, [], []);
export var UpdateApplicationLayerAutomaticResponse = op(
  n0,
  _UALAR,
  0,
  () => UpdateApplicationLayerAutomaticResponseRequest,
  () => UpdateApplicationLayerAutomaticResponseResponse
);
