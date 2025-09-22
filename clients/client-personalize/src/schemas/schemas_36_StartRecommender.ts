// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _rAec, _SR, _SRR, _SRRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartRecommenderRequest = struct(n0, _SRR, 0, [_rAec], [0]);
export var StartRecommenderResponse = struct(n0, _SRRt, 0, [_rAec], [0]);
export var StartRecommender = op(
  n0,
  _SR,
  2,
  () => StartRecommenderRequest,
  () => StartRecommenderResponse
);
