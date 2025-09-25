// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DPe, _DPRel, _DPRele, _end, _hQ, _ht, _iT, _pIr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectRequest = struct(
  n0,
  _DPRel,
  0,
  [_pIr, _cT],
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
export var DeleteProjectResponse = struct(n0, _DPRele, 0, [], []);
export var DeleteProject = op(
  n0,
  _DPe,
  {
    [_ht]: ["DELETE", "/projects/{projectId}", 204],
    [_end]: ["monitor."],
  },
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
