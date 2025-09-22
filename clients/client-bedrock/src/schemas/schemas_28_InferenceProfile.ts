// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIP, _DIPR, _DIPRe, _ht, _iPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInferenceProfileRequest = struct(n0, _DIPR, 0, [_iPI], [[0, 1]]);
export var DeleteInferenceProfileResponse = struct(n0, _DIPRe, 0, [], []);
export var DeleteInferenceProfile = op(
  n0,
  _DIP,
  {
    [_ht]: ["DELETE", "/inference-profiles/{inferenceProfileIdentifier}", 200],
  },
  () => DeleteInferenceProfileRequest,
  () => DeleteInferenceProfileResponse
);
