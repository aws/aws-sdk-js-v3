// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { DirectoryAlreadyExistsException as __DirectoryAlreadyExistsException } from "../models/index";
import {
  _ASA,
  _c,
  _CD,
  _CDR,
  _CDRr,
  _CDT,
  _D,
  _DA,
  _DAEE,
  _Di,
  _DL,
  _e,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _hE,
  _hH,
  _LD,
  _LDR,
  _LDRi,
  _M,
  _MR,
  _N,
  _NT,
  _OI,
  _S,
  _SA,
  _st,
  _xadp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDirectoryRequest = struct(
  n0,
  _CDR,
  0,
  [_N, _SA],
  [
    0,
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var CreateDirectoryResponse = struct(n0, _CDRr, 0, [_DA, _N, _OI, _ASA], [0, 0, 0, 0]);
export var Directory = struct(n0, _D, 0, [_N, _DA, _S, _CDT], [0, 0, 0, 4]);
export var DirectoryAlreadyExistsException = error(
  n0,
  _DAEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __DirectoryAlreadyExistsException
);
export var GetDirectoryRequest = struct(
  n0,
  _GDR,
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
export var GetDirectoryResponse = struct(n0, _GDRe, 0, [_D], [() => Directory]);
export var ListDirectoriesRequest = struct(n0, _LDR, 0, [_NT, _MR, _st], [0, 1, 0]);
export var ListDirectoriesResponse = struct(n0, _LDRi, 0, [_Di, _NT], [() => DirectoryList, 0]);
export var DirectoryList = list(n0, _DL, 0, () => Directory);
export var CreateDirectory = op(
  n0,
  _CD,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/directory/create", 200],
  },
  () => CreateDirectoryRequest,
  () => CreateDirectoryResponse
);
export var GetDirectory = op(
  n0,
  _GD,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/directory/get", 200],
  },
  () => GetDirectoryRequest,
  () => GetDirectoryResponse
);
export var ListDirectories = op(
  n0,
  _LD,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/directory/list", 200],
  },
  () => ListDirectoriesRequest,
  () => ListDirectoriesResponse
);
