// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { StillContainsLinksException as __StillContainsLinksException } from "../models/index";
import { _c, _DS, _DSR, _DSRe, _e, _h, _hE, _hH, _M, _SA, _SCLE, _xadp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchemaRequest = struct(
  n0,
  _DSR,
  0,
  [_SA],
  [
    [
      0,
      {
        [_hH]: _xadp,
      },
    ],
  ]
);
export var DeleteSchemaResponse = struct(n0, _DSRe, 0, [_SA], [0]);
export var StillContainsLinksException = error(
  n0,
  _SCLE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __StillContainsLinksException
);
export var DeleteSchema = op(
  n0,
  _DS,
  {
    [_h]: ["PUT", "/amazonclouddirectory/2017-01-11/schema", 200],
  },
  () => DeleteSchemaRequest,
  () => DeleteSchemaResponse
);
