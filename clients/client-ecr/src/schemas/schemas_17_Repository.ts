// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _fi, _fT, _iTM, _ITMEF, _iTMEF, _ITMEFm, _PITM, _PITMR, _PITMRu, _rI, _rN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImageTagMutabilityExclusionFilter = struct(n0, _ITMEF, 0, [_fT, _fi], [0, 0]);
export var PutImageTagMutabilityRequest = struct(
  n0,
  _PITMR,
  0,
  [_rI, _rN, _iTM, _iTMEF],
  [0, 0, 0, () => ImageTagMutabilityExclusionFilters]
);
export var PutImageTagMutabilityResponse = struct(
  n0,
  _PITMRu,
  0,
  [_rI, _rN, _iTM, _iTMEF],
  [0, 0, 0, () => ImageTagMutabilityExclusionFilters]
);
export var ImageTagMutabilityExclusionFilters = list(n0, _ITMEFm, 0, () => ImageTagMutabilityExclusionFilter);
export var PutImageTagMutability = op(
  n0,
  _PITM,
  0,
  () => PutImageTagMutabilityRequest,
  () => PutImageTagMutabilityResponse
);
