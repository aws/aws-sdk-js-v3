// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DirectoryDeletedException as __DirectoryDeletedException,
  DirectoryNotDisabledException as __DirectoryNotDisabledException,
} from "../models/index";
import {
  _c,
  _DA,
  _DD,
  _DDE,
  _DDi,
  _DDR,
  _DDRe,
  _DDRi,
  _DDRis,
  _DNDE,
  _e,
  _ED,
  _EDR,
  _EDRn,
  _h,
  _hE,
  _hH,
  _M,
  _xadp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDirectoryRequest = struct(
  n0,
  _DDR,
  0,
  [_DA],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var DeleteDirectoryResponse = struct(n0, _DDRe, 0, [_DA], [0]);
export var DirectoryDeletedException = error(
  n0,
  _DDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __DirectoryDeletedException
);
export var DirectoryNotDisabledException = error(
  n0,
  _DNDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __DirectoryNotDisabledException
);
export var DisableDirectoryRequest = struct(
  n0,
  _DDRi,
  0,
  [_DA],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var DisableDirectoryResponse = struct(n0, _DDRis, 0, [_DA], [0]);
export var EnableDirectoryRequest = struct(
  n0,
  _EDR,
  0,
  [_DA],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var EnableDirectoryResponse = struct(n0, _EDRn, 0, [_DA], [0]);
export var DeleteDirectory = op(
  n0,
  _DD,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/directory", 200],
  },
  () => DeleteDirectoryRequest,
  () => DeleteDirectoryResponse
);
export var DisableDirectory = op(
  n0,
  _DDi,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/directory/disable", 200],
  },
  () => DisableDirectoryRequest,
  () => DisableDirectoryResponse
);
export var EnableDirectory = op(
  n0,
  _ED,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/directory/enable", 200],
  },
  () => EnableDirectoryRequest,
  () => EnableDirectoryResponse
);
