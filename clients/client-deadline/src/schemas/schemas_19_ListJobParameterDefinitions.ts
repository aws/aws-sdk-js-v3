// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _end, _fI, _h, _hQ, _jI, _jPD, _LJPD, _LJPDR, _LJPDRi, _mR, _nT, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListJobParameterDefinitionsRequest = struct(
  n0,
  _LJPDR,
  0,
  [_fI, _jI, _qI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListJobParameterDefinitionsResponse = struct(n0, _LJPDRi, 0, [_jPD, _nT], [64 | 15, 0]);
export var JobParameterDefinitions = 64 | 15;

export var ListJobParameterDefinitions = op(
  n0,
  _LJPD,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/parameter-definitions", 200],
  },
  () => ListJobParameterDefinitionsRequest,
  () => ListJobParameterDefinitionsResponse
);
