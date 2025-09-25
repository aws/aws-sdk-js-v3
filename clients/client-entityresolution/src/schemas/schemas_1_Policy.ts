// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _APS,
  _APSI,
  _APSO,
  _co,
  _DPS,
  _DPSI,
  _DPSO,
  _ef,
  _GP,
  _GPI,
  _GPO,
  _ht,
  _p,
  _po,
  _PPI,
  _PPO,
  _PPu,
  _sI,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddPolicyStatementInput = struct(
  n0,
  _APSI,
  0,
  [_a, _sI, _ef, _ac, _p, _co],
  [[0, 1], [0, 1], 0, 64 | 0, 64 | 0, 0]
);
export var AddPolicyStatementOutput = struct(n0, _APSO, 0, [_a, _t, _po], [0, 0, 0]);
export var DeletePolicyStatementInput = struct(
  n0,
  _DPSI,
  0,
  [_a, _sI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePolicyStatementOutput = struct(n0, _DPSO, 0, [_a, _t, _po], [0, 0, 0]);
export var GetPolicyInput = struct(n0, _GPI, 0, [_a], [[0, 1]]);
export var GetPolicyOutput = struct(n0, _GPO, 0, [_a, _t, _po], [0, 0, 0]);
export var PutPolicyInput = struct(n0, _PPI, 0, [_a, _t, _po], [[0, 1], 0, 0]);
export var PutPolicyOutput = struct(n0, _PPO, 0, [_a, _t, _po], [0, 0, 0]);
export var StatementActionList = 64 | 0;

export var StatementPrincipalList = 64 | 0;

export var AddPolicyStatement = op(
  n0,
  _APS,
  {
    [_ht]: ["POST", "/policies/{arn}/{statementId}", 200],
  },
  () => AddPolicyStatementInput,
  () => AddPolicyStatementOutput
);
export var DeletePolicyStatement = op(
  n0,
  _DPS,
  {
    [_ht]: ["DELETE", "/policies/{arn}/{statementId}", 200],
  },
  () => DeletePolicyStatementInput,
  () => DeletePolicyStatementOutput
);
export var GetPolicy = op(
  n0,
  _GP,
  {
    [_ht]: ["GET", "/policies/{arn}", 200],
  },
  () => GetPolicyInput,
  () => GetPolicyOutput
);
export var PutPolicy = op(
  n0,
  _PPu,
  {
    [_ht]: ["PUT", "/policies/{arn}", 200],
  },
  () => PutPolicyInput,
  () => PutPolicyOutput
);
