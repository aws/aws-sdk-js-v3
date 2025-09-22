// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dI, _DPe, _DPIe, _DPO, _hQ, _ht, _i, _sDC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectInput = struct(
  n0,
  _DPIe,
  0,
  [_dI, _i, _sDC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sDC,
      },
    ],
  ]
);
export var DeleteProjectOutput = struct(n0, _DPO, 0, [], []);
export var DeleteProject = op(
  n0,
  _DPe,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/projects/{identifier}", 204],
  },
  () => DeleteProjectInput,
  () => DeleteProjectOutput
);
