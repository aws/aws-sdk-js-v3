// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMCP, _DMCPR, _h, _MPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMediaCapturePipelineRequest = struct(n0, _DMCPR, 0, [_MPI], [[0, 1]]);
export var DeleteMediaCapturePipeline = op(
  n0,
  _DMCP,
  {
    [_h]: ["DELETE", "/sdk-media-capture-pipelines/{MediaPipelineId}", 204],
  },
  () => DeleteMediaCapturePipelineRequest,
  () => Unit
);
