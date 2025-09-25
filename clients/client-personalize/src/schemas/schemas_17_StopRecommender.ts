// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _rAec, _SRRto, _SRRtop, _SRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopRecommenderRequest = struct(n0, _SRRto, 0, [_rAec], [0]);
export var StopRecommenderResponse = struct(n0, _SRRtop, 0, [_rAec], [0]);
export var StopRecommender = op(
  n0,
  _SRt,
  2,
  () => StopRecommenderRequest,
  () => StopRecommenderResponse
);
