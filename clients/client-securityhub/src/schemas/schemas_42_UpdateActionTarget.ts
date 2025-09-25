// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATA, _D, _h, _N, _UAT, _UATR, _UATRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateActionTargetRequest = struct(n0, _UATR, 0, [_ATA, _N, _D], [[0, 1], 0, 0]);
export var UpdateActionTargetResponse = struct(n0, _UATRp, 0, [], []);
export var UpdateActionTarget = op(
  n0,
  _UAT,
  {
    [_h]: ["PATCH", "/actionTargets/{ActionTargetArn+}", 200],
  },
  () => UpdateActionTargetRequest,
  () => UpdateActionTargetResponse
);
