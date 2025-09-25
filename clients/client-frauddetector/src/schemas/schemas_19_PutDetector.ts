// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dI, _eTN, _PD, _PDR, _PDRu, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var PutDetectorRequest = struct(n0, _PDR, 0, [_dI, _d, _eTN, _ta], [0, 0, 0, () => tagList]);
export var PutDetectorResult = struct(n0, _PDRu, 0, [], []);
export var PutDetector = op(
  n0,
  _PD,
  0,
  () => PutDetectorRequest,
  () => PutDetectorResult
);
