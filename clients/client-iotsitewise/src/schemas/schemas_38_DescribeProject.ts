// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPesc, _DPRescr, _DPRescri, _end, _ht, _pAr, _pCDr, _pDr, _pIo, _pIr, _pLUDr, _pNr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeProjectRequest = struct(n0, _DPRescr, 0, [_pIr], [[0, 1]]);
export var DescribeProjectResponse = struct(
  n0,
  _DPRescri,
  0,
  [_pIr, _pAr, _pNr, _pIo, _pDr, _pCDr, _pLUDr],
  [0, 0, 0, 0, 0, 4, 4]
);
export var DescribeProject = op(
  n0,
  _DPesc,
  {
    [_ht]: ["GET", "/projects/{projectId}", 200],
    [_end]: ["monitor."],
  },
  () => DescribeProjectRequest,
  () => DescribeProjectResponse
);
