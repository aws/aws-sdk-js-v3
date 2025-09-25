// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fam, _fP, _LTDF, _LTDFR, _LTDFRi, _mRa, _nT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTaskDefinitionFamiliesRequest = struct(n0, _LTDFR, 0, [_fP, _s, _nT, _mRa], [0, 0, 0, 1]);
export var ListTaskDefinitionFamiliesResponse = struct(n0, _LTDFRi, 0, [_fam, _nT], [64 | 0, 0]);
export var ListTaskDefinitionFamilies = op(
  n0,
  _LTDF,
  0,
  () => ListTaskDefinitionFamiliesRequest,
  () => ListTaskDefinitionFamiliesResponse
);
