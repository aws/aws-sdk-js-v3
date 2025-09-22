// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fP, _LTD, _LTDR, _LTDRi, _mRa, _nT, _s, _so, _tDA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTaskDefinitionsRequest = struct(n0, _LTDR, 0, [_fP, _s, _so, _nT, _mRa], [0, 0, 0, 0, 1]);
export var ListTaskDefinitionsResponse = struct(n0, _LTDRi, 0, [_tDA, _nT], [64 | 0, 0]);
export var ListTaskDefinitions = op(
  n0,
  _LTD,
  0,
  () => ListTaskDefinitionsRequest,
  () => ListTaskDefinitionsResponse
);
