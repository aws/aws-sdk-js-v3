// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADR, _ADRt, _ADt, _aM, _dNi, _dP, _ht, _iN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var AttachDiskRequest = struct(n0, _ADR, 0, [_dNi, _iN, _dP, _aM], [0, 0, 0, 2]);
export var AttachDiskResult = struct(n0, _ADRt, 0, [_o], [() => OperationList]);
export var AttachDisk = op(
  n0,
  _ADt,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/AttachDisk", 200],
  },
  () => AttachDiskRequest,
  () => AttachDiskResult
);
