// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _COo, _FR, _GDQM, _GDQMR, _GDQMRe, _PI, _SI, _SO, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDataQualityModelRequest = struct(n0, _GDQMR, 0, [_SI, _PI], [0, 0]);
export var GetDataQualityModelResponse = struct(n0, _GDQMRe, 0, [_St, _SO, _COo, _FR], [0, 4, 4, 0]);
export var GetDataQualityModel = op(
  n0,
  _GDQM,
  0,
  () => GetDataQualityModelRequest,
  () => GetDataQualityModelResponse
);
