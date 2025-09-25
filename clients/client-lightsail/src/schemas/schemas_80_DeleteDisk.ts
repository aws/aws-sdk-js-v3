// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _dNi, _fDAO, _ht, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDiskRequest = struct(n0, _DDR, 0, [_dNi, _fDAO], [0, 2]);
export var DeleteDiskResult = struct(n0, _DDRe, 0, [_o], [() => OperationList]);
export var DeleteDisk = op(
  n0,
  _DD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteDisk", 200],
  },
  () => DeleteDiskRequest,
  () => DeleteDiskResult
);
