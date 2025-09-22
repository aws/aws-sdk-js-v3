// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeploymentConfigDoesNotExistException as __DeploymentConfigDoesNotExistException } from "../models/index";
import { _c, _DCDNEE, _er, _m, _RA, _TK, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentConfigDoesNotExistException = error(
  n0,
  _DCDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentConfigDoesNotExistException
);
export var UntagResourceInput = struct(n0, _URI, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceInput,
  () => UntagResourceOutput
);
