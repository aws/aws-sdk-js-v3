// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidRuleException as __InvalidRuleException,
  InvalidSchemaDocException as __InvalidSchemaDocException,
} from "../models/index";
import { _Ar, _c, _Do, _e, _h, _hE, _hH, _IRE, _ISDE, _M, _PSFJ, _PSFJR, _PSFJRu, _SA, _xadp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidRuleException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRuleException
);
export var InvalidSchemaDocException = error(
  n0,
  _ISDE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidSchemaDocException
);
export var PutSchemaFromJsonRequest = struct(
  n0,
  _PSFJR,
  0,
  [_SA, _Do],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
    0,
  ]
);
export var PutSchemaFromJsonResponse = struct(n0, _PSFJRu, 0, [_Ar], [0]);
export var PutSchemaFromJson = op(
  n0,
  _PSFJ,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema/json", 200],
  },
  () => PutSchemaFromJsonRequest,
  () => PutSchemaFromJsonResponse
);
