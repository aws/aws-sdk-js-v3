// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aBI, _DI, _DIR, _DIRe, _h, _iI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIngestionRequest = struct(
  n0,
  _DIR,
  0,
  [_aBI, _iI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIngestionResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteIngestion = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/appbundles/{appBundleIdentifier}/ingestions/{ingestionIdentifier}", 204],
  },
  () => DeleteIngestionRequest,
  () => DeleteIngestionResponse
);
