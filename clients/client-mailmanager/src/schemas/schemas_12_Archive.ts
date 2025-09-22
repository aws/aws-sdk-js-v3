// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SASRto, _SASRtop, _SASt, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopArchiveSearchRequest = struct(n0, _SASRto, 0, [_SI], [0]);
export var StopArchiveSearchResponse = struct(n0, _SASRtop, 0, [], []);
export var StopArchiveSearch = op(
  n0,
  _SASt,
  2,
  () => StopArchiveSearchRequest,
  () => StopArchiveSearchResponse
);
