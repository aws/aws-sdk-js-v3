// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIel, _DIRel, _DIRele, _h, _IAns, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInsightRequest = struct(n0, _DIRel, 0, [_IAns], [[0, 1]]);
export var DeleteInsightResponse = struct(n0, _DIRele, 0, [_IAns], [0]);
export var DeleteInsight = op(
  n0,
  _DIel,
  {
    [_h]: ["DELETE", "/insights/{InsightArn+}", 200],
  },
  () => DeleteInsightRequest,
  () => DeleteInsightResponse
);
