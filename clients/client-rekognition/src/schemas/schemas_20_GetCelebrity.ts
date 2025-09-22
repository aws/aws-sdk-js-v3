// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GCI, _GCIR, _GCIRe, _I, _KG, _N, _Ty, _U, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCelebrityInfoRequest = struct(n0, _GCIR, 0, [_I], [0]);
export var GetCelebrityInfoResponse = struct(n0, _GCIRe, 0, [_U, _N, _KG], [64 | 0, 0, () => KnownGender]);
export var KnownGender = struct(n0, _KG, 0, [_Ty], [0]);
export var Urls = 64 | 0;

export var GetCelebrityInfo = op(
  n0,
  _GCI,
  0,
  () => GetCelebrityInfoRequest,
  () => GetCelebrityInfoResponse
);
