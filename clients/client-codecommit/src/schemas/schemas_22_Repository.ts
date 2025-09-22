// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidRepositoryDescriptionException as __InvalidRepositoryDescriptionException } from "../models/index";
import { _c, _e, _IRDE, _m, _rD, _rN, _URD, _URDI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidRepositoryDescriptionException = error(
  n0,
  _IRDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryDescriptionException
);
export var UpdateRepositoryDescriptionInput = struct(n0, _URDI, 0, [_rN, _rD], [0, 0]);
export var UpdateRepositoryDescription = op(
  n0,
  _URD,
  0,
  () => UpdateRepositoryDescriptionInput,
  () => Unit
);
