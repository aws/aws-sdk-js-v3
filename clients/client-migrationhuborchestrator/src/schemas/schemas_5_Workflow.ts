// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _DMWR,
  _DMWRe,
  _DW,
  _ht,
  _i,
  _lST,
  _lSTa,
  _s,
  _sM,
  _SMWR,
  _SMWRt,
  _SMWRto,
  _SMWRtop,
  _SW,
  _SWt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMigrationWorkflowRequest = struct(n0, _DMWR, 0, [_i], [[0, 1]]);
export var DeleteMigrationWorkflowResponse = struct(n0, _DMWRe, 0, [_i, _a, _s], [0, 0, 0]);
export var StartMigrationWorkflowRequest = struct(n0, _SMWR, 0, [_i], [[0, 1]]);
export var StartMigrationWorkflowResponse = struct(n0, _SMWRt, 0, [_i, _a, _s, _sM, _lST], [0, 0, 0, 0, 4]);
export var StopMigrationWorkflowRequest = struct(n0, _SMWRto, 0, [_i], [[0, 1]]);
export var StopMigrationWorkflowResponse = struct(n0, _SMWRtop, 0, [_i, _a, _s, _sM, _lSTa], [0, 0, 0, 0, 4]);
export var DeleteWorkflow = op(
  n0,
  _DW,
  {
    [_ht]: ["DELETE", "/migrationworkflow/{id}", 202],
  },
  () => DeleteMigrationWorkflowRequest,
  () => DeleteMigrationWorkflowResponse
);
export var StartWorkflow = op(
  n0,
  _SW,
  {
    [_ht]: ["POST", "/migrationworkflow/{id}/start", 200],
  },
  () => StartMigrationWorkflowRequest,
  () => StartMigrationWorkflowResponse
);
export var StopWorkflow = op(
  n0,
  _SWt,
  {
    [_ht]: ["POST", "/migrationworkflow/{id}/stop", 200],
  },
  () => StopMigrationWorkflowRequest,
  () => StopMigrationWorkflowResponse
);
