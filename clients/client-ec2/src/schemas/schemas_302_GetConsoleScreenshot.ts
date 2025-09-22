// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _GCS, _GCSR, _GCSRe, _iD, _IDm, _II, _iI, _WU, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetConsoleScreenshotRequest = struct(n0, _GCSR, 0, [_DR, _II, _WU], [2, 0, 2]);
export var GetConsoleScreenshotResult = struct(
  n0,
  _GCSRe,
  0,
  [_IDm, _II],
  [
    [
      0,
      {
        [_eQN]: `ImageData`,
        [_xN]: _iD,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
  ]
);
export var GetConsoleScreenshot = op(
  n0,
  _GCS,
  0,
  () => GetConsoleScreenshotRequest,
  () => GetConsoleScreenshotResult
);
