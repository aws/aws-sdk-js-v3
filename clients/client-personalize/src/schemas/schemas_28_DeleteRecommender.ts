// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _rAec, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRecommenderRequest = struct(n0, _DRR, 0, [_rAec], [0]);
export var DeleteRecommender = op(
  n0,
  _DR,
  2,
  () => DeleteRecommenderRequest,
  () => Unit
);
