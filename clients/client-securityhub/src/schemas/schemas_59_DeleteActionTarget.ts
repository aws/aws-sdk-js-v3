// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATA, _DATe, _DATR, _DATRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteActionTargetRequest = struct(n0, _DATR, 0, [_ATA], [[0, 1]]);
export var DeleteActionTargetResponse = struct(n0, _DATRe, 0, [_ATA], [0]);
export var DeleteActionTarget = op(
  n0,
  _DATe,
  {
    [_h]: ["DELETE", "/actionTargets/{ActionTargetArn+}", 200],
  },
  () => DeleteActionTargetRequest,
  () => DeleteActionTargetResponse
);
