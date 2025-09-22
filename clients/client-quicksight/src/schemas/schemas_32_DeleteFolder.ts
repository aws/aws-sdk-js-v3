// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DFel, _DFR, _DFRe, _FI, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFolderRequest = struct(
  n0,
  _DFR,
  0,
  [_AAI, _FI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFolderResponse = struct(n0, _DFRe, 0, [_St, _Ar, _FI, _RI], [[1, 32], 0, 0, 0]);
export var DeleteFolder = op(
  n0,
  _DFel,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/folders/{FolderId}", 200],
  },
  () => DeleteFolderRequest,
  () => DeleteFolderResponse
);
