// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _end, _ht, _pDr, _pIr, _pNr, _UPp, _UPRpd, _UPRpda, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateProjectRequest = struct(n0, _UPRpd, 0, [_pIr, _pNr, _pDr, _cT], [[0, 1], 0, 0, [0, 4]]);
export var UpdateProjectResponse = struct(n0, _UPRpda, 0, [], []);
export var UpdateProject = op(
  n0,
  _UPp,
  {
    [_ht]: ["PUT", "/projects/{projectId}", 200],
    [_end]: ["monitor."],
  },
  () => UpdateProjectRequest,
  () => UpdateProjectResponse
);
