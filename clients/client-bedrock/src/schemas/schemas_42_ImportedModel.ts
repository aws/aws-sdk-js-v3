// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIM, _DIMR, _DIMRe, _ht, _mI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImportedModelRequest = struct(n0, _DIMR, 0, [_mI], [[0, 1]]);
export var DeleteImportedModelResponse = struct(n0, _DIMRe, 0, [], []);
export var DeleteImportedModel = op(
  n0,
  _DIM,
  {
    [_ht]: ["DELETE", "/imported-models/{modelIdentifier}", 200],
  },
  () => DeleteImportedModelRequest,
  () => DeleteImportedModelResponse
);
