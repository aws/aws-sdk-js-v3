// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DirectoryNotSharedException as __DirectoryNotSharedException,
  InvalidTargetException as __InvalidTargetException,
} from "../models/index";
import { _c, _DI, _DNSE, _e, _I, _ITE, _M, _RI, _SDI, _Ty, _UD, _UDR, _UDRn, _UTn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DirectoryNotSharedException = error(
  n0,
  _DNSE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DirectoryNotSharedException
);
export var InvalidTargetException = error(
  n0,
  _ITE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __InvalidTargetException
);
export var UnshareDirectoryRequest = struct(n0, _UDR, 0, [_DI, _UTn], [0, () => UnshareTarget]);
export var UnshareDirectoryResult = struct(n0, _UDRn, 0, [_SDI], [0]);
export var UnshareTarget = struct(n0, _UTn, 0, [_I, _Ty], [0, 0]);
export var UnshareDirectory = op(
  n0,
  _UD,
  0,
  () => UnshareDirectoryRequest,
  () => UnshareDirectoryResult
);
