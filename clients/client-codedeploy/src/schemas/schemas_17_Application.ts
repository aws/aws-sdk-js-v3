// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ApplicationAlreadyExistsException as __ApplicationAlreadyExistsException } from "../models/index";
import { _AAEE, _aN, _c, _er, _m, _nAN, _UA, _UAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationAlreadyExistsException = error(
  n0,
  _AAEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ApplicationAlreadyExistsException
);
export var UpdateApplicationInput = struct(n0, _UAI, 0, [_aN, _nAN], [0, 0]);
export var UpdateApplication = op(
  n0,
  _UA,
  0,
  () => UpdateApplicationInput,
  () => Unit
);
