// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GLGF, _GLGFR, _GLGFRe, _LGF, _lGF, _LGFL, _lGI, _lGN, _n, _pe, _tim, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLogGroupFieldsRequest = struct(n0, _GLGFR, 0, [_lGN, _tim, _lGI], [0, 1, 0]);
export var GetLogGroupFieldsResponse = struct(n0, _GLGFRe, 0, [_lGF], [() => LogGroupFieldList]);
export var LogGroupField = struct(n0, _LGF, 0, [_n, _pe], [0, 1]);
export var LogGroupFieldList = list(n0, _LGFL, 0, () => LogGroupField);
export var GetLogGroupFields = op(
  n0,
  _GLGF,
  0,
  () => GetLogGroupFieldsRequest,
  () => GetLogGroupFieldsResponse
);
