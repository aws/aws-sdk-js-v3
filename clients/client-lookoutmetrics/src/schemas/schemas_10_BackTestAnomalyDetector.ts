// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADA, _BTAD, _BTADR, _BTADRa, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BackTestAnomalyDetectorRequest = struct(n0, _BTADR, 0, [_ADA], [0]);
export var BackTestAnomalyDetectorResponse = struct(n0, _BTADRa, 0, [], []);
export var BackTestAnomalyDetector = op(
  n0,
  _BTAD,
  {
    [_h]: ["POST", "/BackTestAnomalyDetector", 200],
  },
  () => BackTestAnomalyDetectorRequest,
  () => BackTestAnomalyDetectorResponse
);
