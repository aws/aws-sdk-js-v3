// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _ma, _pa, _pay, _TSP, _TSPR, _TSPRe, JsonValue, n0 } from "./schemas_0";
import { SegmentPattern } from "./schemas_16_Segment";

/* eslint no-var: 0 */

export var TestSegmentPatternRequest = struct(
  n0,
  _TSPR,
  0,
  [_pa, _pay],
  [
    [() => SegmentPattern, 0],
    [() => JsonValue, 0],
  ]
);
export var TestSegmentPatternResponse = struct(n0, _TSPRe, 0, [_ma], [2]);
export var TestSegmentPattern = op(
  n0,
  _TSP,
  {
    [_h]: ["POST", "/test-segment-pattern", 200],
  },
  () => TestSegmentPatternRequest,
  () => TestSegmentPatternResponse
);
