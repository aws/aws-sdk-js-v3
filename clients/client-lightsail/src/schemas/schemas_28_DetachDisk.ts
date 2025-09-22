// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDet, _DDRet, _DDReta, _dNi, _ht, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachDiskRequest = struct(n0, _DDRet, 0, [_dNi], [0]);
export var DetachDiskResult = struct(n0, _DDReta, 0, [_o], [() => OperationList]);
export var DetachDisk = op(
  n0,
  _DDet,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DetachDisk", 200],
  },
  () => DetachDiskRequest,
  () => DetachDiskResult
);
