// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APIK, _DAPIK, _DAPIKR, _DAPIKRe, _Sc, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAPIKeyRequest = struct(n0, _DAPIKR, 0, [_Sc, _APIK], [0, 0]);
export var DeleteAPIKeyResponse = struct(n0, _DAPIKRe, 0, [], []);
export var DeleteAPIKey = op(
  n0,
  _DAPIK,
  0,
  () => DeleteAPIKeyRequest,
  () => DeleteAPIKeyResponse
);
