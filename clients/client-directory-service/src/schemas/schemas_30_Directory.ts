// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DirectoryAlreadySharedException as __DirectoryAlreadySharedException } from "../models/index";
import { _c, _DASE, _e, _M, _RI, _RSD, _RSDR, _RSDRe, _SDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DirectoryAlreadySharedException = error(
  n0,
  _DASE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DirectoryAlreadySharedException
);
export var RejectSharedDirectoryRequest = struct(n0, _RSDR, 0, [_SDI], [0]);
export var RejectSharedDirectoryResult = struct(n0, _RSDRe, 0, [_SDI], [0]);
export var RejectSharedDirectory = op(
  n0,
  _RSD,
  0,
  () => RejectSharedDirectoryRequest,
  () => RejectSharedDirectoryResult
);
