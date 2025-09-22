// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LinkNameAlreadyInUseException as __LinkNameAlreadyInUseException } from "../models/index";
import {
  _AU,
  _c,
  _DA,
  _e,
  _h,
  _hE,
  _hH,
  _LNAIUE,
  _M,
  _OI,
  _OR,
  _UOA,
  _UOAR,
  _UOARp,
  _xadp,
  n0,
  ObjectReference,
} from "./schemas_0";
import { ObjectAttributeUpdateList } from "./schemas_26_Update";

/* eslint no-var: 0 */

export var LinkNameAlreadyInUseException = error(
  n0,
  _LNAIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __LinkNameAlreadyInUseException
);
export var UpdateObjectAttributesRequest = struct(
  n0,
  _UOAR,
  0,
  [_DA, _OR, _AU],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    () => ObjectReference,
    () => ObjectAttributeUpdateList,
  ]
);
export var UpdateObjectAttributesResponse = struct(n0, _UOARp, 0, [_OI], [0]);
export var UpdateObjectAttributes = op(
  n0,
  _UOA,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/object/update", 200],
  },
  () => UpdateObjectAttributesRequest,
  () => UpdateObjectAttributesResponse
);
