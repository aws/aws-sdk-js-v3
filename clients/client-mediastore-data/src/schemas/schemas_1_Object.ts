// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ContainerNotFoundException as __ContainerNotFoundException,
  InternalServerError as __InternalServerError,
  ObjectNotFoundException as __ObjectNotFoundException,
  RequestedRangeNotSatisfiableException as __RequestedRangeNotSatisfiableException,
} from "../models/index";
import {
  _B,
  _c,
  _CC,
  _CC_,
  _CL,
  _CL_,
  _CNFE,
  _CR,
  _CR_,
  _CSHA,
  _CT,
  _CT_,
  _DO,
  _DOe,
  _DOR,
  _DORe,
  _DORes,
  _DOResc,
  _e,
  _ET,
  _GO,
  _GOR,
  _GORe,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _IL,
  _ISE,
  _It,
  _LI,
  _LIR,
  _LIRi,
  _LM,
  _LM_,
  _M,
  _MR,
  _N,
  _NT,
  _ONFE,
  _P,
  _PB,
  _PO,
  _POR,
  _PORu,
  _R,
  _RRNSE,
  _s,
  _SC,
  _SCt,
  _se,
  _T,
  _UA,
  _xasc,
  _xaua,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PayloadBlob = sim(n0, _PB, 42, {
  [_s]: 1,
});
export var ContainerNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ContainerNotFoundException
);
export var DeleteObjectRequest = struct(n0, _DOR, 0, [_P], [[0, 1]]);
export var DeleteObjectResponse = struct(n0, _DORe, 0, [], []);
export var DescribeObjectRequest = struct(n0, _DORes, 0, [_P], [[0, 1]]);
export var DescribeObjectResponse = struct(
  n0,
  _DOResc,
  0,
  [_ET, _CT, _CL, _CC, _LM],
  [
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
  ]
);
export var GetObjectRequest = struct(
  n0,
  _GOR,
  0,
  [_P, _R],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _R,
      },
    ],
  ]
);
export var GetObjectResponse = struct(
  n0,
  _GORe,
  0,
  [_B, _CC, _CR, _CL, _CT, _ET, _LM, _SC],
  [
    [() => PayloadBlob, 16],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _CR_,
      },
    ],
    [
      1,
      {
        [_hH]: _CL_,
      },
    ],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      4,
      {
        [_hH]: _LM_,
      },
    ],
    [1, 32],
  ]
);
export var InternalServerError = error(
  n0,
  _ISE,
  {
    [_e]: _se,
  },
  [_M],
  [0],

  __InternalServerError
);
export var Item = struct(n0, _I, 0, [_N, _T, _ET, _LM, _CT, _CL], [0, 0, 0, 4, 0, 1]);
export var ListItemsRequest = struct(
  n0,
  _LIR,
  0,
  [_P, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _P,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListItemsResponse = struct(n0, _LIRi, 0, [_It, _NT], [() => ItemList, 0]);
export var ObjectNotFoundException = error(
  n0,
  _ONFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ObjectNotFoundException
);
export var PutObjectRequest = struct(
  n0,
  _POR,
  0,
  [_B, _P, _CT, _CC, _SCt, _UA],
  [
    [() => PayloadBlob, 16],
    [0, 1],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _CC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xasc,
      },
    ],
    [
      0,
      {
        [_hH]: _xaua,
      },
    ],
  ]
);
export var PutObjectResponse = struct(n0, _PORu, 0, [_CSHA, _ET, _SCt], [0, 0, 0]);
export var RequestedRangeNotSatisfiableException = error(
  n0,
  _RRNSE,
  {
    [_e]: _c,
    [_hE]: 416,
  },
  [_M],
  [0],

  __RequestedRangeNotSatisfiableException
);
export var Unit = "unit" as const;

export var ItemList = list(n0, _IL, 0, () => Item);
export var DeleteObject = op(
  n0,
  _DO,
  {
    [_h]: ["DELETE", "/{Path+}", 200],
  },
  () => DeleteObjectRequest,
  () => DeleteObjectResponse
);
export var DescribeObject = op(
  n0,
  _DOe,
  {
    [_h]: ["HEAD", "/{Path+}", 200],
  },
  () => DescribeObjectRequest,
  () => DescribeObjectResponse
);
export var GetObject = op(
  n0,
  _GO,
  {
    [_h]: ["GET", "/{Path+}", 200],
  },
  () => GetObjectRequest,
  () => GetObjectResponse
);
export var ListItems = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/", 200],
  },
  () => ListItemsRequest,
  () => ListItemsResponse
);
export var PutObject = op(
  n0,
  _PO,
  {
    [_h]: ["PUT", "/{Path+}", 200],
  },
  () => PutObjectRequest,
  () => PutObjectResponse
);
