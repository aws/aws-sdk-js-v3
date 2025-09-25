// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _FS, _FSI, _RFSNVL, _RFSNVLR, _RFSNVLRe, FileSystem, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ReleaseFileSystemNfsV3LocksRequest = struct(n0, _RFSNVLR, 0, [_FSI, _CRT], [0, [0, 4]]);
export var ReleaseFileSystemNfsV3LocksResponse = struct(n0, _RFSNVLRe, 0, [_FS], [[() => FileSystem, 0]]);
export var ReleaseFileSystemNfsV3Locks = op(
  n0,
  _RFSNVL,
  2,
  () => ReleaseFileSystemNfsV3LocksRequest,
  () => ReleaseFileSystemNfsV3LocksResponse
);
