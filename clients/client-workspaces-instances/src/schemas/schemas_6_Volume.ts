// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _c, _DV, _DVR, _DVRe, _e, _hE, _M, _RI, _RNFE, _RT, _VI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVolumeRequest = struct(n0, _DVR, 0, [_VI], [0]);
export var DeleteVolumeResponse = struct(n0, _DVRe, 0, [], []);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var DeleteVolume = op(
  n0,
  _DV,
  0,
  () => DeleteVolumeRequest,
  () => DeleteVolumeResponse
);
