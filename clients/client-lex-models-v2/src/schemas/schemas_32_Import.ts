// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _h, _iIm, _iSm, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImportRequest = struct(n0, _DIR, 0, [_iIm], [[0, 1]]);
export var DeleteImportResponse = struct(n0, _DIRe, 0, [_iIm, _iSm], [0, 0]);
export var DeleteImport = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/imports/{importId}", 202],
  },
  () => DeleteImportRequest,
  () => DeleteImportResponse
);
