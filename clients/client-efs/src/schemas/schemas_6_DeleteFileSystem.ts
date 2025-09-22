// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { FileSystemInUse as __FileSystemInUse } from "../models/index";
import { _c, _DFS, _DFSR, _e, _EC, _FSI, _FSIU, _h, _hE, _M, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFileSystemRequest = struct(n0, _DFSR, 0, [_FSI], [[0, 1]]);
export var FileSystemInUse = error(
  n0,
  _FSIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __FileSystemInUse
);
export var DeleteFileSystem = op(
  n0,
  _DFS,
  {
    [_h]: ["DELETE", "/2015-02-01/file-systems/{FileSystemId}", 204],
  },
  () => DeleteFileSystemRequest,
  () => Unit
);
