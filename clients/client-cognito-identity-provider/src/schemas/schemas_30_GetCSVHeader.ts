// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSVH, _GCSVH, _GCSVHR, _GCSVHRe, _UPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCSVHeaderRequest = struct(n0, _GCSVHR, 0, [_UPI], [0]);
export var GetCSVHeaderResponse = struct(n0, _GCSVHRe, 0, [_UPI, _CSVH], [0, 64 | 0]);
export var ListOfStringTypes = 64 | 0;

export var GetCSVHeader = op(
  n0,
  _GCSVH,
  0,
  () => GetCSVHeaderRequest,
  () => GetCSVHeaderResponse
);
