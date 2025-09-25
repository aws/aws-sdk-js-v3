// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cMIo,
  _CMS,
  _cMS,
  _cT,
  _DCM,
  _DCMR,
  _DCMRe,
  _e,
  _end,
  _hQ,
  _ht,
  _iT,
  _st,
  ErrorDetails,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComputationModelStatus = struct(n0, _CMS, 0, [_st, _e], [0, () => ErrorDetails]);
export var DeleteComputationModelRequest = struct(
  n0,
  _DCMR,
  0,
  [_cMIo, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteComputationModelResponse = struct(n0, _DCMRe, 0, [_cMS], [() => ComputationModelStatus]);
export var DeleteComputationModel = op(
  n0,
  _DCM,
  {
    [_ht]: ["DELETE", "/computation-models/{computationModelId}", 202],
    [_end]: ["api."],
  },
  () => DeleteComputationModelRequest,
  () => DeleteComputationModelResponse
);
