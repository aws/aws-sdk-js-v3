// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _c, _CJ, _CJR, _CJRa, _DPe, _DPR, _DPRe, _e, _h, _hE, _I, _m, _RIUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobRequest = struct(n0, _CJR, 0, [_I], [[0, 1]]);
export var CancelJobResponse = struct(n0, _CJRa, 0, [], []);
export var DeletePipelineRequest = struct(n0, _DPR, 0, [_I], [[0, 1]]);
export var DeletePipelineResponse = struct(n0, _DPRe, 0, [], []);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var CancelJob = op(
  n0,
  _CJ,
  {
    [_h]: ["DELETE", "/2012-09-25/jobs/{Id}", 202],
  },
  () => CancelJobRequest,
  () => CancelJobResponse
);
export var DeletePipeline = op(
  n0,
  _DPe,
  {
    [_h]: ["DELETE", "/2012-09-25/pipelines/{Id}", 202],
  },
  () => DeletePipelineRequest,
  () => DeletePipelineResponse
);
