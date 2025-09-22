// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  NotNodeException as __NotNodeException,
  UnsupportedIndexTypeException as __UnsupportedIndexTypeException,
} from "../models/index";
import {
  _AO,
  _AOI,
  _AOR,
  _AORt,
  _C,
  _c,
  _CL,
  _CR,
  _DA,
  _DO,
  _DOI,
  _DORet,
  _DOReta,
  _e,
  _h,
  _hE,
  _hH,
  _LN,
  _LOC,
  _LOCR,
  _LOCRi,
  _M,
  _MR,
  _NNE,
  _NT,
  _OI,
  _OIALNL,
  _OIALNT,
  _OR,
  _PR,
  _UITE,
  _xacl,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachObjectRequest = struct(
  n0,
  _AOR,
  0,
  [_DA, _PR, _CR, _LN],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectReference,
    0,
  ]
);
export var AttachObjectResponse = struct(n0, _AORt, 0, [_AOI], [0]);
export var DetachObjectRequest = struct(
  n0,
  _DORet,
  0,
  [_DA, _PR, _LN],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    0,
  ]
);
export var DetachObjectResponse = struct(n0, _DOReta, 0, [_DOI], [0]);
export var ListObjectChildrenRequest = struct(
  n0,
  _LOCR,
  0,
  [_DA, _OR, _NT, _MR, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    0,
    1,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
  ]
);
export var ListObjectChildrenResponse = struct(n0, _LOCRi, 0, [_C, _NT], [128 | 0, 0]);
export var NotNodeException = error(
  n0,
  _NNE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __NotNodeException
);
export var ObjectIdentifierAndLinkNameTuple = struct(n0, _OIALNT, 0, [_OI, _LN], [0, 0]);
export var UnsupportedIndexTypeException = error(
  n0,
  _UITE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedIndexTypeException
);
export var ObjectIdentifierAndLinkNameList = list(n0, _OIALNL, 0, () => ObjectIdentifierAndLinkNameTuple);
export var LinkNameToObjectIdentifierMap = 128 | 0;

export var AttachObject = op(
  n0,
  _AO,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/attach", 200],
  },
  () => AttachObjectRequest,
  () => AttachObjectResponse
);
export var DetachObject = op(
  n0,
  _DO,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/detach", 200],
  },
  () => DetachObjectRequest,
  () => DetachObjectResponse
);
export var ListObjectChildren = op(
  n0,
  _LOC,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/children", 200],
  },
  () => ListObjectChildrenRequest,
  () => ListObjectChildrenResponse
);
