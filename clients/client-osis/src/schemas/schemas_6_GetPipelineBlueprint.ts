// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _BN, _DD, _DN, _F, _f, _GPB, _GPBR, _GPBRe, _h, _hQ, _PB, _PCB, _Se, _UC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPipelineBlueprintRequest = struct(
  n0,
  _GPBR,
  0,
  [_BN, _F],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var GetPipelineBlueprintResponse = struct(n0, _GPBRe, 0, [_B, _F], [() => PipelineBlueprint, 0]);
export var PipelineBlueprint = struct(n0, _PB, 0, [_BN, _PCB, _DN, _DD, _Se, _UC], [0, 0, 0, 0, 0, 0]);
export var GetPipelineBlueprint = op(
  n0,
  _GPB,
  {
    [_h]: ["GET", "/2022-01-01/osis/getPipelineBlueprint/{BlueprintName}", 200],
  },
  () => GetPipelineBlueprintRequest,
  () => GetPipelineBlueprintResponse
);
