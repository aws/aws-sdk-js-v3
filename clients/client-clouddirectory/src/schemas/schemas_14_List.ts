// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _API,
  _CL,
  _DA,
  _h,
  _hH,
  _LOPi,
  _LOPP,
  _LOPPR,
  _LOPPRi,
  _LOPRis,
  _LOPRist,
  _LPA,
  _LPAR,
  _LPARi,
  _MR,
  _NT,
  _OIb,
  _OR,
  _Pa,
  _PRo,
  _PTOI,
  _PTOIL,
  _xacl,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListObjectParentPathsRequest = struct(
  n0,
  _LOPPR,
  0,
  [_DA, _OR, _NT, _MR],
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
  ]
);
export var ListObjectParentPathsResponse = struct(
  n0,
  _LOPPRi,
  0,
  [_PTOIL, _NT],
  [() => PathToObjectIdentifiersList, 0]
);
export var ListObjectPoliciesRequest = struct(
  n0,
  _LOPRis,
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
export var ListObjectPoliciesResponse = struct(n0, _LOPRist, 0, [_API, _NT], [64 | 0, 0]);
export var ListPolicyAttachmentsRequest = struct(
  n0,
  _LPAR,
  0,
  [_DA, _PRo, _NT, _MR, _CL],
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
export var ListPolicyAttachmentsResponse = struct(n0, _LPARi, 0, [_OIb, _NT], [64 | 0, 0]);
export var PathToObjectIdentifiers = struct(n0, _PTOI, 0, [_Pa, _OIb], [0, 64 | 0]);
export var ObjectIdentifierList = 64 | 0;

export var PathToObjectIdentifiersList = list(n0, _PTOIL, 0, () => PathToObjectIdentifiers);
export var ListObjectParentPaths = op(
  n0,
  _LOPP,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/parentpaths", 200],
  },
  () => ListObjectParentPathsRequest,
  () => ListObjectParentPathsResponse
);
export var ListObjectPolicies = op(
  n0,
  _LOPi,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/policy", 200],
  },
  () => ListObjectPoliciesRequest,
  () => ListObjectPoliciesResponse
);
export var ListPolicyAttachments = op(
  n0,
  _LPA,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/policy/attachment", 200],
  },
  () => ListPolicyAttachmentsRequest,
  () => ListPolicyAttachmentsResponse
);
