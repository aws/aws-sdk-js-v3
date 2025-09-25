// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _DP, _DPR, _DPRe, _e, _h, _hE, _m, _PN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var DeletePipelineRequest = struct(n0, _DPR, 0, [_PN], [[0, 1]]);
export var DeletePipelineResponse = struct(n0, _DPRe, 0, [], []);
export var DeletePipeline = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/2022-01-01/osis/deletePipeline/{PipelineName}", 200],
  },
  () => DeletePipelineRequest,
  () => DeletePipelineResponse
);
