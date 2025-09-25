// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _aQE, _BI, _c, _DPB, _DPBR, _DPBRe, _e, _M, _RIUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePatchBaselineRequest = struct(n0, _DPBR, 0, [_BI], [0]);
export var DeletePatchBaselineResult = struct(n0, _DPBRe, 0, [_BI], [0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceInUseException`, 400],
  },
  [_M],
  [0],

  __ResourceInUseException
);
export var DeletePatchBaseline = op(
  n0,
  _DPB,
  0,
  () => DeletePatchBaselineRequest,
  () => DeletePatchBaselineResult
);
