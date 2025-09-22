// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSP, _DSPR, _DSPRe, _end, _fI, _h, _sPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStorageProfileRequest = struct(
  n0,
  _DSPR,
  0,
  [_fI, _sPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteStorageProfileResponse = struct(n0, _DSPRe, 0, [], []);
export var DeleteStorageProfile = op(
  n0,
  _DSP,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/storage-profiles/{storageProfileId}", 200],
    [_end]: ["management."],
  },
  () => DeleteStorageProfileRequest,
  () => DeleteStorageProfileResponse
);
