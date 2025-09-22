// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RepositoryNameExistsException as __RepositoryNameExistsException } from "../models/index";
import { _c, _e, _m, _nN, _oN, _RNEE, _URN, _URNI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RepositoryNameExistsException = error(
  n0,
  _RNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryNameExistsException
);
export var UpdateRepositoryNameInput = struct(n0, _URNI, 0, [_oN, _nN], [0, 0]);
export var UpdateRepositoryName = op(
  n0,
  _URN,
  0,
  () => UpdateRepositoryNameInput,
  () => Unit
);
