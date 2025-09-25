// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CL,
  _DA,
  _FN,
  _GOI,
  _GOIR,
  _GOIRe,
  _h,
  _hH,
  _OI,
  _OR,
  _RFFO,
  _RFFOR,
  _RFFORe,
  _SA,
  _SF,
  _SFc,
  _SFL,
  _xacl,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetObjectInformationRequest = struct(
  n0,
  _GOIR,
  0,
  [_DA, _OR, _CL],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    [
      0,
      {
        [_hH]: _xacl,
      },
    ],
  ]
);
export var GetObjectInformationResponse = struct(n0, _GOIRe, 0, [_SFc, _OI], [() => SchemaFacetList, 0]);
export var RemoveFacetFromObjectRequest = struct(
  n0,
  _RFFOR,
  0,
  [_DA, _SF, _OR],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => SchemaFacet,
    () => ObjectReference,
  ]
);
export var RemoveFacetFromObjectResponse = struct(n0, _RFFORe, 0, [], []);
export var SchemaFacet = struct(n0, _SF, 0, [_SA, _FN], [0, 0]);
export var SchemaFacetList = list(n0, _SFL, 0, () => SchemaFacet);
export var GetObjectInformation = op(
  n0,
  _GOI,
  {
    [_h]: ["POST", "/amazonclouddirectory/2017-01-11/object/information", 200],
  },
  () => GetObjectInformationRequest,
  () => GetObjectInformationResponse
);
export var RemoveFacetFromObject = op(
  n0,
  _RFFO,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/facets/delete", 200],
  },
  () => RemoveFacetFromObjectRequest,
  () => RemoveFacetFromObjectResponse
);
