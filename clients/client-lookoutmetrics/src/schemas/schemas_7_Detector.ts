// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADA, _ADC, _ADD, _ADF, _h, _KKA, _UAD, _UADR, _UADRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyDetectorConfig = struct(n0, _ADC, 0, [_ADF], [0]);
export var UpdateAnomalyDetectorRequest = struct(
  n0,
  _UADR,
  0,
  [_ADA, _KKA, _ADD, _ADC],
  [0, 0, 0, () => AnomalyDetectorConfig]
);
export var UpdateAnomalyDetectorResponse = struct(n0, _UADRp, 0, [_ADA], [0]);
export var UpdateAnomalyDetector = op(
  n0,
  _UAD,
  {
    [_h]: ["POST", "/UpdateAnomalyDetector", 200],
  },
  () => UpdateAnomalyDetectorRequest,
  () => UpdateAnomalyDetectorResponse
);
